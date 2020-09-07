import {initData} from "./usersReducer";
import {messagesActions} from "../actions/messagesActions";
import {v1 as uuid} from "uuid"

const initialState = [
    {
        id: "11",
        created_at: Date.now() - 100000,
        convId: "2",
        from: initData[0].id,
        message: "heyyy"
    },
    {
        id: "22",
        created_at: Date.now() - 150000,
        convId: "2",
        from: initData[12].id,
        message: "@pierhack i did for 6 days in Iceland"
    },
    {
        id: "33",
        created_at: Date.now() - 200000,
        convId: "2",
        from: initData[13].id,
        message: "Since we have left our lake life, we have resumed our wandering from one family’s house to another."
    },
    {
        id: "44",
        created_at: Date.now() - 200000,
        convId: "2",
        from: initData[0].id,
        message: "Since we have left our lake life, we have resumed our wandering from one family’s house to another."
    },
    {
        id: "55",
        created_at: Date.now() - 200000,
        convId: "2",
        from: initData[13].id,
        message: "We met at The Switzerland Inn on the Lake for a yummy lunch. It was terrific being with them again."
    }
]

export const messagesReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case messagesActions.ADD_MESSAGE:
            return [...state, {
                id: uuid(),
                created_at: Date.now(),
                convId: action.data.convId,
                from: action.data.userID,
                message: action.data.message
            }]
        default:
            return state;
    }
};
