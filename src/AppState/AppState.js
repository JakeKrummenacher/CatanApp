import React, { useState } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import { BleManager } from "react-native-ble-plx";


export default function AppState() {
    const [colorArray, setColorArray] = useState([]);
    const [singleHex, setSingleHex] = useState({});
    const [currentColor, setCurrentColor] = useState("")
    
    const oceanColor = "rgba(0, 100, 255, 0.7)";
    const woodColor = "rgb(0, 100, 0)";
    const brickColor = "rgb(200, 0, 0)";
    const sheepColor = "rgb(0, 190, 30)";
    const wheatColor = "rgb(255, 255, 0)";
    const oreColor = "rgb(100, 100, 100)";
    const goldColor = "rgb(200, 190, 100)";
    const desertColor = "white";
    
    const [currentBoard, setCurrentBoard] = useState([oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, desertColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, oceanColor, brickColor, oceanColor, sheepColor, oceanColor, wheatColor, oceanColor, oreColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, goldColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor]);
    
    const [hexagons, setHexagons] = useState([
        {id: 0, q: 0, r: 0, s: 0, fill: "white"},
        {id: 1, q: 0, r: 1, s: 0, fill: "white"},
        {id: 2, q: 0, r: 2, s: 0, fill: "white"},
        {id: 3, q: 0, r: 3, s: 0, fill: "white"},
        {id: 4, q: 0, r: 4, s: 0, fill: "white"},
        {id: 5, q: 0, r: 5, s: 0, fill: "white"},
        {id: 6, q: 0, r: 6, s: 0, fill: "white"},
        {id: 7, q: 0, r: 7, s: 0, fill: "white"},
        {id: 8, q: 1, r: 7, s: 0, fill: "white"},
        {id: 9, q: 1, r: 6, s: 0, fill: "white"},
        {id: 10, q: 1, r: 5, s: 0, fill: "white"},
        {id: 11, q: 1, r: 4, s: 0, fill: "white"},
        {id: 12, q: 1, r: 3, s: 0, fill: "white"},
        {id: 13, q: 1, r: 2, s: 0, fill: "white"},
        {id: 14, q: 1, r: 1, s: 0, fill: "white"},
        {id: 15, q: 1, r: 0, s: 0, fill: "white"},
        {id: 16, q: 1, r: -1, s: 0, fill: "white"},
        {id: 17, q: 2, r: -2, s: 0, fill: "white"},
        {id: 18, q: 2, r: -1, s: 0, fill: "white"},
        {id: 19, q: 2, r: 0, s: 0, fill: "white"},
        {id: 20, q: 2, r: 1, s: 0, fill: "white"},
        {id: 21, q: 2, r: 2, s: 0, fill: "white"},
        {id: 22, q: 2, r: 3, s: 0, fill: "white"},
        {id: 23, q: 2, r: 4, s: 0, fill: "white"},
        {id: 24, q: 2, r: 5, s: 0, fill: "white"},
        {id: 25, q: 2, r: 6, s: 0, fill: "white"},
        {id: 26, q: 2, r: 7, s: 0, fill: "white"},
        {id: 27, q: 3, r: 7, s: 0, fill: "white"},
        {id: 28, q: 3, r: 6, s: 0, fill: "white"},
        {id: 29, q: 3, r: 5, s: 0, fill: "white"},
        {id: 30, q: 3, r: 4, s: 0, fill: "white"},
        {id: 31, q: 3, r: 3, s: 0, fill: "white"},
        {id: 32, q: 3, r: 2, s: 0, fill: "white"},
        {id: 33, q: 3, r: 1, s: 0, fill: "white"},
        {id: 34, q: 3, r: 0, s: 0, fill: "white"},
        {id: 35, q: 3, r: -1, s: 0, fill: "white"},
        {id: 36, q: 3, r: -2, s: 0, fill: "white"},
        {id: 37, q: 3, r: -3, s: 0, fill: "white"},
        {id: 38, q: 4, r: -3, s: 0, fill: "white"},
        {id: 39, q: 4, r: -2, s: 0, fill: "white"},
        {id: 40, q: 4, r: -1, s: 0, fill: "white"},
        {id: 41, q: 4, r: 0, s: 0, fill: "white"},
        {id: 42, q: 4, r: 1, s: 0, fill: "white"},
        {id: 43, q: 4, r: 2, s: 0, fill: "white"},
        {id: 44, q: 4, r: 3, s: 0, fill: "white"},
        {id: 45, q: 4, r: 4, s: 0, fill: "white"},
        {id: 46, q: 4, r: 5, s: 0, fill: "white"},
        {id: 47, q: 4, r: 6, s: 0, fill: "white"},
        {id: 48, q: 5, r: 5, s: 0, fill: "white"},
        {id: 49, q: 5, r: 4, s: 0, fill: "white"},
        {id: 50, q: 5, r: 3, s: 0, fill: "white"},
        {id: 51, q: 5, r: 2, s: 0, fill: "white"},
        {id: 52, q: 5, r: 1, s: 0, fill: "white"},
        {id: 53, q: 5, r: 0, s: 0, fill: "white"},
        {id: 54, q: 5, r: -1, s: 0, fill: "white"},
        {id: 55, q: 5, r: -2, s: 0, fill: "white"},
        {id: 56, q: 5, r: -3, s: 0, fill: "white"},
        {id: 57, q: 6, r: -3, s: 0, fill: "white"},
        {id: 58, q: 6, r: -2, s: 0, fill: "white"},
        {id: 59, q: 6, r: -1, s: 0, fill: "white"},
        {id: 60, q: 6, r: 0, s: 0, fill: "white"},
        {id: 61, q: 6, r: 1, s: 0, fill: "white"},
        {id: 62, q: 6, r: 2, s: 0, fill: "white"},
        {id: 63, q: 6, r: 3, s: 0, fill: "white"},
        {id: 64, q: 6, r: 4, s: 0, fill: "white"},
    ]);
    
    
    const AppState = {
        colorArray,
        setColorArray,
        hexagons,
        setHexagons,
        singleHex,
        setSingleHex,
        currentBoard,
        setCurrentBoard,
        oceanColor,
        woodColor,
        brickColor,
        wheatColor,
        sheepColor,
        oreColor,
        goldColor,
        desertColor,
        currentColor,
        setCurrentColor
    };

    return (
        <AppNavigation AppState={AppState}/>
    )

}
