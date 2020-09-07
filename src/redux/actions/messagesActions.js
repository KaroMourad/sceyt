export const messagesActions = {
    ADD_MESSAGE: "ADD_MESSAGE",
}

export function addMessage(data)
{
    return {
        type: messagesActions.ADD_MESSAGE,
        data
    };
}
