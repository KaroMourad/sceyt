import React from "react";
import "./conversations.css"
import {useSelector} from "react-redux";
import ConversationItem from "./ConversationItem";

const ConversationList = ({userID, setSelectedConversation, selectedConversationId}) =>
{
    const conversations = useSelector(state => state.conversations);
    return (
        <ul className={"convList"} onClick={handleSelect}>
            {conversations && conversations.map(conversation =>
                <ConversationItem key={conversation.id}
                                  conversation={conversation}
                                  userID={userID}
                                  selected={selectedConversationId === conversation.id}
                />
            )}
        </ul>
    );

    function handleSelect(e)
    {
        e.stopPropagation();
        const ul = e.currentTarget;
        const li = e.target.closest('li');
        if (!li) return;
        if (!ul.contains(li)) return;
        setSelectedConversation(conversations.find(c => c.id === li.id));
    }
};

export default ConversationList;
