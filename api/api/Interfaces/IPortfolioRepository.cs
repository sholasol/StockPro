using System;
using api.Models;

namespace api.Interfaces
{
	public interface IPortfolioRepository
	{
		Task<List<Stock>> GetUserPortolio(AppUser user);

		Task<Portfolio> CreateAsync(Portfolio portfolio);

		Task<Portfolio> DeletePortfolio(AppUser appUser, string symbol);
	}
}

