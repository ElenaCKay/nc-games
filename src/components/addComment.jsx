import { useState } from "react";

const AddComment = ({
    newBody,
    setNewBody,
    user,
    postComment,
    review_id,
    setComments,
}) => {
    const [commentFailed, setCommentFailed] = useState(false);
    const [newCommentLoading, setNewCommentLoading] = useState(false);

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
            .catch((err) => {
                console.log("im in the catch");
                //<p>{`Error: ${err}`}</p>;
                setNewCommentLoading(false);
                setCommentFailed(true);
                // setNewBody("");
            });
    };

    if (commentFailed) {
        return (
            <div>
                <h3>Error: Your comment could not be posted</h3>
            </div>
        );
    }

    if (newCommentLoading) {
        return (
            <div>
                <h3>Adding your comment...</h3>
            </div>
        );
    }

    return (
        <form onSubmit={submitComment}>
            <label>{commentFailed.toString()}</label>
            <label>Add a comment: </label>
            <br></br>
            <textarea
                type="text"
                id="comment_body"
                name={newBody}
                value={newBody}
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
    );
};

export default AddComment;
