import React from "react";
import moment from 'moment';
import {createUserName} from "../../utils/createUserame";
import {useSelector} from "react-redux";
import CreateAvatar from "../CreateAvatar";

const ConversationItem = ({conversation, userID}) =>
{
    const users = useSelector(state => state.users);
    let {message, from} = conversation.last_message;
    let {avatar, username} = getInfo();
    return (
        <li className={"conversationItem"}>
            <div className={"avatarContainer"}>
                <CreateAvatar imgName={avatar} username={createUserName(username)}/>
            </div>
            <div className={"convInfoContainer"}>
                <div className={"usernameCont"}>
                    <h1>{username}</h1>
                    <span>{moment(conversation.updated_at)?.format("mm:ss") || "--"}</span>
                </div>
                <div className={"lastMessageCont"}>
                    {from === userID ? <h2>You:</h2> : null}
                    <span title={message}>{message}</span>
                </div>
            </div>
        </li>
    );

    function getInfo()
    {
        let username;
        let avatar;
        if (conversation.group)
        {
            username = conversation.group?.name;
            avatar = conversation.group?.avatar;

        } else
        {
            const user = users.find(user => user.id === conversation.user_two);
            username = user?.username;
            avatar = user?.avatar;
        }
        return {
            username: username || "--",
            avatar: avatar || ""
        };
    }
};

export default React.memo(ConversationItem);
