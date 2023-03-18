import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import { useWindowDimensions } from "react-native";
import { isTablet } from 'react-native-device-detection'



export default function AppState() {

    const [colorArray, setColorArray] = useState([]);
    const [singleHex, setSingleHex] = useState({});
    const [currentColor, setCurrentColor] = useState("white");
    const [boardId, setBoardId] = useState();
    const [board, setBoard] = useState({});
    const [currentColorName, setCurrentColorName] = useState("desert");
    const [bluetoothAllowed, setBluetoothAllowed] = useState(false);

    const [oceanColor, setOceanColor] = useState("rgba(0, 100, 255, 0.7)");
    const [woodColor, setWoodColor] = useState("rgb(0, 100, 0)");
    const [brickColor, setBrickColor] = useState("rgb(200, 0, 0)");
    const [sheepColor, setSheepColor] = useState("rgb(0, 190, 30)");
    const [wheatColor, setWheatColor] = useState("rgb(255, 255, 0)");
    const [oreColor, setOreColor] = useState("rgb(100, 100, 100)");
    const [goldColor, setGoldColor] = useState("rgb(200, 190, 100)");
    const [desertColor, setDesertColor] = useState("white");
    
    const [currentBoard, setCurrentBoard] = useState([oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, desertColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, oceanColor, brickColor, oceanColor, sheepColor, oceanColor, wheatColor, oceanColor, oreColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, goldColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor]);
    const [rotation, setRotation] = useState(0);

    const windowDimensions = useWindowDimensions();

    useEffect(() => {
            if (isTablet){
                if(windowDimensions.width > windowDimensions.height){
                    setRotation(90);
                } else {
                    setRotation(0)
                }
            }

    }, [windowDimensions, isTablet])

    const [hexagons, setHexagons] = useState([
        {id: 0, q: 0,  r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 1, q: 0,  r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 2, q: 0,  r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 3, q: 0,  r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 4, q: 0,  r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 5, q: 0,  r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 6, q: 0,  r: 6,  s: 0, fill: "white", resource: "desert"},
        {id: 7, q: 0,  r: 7,  s: 0, fill: "white", resource: "desert"},
        {id: 8, q: 1,  r: 7,  s: 0, fill: "white", resource: "desert"},
        {id: 9, q: 1,  r: 6,  s: 0, fill: "white", resource: "desert"},
        {id: 10, q: 1, r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 11, q: 1, r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 12, q: 1, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 13, q: 1, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 14, q: 1, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 15, q: 1, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 16, q: 1, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 17, q: 2, r: -2, s: 0, fill: "white", resource: "desert"},
        {id: 18, q: 2, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 19, q: 2, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 20, q: 2, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 21, q: 2, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 22, q: 2, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 23, q: 2, r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 24, q: 2, r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 25, q: 2, r: 6,  s: 0, fill: "white", resource: "desert"},
        {id: 26, q: 2, r: 7,  s: 0, fill: "white", resource: "desert"},
        {id: 27, q: 3, r: 7,  s: 0, fill: "white", resource: "desert"},
        {id: 28, q: 3, r: 6,  s: 0, fill: "white", resource: "desert"},
        {id: 29, q: 3, r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 30, q: 3, r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 31, q: 3, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 32, q: 3, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 33, q: 3, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 34, q: 3, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 35, q: 3, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 36, q: 3, r: -2, s: 0, fill: "white", resource: "desert"},
        {id: 37, q: 3, r: -3, s: 0, fill: "white", resource: "desert"},
        {id: 38, q: 4, r: -3, s: 0, fill: "white", resource: "desert"},
        {id: 39, q: 4, r: -2, s: 0, fill: "white", resource: "desert"},
        {id: 40, q: 4, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 41, q: 4, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 42, q: 4, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 43, q: 4, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 44, q: 4, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 45, q: 4, r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 46, q: 4, r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 47, q: 4, r: 6,  s: 0, fill: "white", resource: "desert"},
        {id: 48, q: 5, r: 5,  s: 0, fill: "white", resource: "desert"},
        {id: 49, q: 5, r: 4,  s: 0, fill: "white", resource: "desert"},
        {id: 50, q: 5, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 51, q: 5, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 52, q: 5, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 53, q: 5, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 54, q: 5, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 55, q: 5, r: -2, s: 0, fill: "white", resource: "desert"},
        {id: 56, q: 5, r: -3, s: 0, fill: "white", resource: "desert"},
        {id: 57, q: 6, r: -3, s: 0, fill: "white", resource: "desert"},
        {id: 58, q: 6, r: -2, s: 0, fill: "white", resource: "desert"},
        {id: 59, q: 6, r: -1, s: 0, fill: "white", resource: "desert"},
        {id: 60, q: 6, r: 0,  s: 0, fill: "white", resource: "desert"},
        {id: 61, q: 6, r: 1,  s: 0, fill: "white", resource: "desert"},
        {id: 62, q: 6, r: 2,  s: 0, fill: "white", resource: "desert"},
        {id: 63, q: 6, r: 3,  s: 0, fill: "white", resource: "desert"},
        {id: 64, q: 6, r: 4,  s: 0, fill: "white", resource: "desert"},
    ]);


    
    const AppState = {
        colorArray, setColorArray,
        hexagons, setHexagons,
        singleHex, setSingleHex,
        currentBoard, setCurrentBoard,
        oceanColor, setOceanColor,
        woodColor, setWoodColor,
        brickColor, setBrickColor,
        wheatColor, setWheatColor,
        sheepColor, setSheepColor,
        oreColor, setOreColor,
        goldColor, setGoldColor,
        desertColor, setDesertColor,
        currentColor, setCurrentColor,
        boardId, setBoardId,
        board, setBoard,
        currentColorName, setCurrentColorName,
        bluetoothAllowed, setBluetoothAllowed,
        rotation, setRotation
    };

    return (
        <AppNavigation AppState={AppState}/>
    )

}
