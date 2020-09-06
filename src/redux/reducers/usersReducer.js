import {v1 as uuid} from 'uuid';
import {userActions} from "../actions/userActions";

export const initData = [
    {
        id: "86de9a30-eeb8-11ea-81d1-c5c9cc04344c",
        username: "Ferdinand Smith",
        avatar: "",
    },
    {
        id: uuid(),
        username: "John Jan",
        avatar: "",
    },
    {
        id: uuid(),
        username: "Elizabeth Smith",
        avatar: "elizabeth.png",
    },
    {
        id: uuid(),
        username: "Johny Cash",
        avatar: "johny_cash.png",
    },
    {
        id: uuid(),
        username: "Lauren Ven",
        avatar: "lauren.png",
    },
    {
        id: uuid(),
        username: "Israel Adesanya",
        avatar: "",
    },
    {
        id: uuid(),
        username: "Tomomi Eagle",
        avatar: "tomomi.png",
    },
    {
        id: uuid(),
        username: "Lucie Morgan",
        avatar: "lucie.png",
    },
    {
        id: uuid(),
        username: "Ada Laine",
        avatar: "",
    },
    {
        id: uuid(),
        username: "Nata Hester",
        avatar: "",
    },
    {
        id: uuid(),
        username: "Ramon Beteman",
        avatar: "ramon.png",
    },
    {
        id: uuid(),
        username: "Jeshua Brown",
        avatar: "jeshua.png",
    },
    {
        id: uuid(),
        username: "Nala Hester",
        avatar: "",
    },
    {
        id: uuid(),
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
