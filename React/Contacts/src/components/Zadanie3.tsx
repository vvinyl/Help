import { useState } from "react"

export const Zadanie3 = () => {
    const [links, setLinks] = useState([
        {id: 1, name: "Facebook", url: 'facebook.com', bgColor: 'cyan', isClick: false},
        {id: 2, name: "X", url:"x.com", bgColor: 'pink', isClick: false},
        {id: 3, name: "Instagram", url: 'instagram.com', bgColor: 'yellow', isClick: false}
    ]);

    const handleClick = (index:number) => {
        setLinks((prevLinks) => {
            return prevLinks.map((link, id) => {
                if(id === index){
                    return {...link, isClick: !link.isClick}
                } else {
                    return {...link, isClick: false}
                }
            })
        })
    }

    return(
        <>
            <h2>Zadanie 3</h2>
            <h4>
                Zmodyfikuj poprzednie zadanie aby symulowało wybór pojedynczy.
            </h4>

            {links.map((link, id) => (
                <p
                    key={link.id}
                    style={{textAlign: 'center', backgroundColor: link.isClick ? link.bgColor : "grey", cursor: 'pointer'}}
                    onClick={() => handleClick(id)}
                >
                    {link.name}
                </p>
            ))}
        </>
    )
}