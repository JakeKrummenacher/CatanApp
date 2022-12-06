import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";

export default function CustomModes({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const [allBoards, setAllBoards] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/gameBoards")
        .then((res) => {
            let unsortedBoards = (res.data.gameBoards);
            const sortedBoards = unsortedBoards.sort((a, b) => {
                if(a.name < b.name) {
                    return -1;
                }
            })
            setAllBoards(()=> {
                return sortedBoards;
            });
        })
        .then(() => {
            setLoaded(true);
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const activateBoard = (values) => {
        let tempHexes = [...hexagons];
        for (let i = 0; i < hexagons.length; i++){
            let currentHex = {...hexagons[i]}
            currentHex.fill = values[i];
            tempHexes[i] = currentHex;
        }
        setHexagons(tempHexes);
        navigation.navigate("Home");
    }

    return loaded ? (
        <View>
            <Text>Tap a board name to activate it</Text>
            {allBoards.map((board, index) => (
                <Button onPress={(e) => {activateBoard(board.values)}} key={index} title={board.name}></Button>
            ))}
        </View>
    ) : null
}