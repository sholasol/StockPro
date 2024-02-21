import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetApi, commentPostAPI } from '../../services/commentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import StockCommentList from '../StockCommentList/StockCommentList';
import Spinner from '../Spinners/Spinner';

type Props = {
    stockSymbol: string;
}

type CommentFormInputs = {
    title: string;
    content: string;
};

const StockComment = ({stockSymbol}: Props) => {

    const [comments, setComments] = useState<CommentGet[] | null>(null);

    const [loading, setLoading] = useState<boolean>();

    //load comment after re-rendring
    useEffect(() => {
        getComments();
    }, []);

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res){
                toast.success("Comment Created Successfully");
                getComments();
            }
        }).catch((e) => {
            toast.warning(e);
        })
    }

    const getComments = () => {
        setLoading(true);
        commentGetApi(stockSymbol)
        .then((res) => {
            setLoading(false);
            setComments(res?.data!);
        })
    }
  return (
    <>
    <div className="row">
    <h3> User Comments</h3> <hr className='text-success'/>
    {loading ? <Spinner /> : <StockCommentList comments={comments!} /> }
    <hr className='mb-5 text-primary'/>
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
    
    </>
  )
}

export default StockComment