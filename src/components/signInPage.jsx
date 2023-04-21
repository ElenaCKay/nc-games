import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { Link } from "react-router-dom";

const SignInPage = ({ user, setUser, signedIn, setSignedIn }) => {
    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
            .then((response) => {
                setUsers(response);
                setUsersLoading(false);
            })
            .catch((err) => {
                setUser({});
                setSignedIn(false);
            });
    }, [setUser, setSignedIn]);

    const submitUser = (person) => {
        setUser(person);
        setSignedIn(true);
    };

    if (signedIn) {
        return (
            <div>
                <h2>Signed in as {`${user.username}`}</h2>
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
                <Link to="/reviews">
                    <h3>Go to reviews</h3>
                </Link>
            </div>
        );
    }

    if (!signedIn && usersLoading) {
        return (
            <div>
                <h2>Users loading...</h2>
            </div>
        );
    }

    if (!signedIn && !usersLoading) {
        return (
            <div>
                <h2>Choose a user:</h2>
                <ol>
                    {users.map((person, index) => {
                        return (
                            <li key={person.username} className="users">
                                <div onClick={() => submitUser(person)}>
                                    <h3>Username: {person.username}</h3>
                                    <h4>Name: {person.name}</h4>
                                    <img
                                        className="user-img"
                                        src={person.avatar_url}
                                        alt={`${person.username}'s avatar`}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
};

export default SignInPage;
