using System;
using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
	public static class CommentMapper
	{
		public static CommentDto ToCommentDto(this Comment CommentModel)
		{
			return new CommentDto
			{
				Id = CommentModel.Id,
				Title = CommentModel.Title,
				Content = CommentModel.Content,
				StockId = CommentModel.StockId,
				CreatedOn = CommentModel.CreatedOn
			};
		}

        public static Comment ToCommentFromCreate(this CreateCommentDto CommentDto, int stockId)
        {
            return new Comment
            {
                
                Title = CommentDto.Title,
                Content = CommentDto.Content,
				StockId = stockId
            };
        }
    }
}

