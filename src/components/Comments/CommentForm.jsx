import React from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../FieldErrorAlert';

const CommentForm = ({onSubmit}) => {
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm();
    return (
        <div>
            Create a new Comment
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='bg-gray-200'>
                <div>
                    {/* <label htmlFor="">Your Comment</label> */}
                    <textarea 
                        {...register("content",{
                            required:"Comment Content is required"
                        })}
                        placeholder='Create a new Comment to the story'
                        className='w-full'
                        />
                        {errors.content && (<FieldErrorAlert message={errors.content.message}/>)}
                </div>
                {/* Button */}
                <button
                    type='submit'
                    className='btn btn-accent px-4'
                    disabled={isSubmitting}
                >
                    {isSubmitting? "Submitting...": "Post Comment"}
                </button>
            </form>
        </div>
    );
};

export default CommentForm;