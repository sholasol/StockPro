﻿using System;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
	[Route("api/stock")]
	[ApiController]

	public class StockController : ControllerBase
    {
		private readonly ApplicationDBContext _context;
		private readonly IStockRepository _stockRepo;


		public StockController(ApplicationDBContext context, IStockRepository stockRepo)
		{
			_stockRepo = stockRepo;
			_context  = context;
		}


		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stocks = await _stockRepo.GetAllAsync();

			var stockDto = 	stocks.Select(s => s.ToStockDto());

			return Ok(stocks);
		}


		[HttpGet("{id:int}")]
		public async Task<IActionResult> GetById([FromRoute] int id)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stock = await _stockRepo.GetByIdAsync(id);

			if(stock == null)
			{
				return NotFound();
			}

			return Ok(stock.ToStockDto());
		}


		[HttpPost]
		public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = stockDto.ToStockFromCreateDTO();

			await _stockRepo.CreateAsync(stockModel);
			return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());
		}

		[HttpPut]
		[Route("{id:int}")]
		public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.UpdateAsync(id, updateDto);

			if(stockModel == null)
			{
				return NotFound();
			}


			return Ok(stockModel.ToStockDto());
		}

		[HttpDelete]
		[Route("{id:int}")]
		public async Task<IActionResult> Delete([FromRoute] int id)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.DeleteAsync(id);

			if(stockModel == null)
			{
				return NotFound();
			}


			return NoContent();
		}

	}
}

 