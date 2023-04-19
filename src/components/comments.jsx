import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../api";

const Comments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {
        fetchComments(review_id).then((result) => {
            setComments(result);
            setCommentsLoading(false);
        });
    }, [review_id]);

    const submitComment = () => {
        postComment(review_id, "Elena", body);
    };

    if (comments.length === 0 && !commentsLoading) {
        return (
            <div>
                <h3>This review has no comments...</h3>
                <form>
                    <label>Add a comment: </label>
                    <br></br>
                    <input type="text" id="comment_body" />
                    <input type="submit" onClick={submitComment} />
                </form>
            </div>
        );
    }

    if (commentsLoading) {
        return <h3>Loading...</h3>;
    }

    if (!commentsLoading) {
        return (
            <div>
                <h2>Comments</h2>
                <form>
                    <label>Add a comment: </label>
                    <br></br>
                    <input type="text" id="comment_body" />
                    <input type="submit" onClick={submitComment} />
                </form>
                <ol>
                    {comments.map((comment) => {
                        return (
                            <li key={`${comment.comment_id}`}>
                                <h3>{comment.author}</h3>
                                <p>
                                    {comment.body}
                                    <br></br>
                                    {comment.created_at}
                                </p>
                                <h4>Votes: {comment.votes}</h4>
                                <button>Vote Up</button>
                                <button>Vote Down</button>
                                <button>Delete</button>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
};

export default Comments;
