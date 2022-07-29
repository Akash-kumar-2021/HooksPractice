import { useState } from "react"

const UseStateObject = () =>
{
    const [person,setPerson] = useState(
        {
            name:"Akash" ,
            age:27,
            message :"I am leaning React"
        }
    );

    const changeMessage = () =>
    {
        setPerson({...person , message:"hello, I am akash"})
    }

    return(
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className="btn" onClick={changeMessage}>Change Message</button>
        </>
    )
}
export default UseStateObject ;