﻿using System;
using api.Models;
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
	}
}

