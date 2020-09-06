import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import Login from "./Login/Login";
import Chat from "./Chat/Chat";

function App()
{
    const [userID, setUserId] = useState(null);

    useEffect(() =>
    {
        if (!userID)
        {
            const userID = window.localStorage.getItem("userID");
            setUserId(userID);
        }
    }, [userID]);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Redirect to={userID ? "/chat" : "/login"}/>
                    </Route>
                    {userID ?
                        <Route path={"/chat"} render={(props) => <Chat {...props} userID={userID}/>}/> :
                        <Route path={"/login"} render={(props) => <Login {...props} setUserId={setUserId}/>}/>
                    }
                    <Redirect to={"/"}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
