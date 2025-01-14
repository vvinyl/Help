import { useState } from "react";

export default function Zadanie4(){
    const [value, setValue] = useState(0);
    return (
        <div>
            <h2>Zadanie 4 i 5   </h2>
            <p>{value}</p>
            <button onClick={() => setValue(value + 2)}>+2</button>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
            <button onClick={() => setValue(value - 2)}>-2</button>
        </div>
    );
}