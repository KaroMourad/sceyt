import {v1 as uuid} from 'uuid';
import {userActions} from "../actions/userActions";

export const initData = [
    {
        id: "86de9a30-eeb8-11ea-81d1-c5c9cc04344c",
        username: "Ferdinand Smith",
        avatar: "",
    },
    {
        id: uuid(),// 2
        username: "John Jan",
        avatar: "",
    },
    {
        id: uuid(),// 3
        username: "Elizabeth Smith",
        avatar: "elizabeth.png",
    },
    {
        id: uuid(),// 4
        username: "Johny Cash",
        avatar: "johny_cash.png",
    },
    {
        id: uuid(),// 5
        username: "Lauren Ven",
        avatar: "lauren.png",
    },
    {
        id: uuid(), // 6
        username: "Israel Adesanya",
        avatar: "",
    },
    {
        id: uuid(), // 7
        username: "Tomomi Eagle",
        avatar: "tomomi.png",
    },
    {
        id: uuid(), // 8
        username: "Lucie Morgan",
        avatar: "lucie.png",
    },
    {
        id: uuid(), // 9
        username: "Ada Laine",
        avatar: "",
    },
    {
        id: uuid(), // 10
        username: "Nata Hester",
        avatar: "",
    },
    {
        id: uuid(), // 11
        username: "Ramon Beteman",
        avatar: "ramon.png",
    },
    {
        id: uuid(), // 12
        username: "Jeshua Brown",
        avatar: "jeshua.png",
    },
    {
        id: uuid(), // 13
        username: "Nala Hester",
        avatar: "",
    },
    {
        id: uuid(), // 14
        username: "Harold Adam",
        avatar: "",
    },
]

const initialState = [
    ...initData,
];

export const users = (state = initialState, action) =>
{
    switch (action.type)
    {
        case userActions.ADD_USER:
            return state.concat([{id: action.data.id, username: action.data.username}])
        default:
            return state;
    }
};
