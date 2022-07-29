import React  from "react";
import { useState } from "react";

const UseStateBasic = () =>
{
    const [text,setText] = useState("random title") ;
    const handleClick = () =>
    {
        if(text === "random title")
        {
         setText("hello,Now i am learing React")
        }
        else{
            setText("i am akash kumar")
        }
    }

    return(
        <React.Fragment>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>Change Title</button>

        </React.Fragment>
    );
}
export default UseStateBasic ;