import { useState } from 'react'
import "./App.css"

const Dice = () => {
    const [randomNumber, setRandomNumber] = useState(1);

    const onCLick = () => {
        const newRandomNumber = Math.floor(Math.random() * 6) + 1;
        setRandomNumber(newRandomNumber);
        console.log(newRandomNumber);
    }

    window.addEventListener("keydown", (event) => {
        if(event.code === "Space"){
            onCLick();
        }
    })

    const diceImgs = [
        "./src/assets/img/dice-1-svgrepo-com.svg",
        "./src/assets/img/dice-2-svgrepo-com.svg",
        "./src/assets/img/dice-3-svgrepo-com.svg",
        "./src/assets/img/dice-4-svgrepo-com.svg",
        "./src/assets/img/dice-5-svgrepo-com.svg",
        "./src/assets/img/dice-6-svgrepo-com.svg",
    ]
    return (
        <img onClick = {onCLick} src = {diceImgs[randomNumber - 1]} alt = "dice"/>
    )
}

export default Dice;
