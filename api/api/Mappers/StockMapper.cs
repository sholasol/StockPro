﻿using System;
using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
	public static class StockMapper
	{
		public static StockDto ToStockDto(this Stock StockModel)
		{
			return new StockDto
			{
				Id = StockModel.Id,
				Symbol = StockModel.Symbol,
				CompanyName = StockModel.CompanyName,
				Purchase = StockModel.Purchase,
				LastDiv = StockModel.LastDiv,
				Industry = StockModel.Industry,
				MarketCap = StockModel.MarketCap,
				Comments = StockModel.Comments.Select(c => c.ToCommentDto()).ToList()
			};
		}

		public static Stock ToStockFromCreateDTO(this CreateStockRequestDto StockDto)
		{
			return new Stock
			{
				Symbol = StockDto.Symbol,
				CompanyName = StockDto.CompanyName,
				Purchase = StockDto.Purchase,
				LastDiv = StockDto.LastDiv,
				Industry = StockDto.Industry,
				MarketCap = StockDto.MarketCap
			};
		}


        public static Stock ToStockFromFMP(this FMPStock fmpStock)
        {
            return new Stock
            {
                Symbol = fmpStock.symbol,
                CompanyName = fmpStock.companyName,
                Purchase = (decimal)fmpStock.price,
                LastDiv = (decimal)fmpStock.lastDiv,
                Industry = fmpStock.industry,
                MarketCap = fmpStock.mktCap
            };
        }


    }
}

