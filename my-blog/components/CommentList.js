import CommentForm from 'components/CommentForm';
function CommentList({ comments, handleReplySubmit }) {
    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            {comment.replies.length > 0 && (
              <ul>
                {comment.replies.map((reply) => (
                  <li key={reply.id}>
                    <p>{reply.text}</p>
                  </li>
                ))}
              </ul>
            )}
            <CommentForm onSubmit={(reply) => handleReplySubmit(reply, comment)} />
           
          </li>
        ))}
      </ul>
    );
  }
  export default CommentList;