import React from 'react';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from '../FieldErrorAlert';

const CommentForm = ({onSubmit}) => {
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm();
    return (
        <div>
           
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='bg-gray-200 rounded-md p-4'>
                <div>
                    {/* <label htmlFor="">Your Comment</label> */}
                    <textarea 
                        {...register("content",{
                            required:"Comment Content is required"
                        })}
                        placeholder='Create a new Comment to the story'
                        className='w-full border rounded-md p-2'
                        />
                        {errors.content && (<FieldErrorAlert message={errors.content.message}/>)}
                </div>
                {/* Button */}
                <div className='flex justify-end'>
                    <button
                        type='submit'
                        className='btn btn-accent  px-4'
                        disabled={isSubmitting}

                    >
                        {isSubmitting? "Submitting...": "Post"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;