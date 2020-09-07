import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "./Messages.css";
import MessageItem from "./MessageItem";
import CreateAvatar from "../CreateAvatar";
import {createUserName} from "../../utils/createUserame";

const Messages = ({selectedConversation}) =>
{

    console.log(selectedConversation);
    const messages = useSelector(state => state.messages);
    const users = useSelector(state => state.users);
    const [info, setInfo] = useState(null);
    useEffect(() =>
    {
        if (selectedConversation)
        {
            function getInfo()
            {
                let username;
                let avatar;
                if (selectedConversation.group)
                {
                    username = selectedConversation.group?.name;
                    avatar = selectedConversation.group?.avatar;

                } else
                {
                    const user = users.find(user => user.id === selectedConversation.user_two);
                    username = user?.username;
                    avatar = user?.avatar;
                }
                return {
                    username: username || "--",
                    avatar: avatar || ""
                };
            }

            setInfo(getInfo())
        }
    }, [selectedConversation, users])

    return (
        <div className={"messages"}>
            {info && <header>
                <div className={"avatar"}>
                    <CreateAvatar
                        imgName={info.avatar}
                        username={createUserName(info.username)}
                    />
                </div>
                <div>{info.username}</div>
            </header>}
            {selectedConversation && (
                messages
                    .filter(m => m.convId === selectedConversation.id)
                    .sort((a, b) => b.created_at - a.created_at)
                    .map(message => <MessageItem key={message.id} message={message}/>)
            )}
        </div>

    );
};

export default Messages;
