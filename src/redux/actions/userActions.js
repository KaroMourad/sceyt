export const userActions = {
    ADD_USER: "ADD_USER",
    USER_DATA: "USER_DATA",
}

export function userDataAdd(data)
{
    return {
        type: userActions.ADD_USER,
        data
    };
}

