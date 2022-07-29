import { useState } from "react";

function SimpleCounter()
{
    const [value,setValue] = useState(0);

const handleDecrease = () =>
{
    setValue(value - 1)
}

const handleRest = () =>
{
    setValue(0) ;
}

const handleIncrease = () =>
{
    setValue(value + 1)
}
    return(
        <>
        <section style={{margin:"4rem"}}>
            <h1>{value}</h1>
            <button className="btn" onClick={handleDecrease}>Drcrease</button>
            <button className="btn" onClick={handleRest}>Rest</button>
            <button className="btn" onClick={handleIncrease}>Increase</button>
        </section>
        </>
    )
}
export default SimpleCounter ;