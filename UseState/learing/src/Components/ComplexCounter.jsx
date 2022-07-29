import { useState } from "react";

function ComplexCounter()
{
    const [counter , setCounter] = useState(0);
    const handleCounter = () =>
    {
        setTimeout(() =>
        {
            setCounter(counter + 1);
        },10000)
        
    }
    // console.log(counter);
    return(
        <>
        <h1>{counter}</h1>
        <button className = " btn" onClick={handleCounter}>Counter</button>
        </>
    );
};
export default ComplexCounter ;