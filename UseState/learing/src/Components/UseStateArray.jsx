import React from "react"
import {data} from "../data"
import {useState} from "react"

function UseStateArray() {
    const [people, setPeople] = useState(data);
    const removeItem = (id) =>
    {
        const newPeople = people.filter((person) => person.id !== id )
        setPeople(newPeople)
    }

    return (
        <React.Fragment>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}
            <button className="btn" onClick={ () => setPeople([])}>Clear Item</button>
        </React.Fragment>
    );
}
export default UseStateArray ;