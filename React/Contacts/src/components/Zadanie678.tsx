import { useState } from "react";
import photo1 from '../assets/images/zdjecie1.jpg'
import photo2 from '../assets/images/zdjecie2.jpg'
import photo3 from '../assets/images/zdjecie3.jpg'
import photo4 from '../assets/images/zdjecie4.jpg'

export const Zadanie678 = () => {
    // do zad 6
    const images = [
        photo1,
        photo2,
        photo3,
        photo4
    ]

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if(index < images.length - 1){
            setIndex((prevIndex) => prevIndex+1);
        } else {
            alert("To jest ostatnie zdjęcie z galerii. Nie możesz przejść dalej")
        }
    }

    const handlePrevious = () => {
        if(index == 0){
            alert("To jest pierwsze zdjęcie z galerii. Nie możesz dalej cofnąć")
        } else {
            setIndex((prevIndex) => prevIndex-1);
        }
    }

    // do zadania 7 i 8
    const gallery = [
        {id: 1, src: '../assets/images/zdjecie1.jpg', alt: 'obraz1'},
        {id: 2, src: '../assets/images/zdjecie2.jpg', alt: 'obraz2'},
        {id: 3, src: '../assets/images/zdjecie3.jpg', alt: 'obraz3'},
        {id: 4, src: '../assets/images/zdjecie4.jpg', alt: 'obraz4'}
    ];

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

    return(
    <>
        <h2>Zadanie 6</h2>
        <h4>
        Napisz aplikację React, która będzie realizowała zadanie galerii zdjęć. Zdjęcia powinny być przechowywane
w tabeli. Aplikacja powinna zawierać dwa przyciski, która pozwolą wyświetlić następne i poprzednie zdjęcie. Jeżeli użytkownik będzie oglądał pierwsze zdjęcie i kliknie przycisk "poprzednie", powinien zobaczyć
komunikat, że jest to pierwsze zdjęcie i nie może być wyświetlone wcześniejsze. Podobnie program powinien
reagować podczas wyświetlania ostatniego zdjęcia i kliknięcia przez użytkownika na przycisk "następne".
        </h4>
        <img src={images[index]} alt={`${index+1}`}/>
        <br/>
        <button onClick={() => handlePrevious()}>Poprzedni</button>
        <button onClick={() => handleNext()}>Następny</button>


        <h2>Zadanie 7</h2>
        <h4>
        Zmodyfikuj poprzednią aplikację tak, aby odpowiednie przyciski stawały się nieaktywne w przypadku,
        gdy użytkownik będzie na pierwszym lub na ostatnim zdjęciu.
        </h4>
        {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} style={{width: '200px', height: '200px', border: '1px'}}/>}
        <br/>
        <button onClick={() => prevImage()} disabled={!prevButton}>Poprzednie zdjęcie</button>
        <br/>
        <button onClick={() => nextImage()} disabled={!nextButton}>Następne zdjęcie</button>

        <h2>Zadanie 8</h2>
        <h4>
        Zmodyfikuj poprzedni program tak, aby odpowiednie przyciski znikały zamiast stawać się nieaktywne.
        </h4>
        {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} style={{width: '200px', height: '200px', border: '1px'}}/>}
        <br/>
        {prevButton && (
            <button onClick={() => prevImage()}>Poprzednie zdjęcie</button>
        )}
        <br/>
        {nextButton && (
            <button onClick={() => nextImage()}>Następne zdjęcie</button>
        )}


    </>
    )
}