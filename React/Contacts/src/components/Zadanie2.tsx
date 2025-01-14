import { useState } from "react"

export const Zadanie2 = () => {
    const [links, setLinks] = useState([
        {id: 1, name: 'Facebook', url: "facebook.com", bgColor: 'cyan', isClick: false},
        {id: 1, name: 'X', url: "x.com", bgColor: 'pink', isClick: false},
        {id: 1, name: 'Instagram', url: "instagram.com", bgColor: 'yellow', isClick: false},
    ]);

    const handleClick = (index:number) => {
        setLinks((prevLinks) => {
            return prevLinks.map((link, id) => {
                if(id === index){
                    return {...link, isClick: !link.isClick}
                }
                return link
            });
        });
    };

    return (
        <>
            <h2>Zadanie 2</h2>
            <h4>
            Napisz aplikację React, która wyświetli listę waszych ulubionych linków. Adresy i ich nazwy powinny być przechowywane w odpowiedniej tablicy obiektów. Po kliknięciu na dany link jego tło powinno się zmienić na wybrany przez was kolor. (Symulacja wielokrotnego wyboru).
            </h4>
            {links.map((link, id) => (
                <p
                    key={link.id}
                    onClick={() => handleClick(id)}
                    style={{cursor: 'pointer', backgroundColor: link.isClick ? link.bgColor : 'grey', textAlign: 'center'}}
                >
                    {link.name}
                </p>
            ))}
        </>
    )
}