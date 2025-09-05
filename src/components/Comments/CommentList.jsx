
import CommentCard from './CommentCard';

const CommentList = ({comments, user,editingId,setEditingId, editComment, setEditComment,handleUpdateComment,handleDeleteComment}) => {
    
    return (
        <div>
            {/* Comment List */}
            {comments.map(comment=>(
                <CommentCard 
                    key={comment.id} 
                    comment={comment}
                    user={user}
                    isEditing={editingId === comment.id}
                    editingId={editingId}
                    editComment={editComment}
                    setEditComment={setEditComment}
                    onEditClick={()=>{
                        setEditingId(comment.id);
                        setEditComment({
                            content:comment.content,
                        });
                    }}
                    onCancelEditClick={()=>setEditingId(null)}
                    onSaveEditClick={handleUpdateComment}
                    onDeleteClick={()=>handleDeleteComment(comment.id)}/>
            ))}
        </div>
    );
};

export default CommentList;