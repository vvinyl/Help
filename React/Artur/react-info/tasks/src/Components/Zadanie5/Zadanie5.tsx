import { useState } from "react";

export default function Zadanie5(){
    const gallery = [
        {id: 1, src: "./images/1.jpg", alt: "zdjęcie 1"},
        {id: 2, src: "./images/2.jpg", alt: "zdjęcie 2"},
        {id: 3, src: "./images/3.jpg", alt: "zdjęcie 3"},
    ]

    const [selectedImage, setSelectedImage] = useState(gallery[0]);
    
    const [prevButton, setPrevButton] = useState(false);
    const [nextButton, setNextButton] = useState(true);
    
    const nextImage = () => {
        const index = gallery.findIndex((image) => image.id === selectedImage.id);
        if (index === gallery.length - 1) {
            alert("To jest ostatnie zdjęcie");
            setNextButton(false);
        } else {
            setSelectedImage(gallery[index + 1]);
            setPrevButton(true);
            setNextButton(index + 1 < gallery.length - 1);
        }
    }
    const prevImage = () => {
        const index = gallery.findIndex((image) => image.id === selectedImage.id);
        if (index === 0) {
            alert("To jest pierwsze zdjęcie");
            setPrevButton(false);
        } else {
            setSelectedImage(gallery[index - 1]);
            setPrevButton(index - 1 > 0);
            setNextButton(true);
        }
    }



    return (
        <div>
            <h2>Zadanie 6,7,8</h2>
            {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} style={{width: '200px', height: '200px', border: '1px'}}/>}
            <br></br>
            {/* Zadanie 6 */}
            {/* <button onClick={() => prevImage()}>Poprzednie zdjęcie</button>
            <button onClick={() => nextImage()}>Następne zdjęcie</button> */}

            {/* Zadanie 7 */}
            {/* <button onClick={() => prevImage()} disabled={!prevButton}>Poprzednie zdjęcie</button>
            <button onClick={() => nextImage()} disabled={!nextButton}>Następne zdjęcie</button> */}

            {/* Zadanie 8 */}
            {prevButton && (
                <button onClick={() => prevImage()}>Poprzednie zdjęcie</button>
            )}
            {nextButton && (
                <button onClick={() => nextImage()}>Następne zdjęcie</button>
            )}

        </div>
    );
}