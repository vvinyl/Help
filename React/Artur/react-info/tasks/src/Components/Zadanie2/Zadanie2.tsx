import { useState } from "react";

export default function Zadanie2(){
    const [links, setLinks] = useState([
        {id: 1, name: "FB", url: "facebook.com", bgColor: 'blue', isClick: false},
        {id: 2, name: "X", url: "x.com", bgColor: 'black', isClick: false},
        {id: 3, name: "IG", url: "instagram.com", bgColor: 'purple', isClick: false},
    ]);

    const onClickLink = (index: number) => {
        setLinks((prevLinks) => {
            return prevLinks.map((link, i) => {
                if (i === index) {
                    return { ...link, isClick: !link.isClick }; 
                }
                return link; 
            });
        });
    };

    return (
        <div>
            <h2>Zadanie 2</h2>
            {links.map((link, index) => (
                <p 
                    key={link.id} 
                    onClick={() => onClickLink(index)} 
                    style={{width:'100vw', cursor:'pointer', backgroundColor: link.isClick ? link.bgColor : ''}}
                >
                    {link.name}
                </p>
            ))}
        </div>
    );
}