import { useState } from "react"

export default function Zadanie1(){

    const [show, setShow] = useState(false)

    const handleClickButton = () => {
        setShow(!show)
    }

    return (
        <div>
            <p>
                {show ? "AM" : ""}
            </p>
            <button onClick={handleClickButton}>
                {show ? "Ukryj" : "Pokaż"}
            </button>
        </div>
    )
}