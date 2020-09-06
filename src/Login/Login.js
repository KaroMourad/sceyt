import React, {useCallback, useState} from "react";
import LogoBig from "../static/logoBig.png"
import "./Login.css"
import {useDispatch, useSelector} from "react-redux";
import {userDataAdd} from "../redux/actions/userActions";
import {v1 as uuid} from 'uuid';
import {useHistory} from "react-router-dom";

const Login = ({setUserId}) =>
{
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(state => state.users);
    const addUser = useCallback(
        (newUser) => dispatch(userDataAdd(newUser)),
        [dispatch]
    );
    return (
        <section className={"loginSection"}>
            <div className={"logo"}>
                <img src={LogoBig} alt={'Logo'}/>
            </div>
            <div className={"loginBody"}>
                <h1>Getting Started</h1>
                <p>Just enter your username, click connect button and start</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type={"text"}
                        placeholder={"Enter username"}
                        value={username}
                        className={"username"}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="submit"
                           value="Connect"
                           className={`submit ${!username ? "disabled" : ""}`}
                           disabled={!username}
                    />
                </form>
            </div>
        </section>
    );

    function handleSubmit(e)
    {
        e.preventDefault();

        if (username)
        {
            const trimmedUsername = username.trim();
            setUsername(trimmedUsername);
            let user = users.find(user => user.username === trimmedUsername);

            if (!user)
            {
                let newUser = {
                    username: trimmedUsername,
                    id: uuid()
                };
                addUser(newUser);
                user = newUser;
            }
            setUserId(user.id);
            window.localStorage.setItem("userID", `${user.id}`)
            history.push("/chat");
        }
    }
};

export default Login;
