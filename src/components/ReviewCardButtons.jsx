import { useState } from "react";
import { patchReviewVotes } from "../api";

const ReviewCardButtons = ({ review_id, setReviewVotes }) => {
    const [incVotes, setIncVotes] = useState(0);

    const upVoteHandler = (effect) => {
        setIncVotes(1);
        patchReviewVotes(review_id, incVotes).then((data) => {
            setReviewVotes(data);
        });
    };
    const downVoteHandler = (effect) => {
        setIncVotes(-1);
        patchReviewVotes(review_id, incVotes).then((data) => {
            setReviewVotes(data);
        });
    };

    return (
        <div>
            <button onClick={upVoteHandler}>Up Vote</button>
            <button onClick={downVoteHandler}>Down Vote</button>
        </div>
    );
};

export default ReviewCardButtons;
