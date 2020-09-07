import React, {useState} from "react";
import ConversationList from "./Conversations/ConversationList";
import Messages from "./Messages/Messages";
import AddMessage from "./AddMessage/AddMessage";
import "./Chat.css"
import {Search} from "./Conversations/Search";
import Header from "./Header";

const Chat = ({userID}) =>
{
    const [selectedConversation, setSelectedConversation] = useState(null);
    return userID ? (
        <div className={"chatContainer"}>
            <Header userID={userID}/>
            <main id={"main"}>
                <section className={"convContainer"}>
                    <Search/>
                    <ConversationList
                        userID={userID}
                        setSelectedConversation={setSelectedConversation}
                        selectedConversationId={selectedConversation ? selectedConversation.id : null}
                    />
                </section>
                <section className={"messageContainer"}>
                    <Messages selectedConversation={selectedConversation}/>
                    <AddMessage/>
                </section>
            </main>
        </div>
    ) : null;
};

export default Chat;
