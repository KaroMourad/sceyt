import React from "react";
import ConversationList from "./Conversations/ConversationList";
import Messages from "./Messages/Messages";
import AddMessage from "./AddMessage/AddMessage";
import "./Chat.css"
import {Search} from "./Conversations/Search";
import Header from "./Header";

const Chat = ({userID}) =>
{
    return userID ? (
        <div className={"chatContainer"}>
            <Header userID={userID}/>
            <section id={"main"}>
                <section className={"convContainer"}>
                    <Search/>
                    <ConversationList userID={userID}/>
                </section>
                <section className={"messageContainer"}>
                    <Messages/>
                    <AddMessage/>
                </section>
            </section>
        </div>
    ) : null;
};

export default Chat;
