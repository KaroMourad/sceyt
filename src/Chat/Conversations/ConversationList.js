import React from "react";
import "./conversations.css"
import {useSelector} from "react-redux";
import ConversationItem from "./ConversationItem";

const ConversationList = ({userID}) =>
{
    const conversations = useSelector(state => state.conversations);
    return (
        <ul className={"convList"}>
            {conversations && conversations.map(conversation =>
                <ConversationItem key={conversation.id} conversation={conversation} userID={userID}/>
            )}
        </ul>
    );
};

export default ConversationList;
