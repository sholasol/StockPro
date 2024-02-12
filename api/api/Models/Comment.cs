using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
	[Table("Comments")]

	public class Comment
	{
		public int Id { get; set; }

		public string Title { get; set; } = string.Empty;

		public string Content { get; set; } = string.Empty;

		public DateTime CreatedOn { get; set; } = DateTime.Now;

		public int? StockId { get; set; }

		public Stock? Stock { get; set; }

		//create ono-one relationship between comment and user
		public string AppUserId { set; get; }

		public AppUser AppUser { get; set; }

	}
}

