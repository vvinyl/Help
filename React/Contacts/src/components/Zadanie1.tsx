import { useState } from "react"

export const Zadanie1 = () => {
    const [text, setText] = useState('');
    
    const handleClick= () => {
        setText('KP');
    }
    return(
        <>
        <h2>Zadanie 1</h2>
        <h4>
            Stwórz aplikację React zawierającą jeden komponent, którego widok będzie zawierał paragraf i przycisk. Po kliknięciu na przycisk w paragrafie powinno się pojawić wasze imię i nazwisko
        </h4>
            <p>{text}</p>
            <br/>
            <button onClick={handleClick}>Klik</button>
        </>
    )
}