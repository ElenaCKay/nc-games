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
        setNewBody(newBody.trim());
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
                    <textarea
                        type="text"
                        id="comment_body"
                        name={newBody}
                        rows="4"
                        cols="50"
                        maxLength={500}
                        required
                        onChange={(event) => {
                            setNewBody(event.target.value);
                        }}
                    >
                        Comment here...
                    </textarea>
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
                    <textarea
                        type="text"
                        id="comment_body"
                        name={newBody}
                        rows="4"
                        cols="33"
                        maxLength={500}
                        required
                        onChange={(event) => {
                            setNewBody(event.target.value);
                        }}
                    ></textarea>
                    <input type="submit" />
                </form>
                <ol>
                    {comments.map((comment) => {
                        return (
                            <li className="comments" key={`${comment.comment_id}`}>
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
                            <li className="comments" key={`${comment.comment_id}`}>
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
