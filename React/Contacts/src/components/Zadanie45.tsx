import { useState } from "react"

export const Zadanie45 = () => {
    const [value, setValue] = useState(0);

    return (
        <>
        <h2>Zadanie 4 i Zadanie 5</h2>
        <h4>
        Napisz aplikację, która będzie zawierała paragraf i dwa przyciski "+1" i "-1". Początkowo w paragrafie powinna być wyświetlona wartość 0. Po kliknięciu na odpowiednie przyciski ta wartość powinna się zmniejszyć lub zwiększyć o 1. + Dodaj dwa kolejne przyciski "+2" i "-2", które powinny zwiększać lub zmniejszać wyświetlaną wartość o 2. Czy do  szystkich przycisków może być przypisana jedna procedura obsługi zdarzenia? Jeżeli tak, napisz to w ten sposób.
        </h4>
        <div style={{justifyContent:'center', alignItems: 'center', textAlign: 'center'}}>
            <p>{value}</p>
            <button onClick={() =>setValue(value-2)}>-2</button>
            <button onClick={() =>setValue(value-1)}>-1</button>
            <button onClick={() =>setValue(value+1)}>+1</button>
            <button onClick={() =>setValue(value+2)}>+2</button>
            <button onClick={() =>setValue(0)}>Reset</button>
        </div>
        </>
    )
}