using System;
namespace api.Dtos.Comment
{
	public class updateCommentRequestDto
	{
		public string Title { get; set; } = string.Empty;

		public string Content { get; set; } = string.Empty;
	}
}

