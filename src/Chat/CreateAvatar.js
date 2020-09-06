import React from "react";
import {generateRandomColor} from "../utils/generateRandomColor";

function CreateAvatar({imgName, username})
{
    return (
        <>
            {imgName ?
                <img
                    src={require(`../static/avatars/${imgName}`)}
                    alt={imgName}
                /> :
                <div style={{backgroundColor: generateRandomColor(), ...styles.username}}>
                    {username.name[0] + " " + (username.surname[0] || "")}
                </div>
            }
        </>
    );
}

export default CreateAvatar;

const styles = {
    username: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        fontStyle: "normal",
        fontWeight: "500",
        color: "#FFFFFF"
    }
};
