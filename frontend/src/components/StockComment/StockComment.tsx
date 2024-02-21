import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../services/commentService';
import { toast } from 'react-toastify';

type Props = {
    stockSymbol: string;
}

type CommentFormInputs = {
    title: string;
    content: string;
};

const StockComment = ({stockSymbol}: Props) => {

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res){
                toast.success("Comment Created Successfully");
            }
        }).catch((e) => {
            toast.warning(e);
        })
    }

  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  )
}

export default StockComment