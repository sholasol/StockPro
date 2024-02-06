using System;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
	public class ApplicationDBContext: IdentityDbContext<AppUser>
	{
		public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options)
		{
		}

		public DbSet<Stock> Stocks { get; set; }

		public DbSet<Comment> Comments { get; set; }

		public DbSet <Portfolio> Portfolios{ get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

			//setup foreign key for potfolio
			builder.Entity<Portfolio>(x => x.HasKey(p => new { p.AppUserId, p.StockId }));

			//portfolio and appuser many to mane relationship
			builder.Entity<Portfolio>()
				.HasOne(u => u.AppUser)
				.WithMany(u => u.Portfolios)
				.HasForeignKey(p => p.AppUserId);

            //stock and portfolio many to mane relationship
            builder.Entity<Portfolio>()
                .HasOne(u => u.Stock)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.StockId);

            List<IdentityRole> roles = new List<IdentityRole>
			{
				new IdentityRole
				{
					Name = "Admin",
					NormalizedName = "ADMIN"
				},
				new IdentityRole
				{
					Name = "User",
					NormalizedName = "USER"
				},
			};

			builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}

