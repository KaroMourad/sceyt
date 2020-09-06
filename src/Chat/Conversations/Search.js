import React, {useState} from "react";
import searchIcon from "../../static/Search (icon).png";
import createChannel from "../../static/creat channel.png";

export function Search(props)
{
    const [keyword, setKeyword] = useState("")
    return (
        <div className={"searchContainer"}>
            <form action="#" onSubmit={handle}>
                <img src={searchIcon} alt={"searchIcon"} className={"searchIcon"}/>
                <input
                    type={"text"}
                    value={keyword}
                    className={"search"}
                    placeholder={"Search for channels "}
                    onChange={(e) => setKeyword(e.target.value.trim())}
                />
            </form>
            <img src={createChannel} alt={"createChannel"} className={"createChannel"}/>
        </div>
    );

    function handle(e)
    {
        e.preventDefault();
        if (keyword)
        {
            console.log("enter clicked", keyword)
        }
    }
}
