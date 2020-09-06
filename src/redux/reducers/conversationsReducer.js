import {conversationsActions} from "../actions/conversationsActions";
import {initData} from "./usersReducer";

const initialState = [
    {
        id: "1",
        updated_at: Date.now() - 1000,
        created_at: Date.now() - 100000,
        last_message: {
            from: initData[0].id,
            message: "341.jpg"
        },
        group: {
            name: "BamBam News",
            avatar: "bambam.png",
            users: [initData[0].id]
        }
    },
    {
        id: "2",
        updated_at: Date.now() - 1500,
        created_at: Date.now() - 150000,
        last_message: {
            from: initData[1].id,
            message: "Hey, i just want to do something"
        },
        group: {
            name: "Annual Meeting",
            avatar: "annual.png",
            users: [initData[0].id, initData[1].id]
        }
    },
    {
        id: "3",
        updated_at: Date.now() - 2000,
        created_at: Date.now() - 200000,
        last_message: {
            from: initData[2].id,
            message: "When u will face Stipe?"
        },
        user_one: initData[0].id,
        user_two: initData[2].id,
    },
    {
        id: "4",
        updated_at: Date.now() - 2500,
        created_at: Date.now() - 250000,
        last_message: {
            from: initData[0].id,
            message: "Great idea!"
        },
        user_one: initData[0].id,
        user_two: initData[3].id,
    },
    {
        id: "5",
        updated_at: Date.now() - 3000,
        created_at: Date.now() - 300000,
        last_message: {
            from: initData[4].id,
            message: "I will share the file,wait"
        },
        user_one: initData[0].id,
        user_two: initData[4].id,
    },
    {
        id: "6",
        updated_at: Date.now() - 3500,
        created_at: Date.now() - 350000,
        last_message: {
            from: initData[5].id,
            message: "Bro, big congrats on ur last."
        },
        user_one: initData[0].id,
        user_two: initData[5].id,
    },
    {
        id: "7",
        updated_at: Date.now() - 4000,
        created_at: Date.now() - 400000,
        last_message: {
            from: initData[0].id,
            message: "Great idea!"
        },
        user_one: initData[0].id,
        user_two: initData[6].id,
    },
    {
        id: "8",
        updated_at: Date.now() - 4000,
        created_at: Date.now() - 400000,
        last_message: {
            from: initData[0].id,
            message: "That was a joke!"
        },
        user_one: initData[0].id,
        user_two: initData[7].id,
    },
    {
        id: "9",
        updated_at: Date.now() - 4500,
        created_at: Date.now() - 450000,
        last_message: {
            from: initData[0].id,
            message: "I have ended my last"
        },
        user_one: initData[0].id,
        user_two: initData[8].id,
    },
    {
        id: "10",
        updated_at: Date.now() - 5000,
        created_at: Date.now() - 500000,
        last_message: {
            from: initData[9].id,
            message: "Working from a van"
        },
        user_one: initData[0].id,
        user_two: initData[9].id,
    },
    {
        id: "11",
        updated_at: Date.now() - 5500,
        created_at: Date.now() - 550000,
        last_message: {
            from: initData[10].id,
            message: "Done!"
        },
        user_one: initData[0].id,
        user_two: initData[10].id,
    },
    {
        id: "12",
        updated_at: Date.now() - 6000,
        created_at: Date.now() - 600000,
        last_message: {
            from: initData[11].id,
            message: "Cool let's do that!"
        },
        user_one: initData[0].id,
        user_two: initData[11].id,
    },
]

export const conversations = (state = initialState, action) =>
{
    switch (action.type)
    {
        case conversationsActions.UPDATE_LAST_MESSAGE:
            let convIndex = state.findIndex(conv => conv.user_one === action.data.id);
            let conv = state[convIndex];
            state.splice(convIndex, 1, {
                ...conv,
                updated_at: Date.now(),
                last_message: {
                    from: action.data.id,
                    message: action.data.message
                }
            })
            return state;
        default:
            return state;
    }
};
