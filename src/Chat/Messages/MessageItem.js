import React from "react"
import CreateAvatar from "../CreateAvatar";
import {useSelector} from "react-redux";
import {createUserName} from "../../utils/createUserame";

const MessageItem = ({message}) =>
{
    const user = useSelector(state => state.users.find(user => user.id === message.from));
    return user && (
        <div>
            <div className={"avatar"}>
                <CreateAvatar
                    imgName={user.avatar}
                    username={createUserName(user.username)}
                />
            </div>
            <h1>{message.message}</h1>
        </div>
    );
}

export default MessageItem;
