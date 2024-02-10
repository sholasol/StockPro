﻿using System;
using System.Security.Claims;

namespace api.Extensions
{
	public static class ClaimExtensions
	{
		public static string GetUsername(this ClaimsPrincipal user)
		{
			//get token http context
			return user.Claims.SingleOrDefault(x => x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")).Value;
		}
	}
}

