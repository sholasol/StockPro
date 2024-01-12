using System;
using api.Dtos.Stock;
using api.Models;

namespace api.Interfaces
{
	public interface IStockRepository
	{
		Task<List<Stock>> GetAllAsync();

		Task<Stock?> GetByIdAsync(int id); //this can be null hence the ?

		Task<Stock> CreateAsync(Stock stockModel);

		Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto);

		Task<Stock?> DeleteAsync(int id);
	}
}

