﻿using System;
using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]

    public class PortfolioController: ControllerBase
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly IStockRepository _stockRepo;
		private readonly IPortfolioRepository _portfolioRepo;

		public PortfolioController(UserManager<AppUser> userManager, IStockRepository stockRepo, IPortfolioRepository portfolioRepo)
		{
			_userManager = userManager;
			_stockRepo = stockRepo;
			_portfolioRepo = portfolioRepo;
		}

		[HttpGet]
		[Authorize]

		public async Task<IActionResult> GetUserPortfolio()
		{
			var username = User.GetUsername();
			var appUser = await _userManager.FindByNameAsync(username);
			var userPortfolio = await _portfolioRepo.GetUserPortolio(appUser);

			return Ok(userPortfolio);
		}

		[HttpPost]
		[Authorize]

		public async Task<IActionResult> AddPortfolio(string symbol)
		{
			var username = User.GetUsername();
			var appUser = await _userManager.FindByNameAsync(username);
			var stock = await _stockRepo.GetBySymbolAsync(symbol);

			if (stock == null) return BadRequest("Stock Not Found");

			var userPortfolio = await _portfolioRepo.GetUserPortolio(appUser);

			if (userPortfolio.Any(e => e.Symbol.ToLower() == symbol.ToLower()))
				return BadRequest("Stock exists and cannot add same stock to the portfolio");

			//creating new portfolio
			var portfolioModel = new Portfolio
			{
				StockId = stock.Id,
				AppUserId = appUser.Id
			};

			await _portfolioRepo.CreateAsync(portfolioModel);

			if(portfolioModel == null)
			{
				return StatusCode(500, "Could not create the portfolio");
			}
			else
			{
				//return Created();

				return NoContent();
			}
		}
	}
}

