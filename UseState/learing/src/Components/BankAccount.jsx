import { useState } from "react";

function BankAcoount()
{
    const [amount,setAmount] = useState(0) ;

    const handleAdd = () =>
    {
        setAmount(amount + 100);
    }
    const handleWithdraw = () =>
    {
        amount !== 0 ?setAmount(amount - 100): alert("You have insufficient in your account balance"); 
      
       
    }

    return(
        <>
        <h1>Wallate Balance:{amount}</h1>
        <button className="btn" onClick={handleAdd}>Add Money</button>
        <button className="btn" onClick={handleWithdraw}>Withdraw Money</button>
        </>
    )
}
export default BankAcoount ;