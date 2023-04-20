import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../api";
import { Link } from "react-router-dom";

const Comments = ({ review_id, user, signedIn }) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [newBody, setNewBody] = useState("");
    const [newCommentLoading, setNewCommentLoading] = useState(false);

    useEffect(() => {
        fetchComments(review_id).then((result) => {
            setComments(result);
            setCommentsLoading(false);
        });
    }, [review_id]);

    const submitComment = (event) => {
        event.preventDefault();
        if (newBody.length === 0) {
            return;
        }
        const commentToAdd = { username: user.username, body: newBody };
        setNewCommentLoading(true);
        postComment(review_id, commentToAdd)
            .then((response) => {
                setNewCommentLoading(false);
                setComments((currComments) => {
                    return [response, ...currComments];
                });
            })
            .catch((err) => <p>{`Error: ${err}`}</p>);
        setNewBody("");
        setCommentsLoading(false);
        return <h3>Comment failed; Refresh and try again!</h3>;
    };

    if (newCommentLoading) {
        return <h3>Adding your comment...</h3>;
    }

    if (comments.length === 0 && !commentsLoading && signedIn) {
        return (
            <div>
                <h3>This review has no comments...</h3>
                <form onSubmit={submitComment}>
                    <label>Add a comment: </label>
                    <br></br>
                    <input
                        type="textarea"
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

    if (comments.length > 0 && !commentsLoading && signedIn) {
        return (
            <div>
                <h2>Comments</h2>
                <form onSubmit={submitComment}>
                    <label>Add a comment: </label>
                    <br></br>
                    <input
                        type="textarea"
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
                                <h4>{comment.author}</h4>
                                <p>
                                    {comment.body}
                                    <br></br>
                                    {comment.created_at}
                                </p>
                                <h5>Votes: {comment.votes}</h5>
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

    if (comments.length > 0 && !commentsLoading && !signedIn) {
        return (
            <div>
                <h2>Comments</h2>
                <Link to="/signIn">
                    <h4>Sign in to add a comment</h4>
                </Link>
                <ol>
                    {comments.map((comment) => {
                        return (
                            <li key={`${comment.comment_id}`}>
                                <h4>{comment.author}</h4>
                                <p>
                                    {comment.body}
                                    <br></br>
                                    {comment.created_at}
                                </p>
                                <h5>Votes: {comment.votes}</h5>
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
