import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../api";

const Comments = ({ review_id, user }) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [newBody, setNewBody] = useState("");

    useEffect(() => {
        fetchComments(review_id).then((result) => {
            setComments(result);
            setCommentsLoading(false);
        });
    }, [review_id]);

    const submitComment = (event) => {
        event.preventDefault();
        const commentToAdd = { username: user.username, body: newBody };
        postComment(review_id, commentToAdd)
            .then((response) => {
                setComments((currComments) => {
                    return [response, ...currComments];
                });
            })
            .catch((err) => <p>{`Error: ${err}`}</p>);
        setNewBody("");
    };

    if (comments.length === 0 && !commentsLoading) {
        return (
            <div>
                <h3>This review has no comments...</h3>
                <form onSubmit={submitComment}>
                    <label>Add a comment: </label>
                    <br></br>
                    <input
                        type="text"
                        id="comment_body"
                        value={newBody}
                        onChange={(event) => {
                            setNewBody(event.target.value);
                        }}
                    />
                    <input type="submit" />
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
                <form onSubmit={submitComment}>
                    <label>Add a comment: </label>
                    <br></br>
                    <input
                        type="text"
                        id="comment_body"
                        value={newBody}
                        onChange={(event) => {
                            setNewBody(event.target.value);
                        }}
                    />
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
