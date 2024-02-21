import React from 'react'
import { CommentGet } from '../../Models/Comment'

type Props = {
    comment: CommentGet
}

const StockCommentListItem = ({comment}: Props) => {
  return (
    <>
        <div className="card mb-2">
        <div className="card-body">
            <h5 className="card-title">{comment.title}</h5>
           <div className="row">
            <div className="col-md-12">
                <p>
                    {comment.content}
                </p>
                <p><small>@{comment.createdBy}</small></p>
            </div>
           </div>
        </div>
        </div>
    </>
  )
}

export default StockCommentListItem