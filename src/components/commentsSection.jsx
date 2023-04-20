import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../api";
import { Link } from "react-router-dom";
import AddComment from "./addComment";
import AllComments from "./allComments";

const Comments = ({ review_id, user, signedIn }) => {
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [newBody, setNewBody] = useState("");

    useEffect(() => {
        fetchComments(review_id)
            .then((result) => {
                setComments(result);
                setCommentsLoading(false);
            })
            .catch((err) => {});
    }, [review_id]);

    if (comments.length === 0 && !commentsLoading && signedIn) {
        return (
            <div>
                <h3>This review has no comments...</h3>
                <AddComment
                    newBody={newBody}
                    setNewBody={setNewBody}
                    user={user}
                    postComment={postComment}
                    review_id={review_id}
                    setComments={setComments}
                    setCommentsLoading={setCommentsLoading}
                />
                  <AllComments comments={comments} />
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
                <AddComment
                    newBody={newBody}
                    setNewBody={setNewBody}
                    user={user}
                    postComment={postComment}
                    review_id={review_id}
                    setComments={setComments}
                    setCommentsLoading={setCommentsLoading}
                />
                <AllComments comments={comments} />
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
                <AllComments comments={comments} />
            </div>
        );
    }
};

export default Comments;
