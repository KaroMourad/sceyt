export const conversationsActions = {
    UPDATE_LAST_MESSAGE: "UPDATE_LAST_MESSAGE",
}

export function conversationUpdateLastMessage(data)
{
    return {
        type: conversationsActions.UPDATE_LAST_MESSAGE,
        data
    };
}

