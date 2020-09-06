import React, {useEffect, useState} from "react";
import Logo from "../static/logo.png";
import {createUserName} from "../utils/createUserame";
import Vector from "../static/Vector.png";
import {useSelector} from "react-redux";
import CreateAvatar from "./CreateAvatar";

function Header({userID})
{
    const [user, setUser] = useState(null);
    const users = useSelector(state => state.users);

    useEffect(() =>
    {
        if (!user)
        {
            setUser(users.find(u => u.id === userID))
        }
    }, [users, userID, user]);

    return user ? (
        <header className={"header"}>
            <img src={Logo} alt={"logo"}/>
            <div className={"info"}>
                <span className={"name"}>{createUserName(user.username).short}</span>
                <div className={"avatar"}>
                    <CreateAvatar username={createUserName(user.username)}/>
                </div>
                <img src={Vector} alt={"vector"}/>
            </div>
        </header>
    ) : null;
}

export default Header;
