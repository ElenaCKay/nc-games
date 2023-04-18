import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api";

const Comments = () => {
    const { review_id } = useParams();
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    useEffect(() => {
        fetchComments(review_id).then((result) => {
            setComments(result);
            setCommentsLoading(false);
        });
    }, [review_id]);

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
                    <input type="submit" />
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
