import React from 'react'
import * as Yup from "yup"
import  { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

type Props = {
    symbol: string;
    handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
    title: string;
    content: string;
};

const validation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Comment is required"),
});

const StockCommentForm = ({symbol, handleComment}: Props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CommentFormInputs>({resolver: yupResolver(validation) });

    

  return (
    <div className="card">
        <div className="card-body">
            <div className="card col-md-12 mb-2">
                <h5 className="card-header">Create Stock Comment</h5>
                <div className="card-body">
                   <form onSubmit={handleSubmit(handleComment)}>
                    <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                    type="text" 
                    id='title' 
                    className="form-control" 
                    {...register("title")}
                     />
                     {errors.title ? <p className='error'>{errors.title.message}</p> : ""}
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Comment</label>
                    <textarea 
                    id="comment" 
                    className='form-control'
                    rows={5}
                    placeholder='Enter your comment here...'
                    {...register('content')}
                    ></textarea>
                    {errors.content ? <p className='error'>{errors.content.message}</p> : ""}
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StockCommentForm