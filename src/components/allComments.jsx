const AllComments = ({comments}) => {
    return (
        <div>
            {" "}
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
};

export default AllComments;
