import { patchReviewVotes } from "../api";

const ReviewCardButtons = ({ review_id, setReviewVotes }) => {
    const upVoteHandler = (effect) => {
        setReviewVotes((reviewVotes) => {
            return reviewVotes + 1;
        });
        patchReviewVotes(review_id, 1).catch((err) => {
            if (err) {
                throw err;
            }
            setReviewVotes((reviewVotes) => {
                return reviewVotes - 1;
            });
        });
    };
    const downVoteHandler = (effect) => {
        setReviewVotes((reviewVotes) => {
            return reviewVotes - 1;
        });

        patchReviewVotes(review_id, -1).catch((err) => {
            if (err) {
                throw err;
            }
            setReviewVotes((reviewVotes) => {
                return reviewVotes + 1;
            });
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
