﻿using System;
using api.Dtos.Comment;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
	[Route("api/comment")]
	[ApiController]

	public class CommentController : ControllerBase
	{
		private readonly ICommentRepository _commentRepo;
		private readonly IStockRepository _stockRepo;
		private readonly UserManager<AppUser> _userManager;
		private readonly IFMPService _fmpService;

		public CommentController(
			ICommentRepository commentRepo,
			IStockRepository stockRepo,
			UserManager<AppUser> userManager,
			IFMPService fMPService)
		{
            _commentRepo = commentRepo;
			_stockRepo = stockRepo;
			_userManager = userManager;
			_fmpService = fMPService;
		}


		[HttpGet]
		[Authorize]
        //public async Task<IActionResult> GetAll() -> this dumps the entire table
        public async Task<IActionResult> GetAll([FromQuery] CommentQueryObject queryObject)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			var comments = await _commentRepo.GetAllAsync(queryObject);

			var commentDto = comments.Select(s => s.ToCommentDto());

			return Ok(commentDto);
		}

		[HttpGet("{id:int}")]
		public async Task<IActionResult> GetById([FromRoute] int id)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.GetByIdAsync(id);

			if (comment == null)
			{
				return NotFound();
			}

			return Ok(comment.ToCommentDto());
		}

        //[HttpPost("{stockId:int}")]
        //public async Task<IActionResult> Create([FromRoute] int stockId, CreateCommentDto commentDto)
        //{
        //          if (!ModelState.IsValid)
        //              return BadRequest(ModelState);

        //          if (!await _stockRepo.StockExists(stockId))
        //	{
        //		return BadRequest("Stock does not exists");
        //	}
        //	//get user detail 
        //	var username = User.GetUsername();
        //	var appUser = await _userManager.FindByNameAsync(username);



        //	var commentModel = commentDto.ToCommentFromCreate(stockId);
        //	commentModel.AppUserId = appUser.Id; //add user to the comment

        //	await _commentRepo.CreateAsync(commentModel);

        //	return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
        //}

        [HttpPost("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, CreateCommentDto commentDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

			var stock = await _stockRepo.GetBySymbolAsync(symbol);

			if(stock == null)
			{
				stock = await _fmpService.FindStockBySymbolAsync(symbol);
				if(stock == null)
				{
					return BadRequest("Stock does not exists");
				}
				else
				{
					await _stockRepo.CreateAsync(stock);
				}
			}

            
            //get user detail 
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);



            var commentModel = commentDto.ToCommentFromCreate(stock.Id);
            commentModel.AppUserId = appUser.Id; //add user to the comment

            await _commentRepo.CreateAsync(commentModel);

            return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
        }

        [HttpPut]
		[Route("{id:int}")]
		public async Task<IActionResult> Update([FromRoute] int id, [FromBody] updateCommentRequestDto updateDto)
		{
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.UpdateAsync(id, updateDto.ToCommentFromUpdate());

			if(comment == null)
			{
				return NotFound("Commwnt Not Found");
			}

			return Ok(comment.ToCommentDto());
		}

		[HttpDelete]
		[Route("{id:int}")]
		public async Task<IActionResult> Delete([FromRoute] int id)
		{
			var commentModel = await _commentRepo.DeleteAsync(id);

			if(commentModel == null)
			{
				return NotFound("Comment does not exists");
			}

			return Ok(commentModel);
		}
	}
}

