import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";

export default function InstalledModes({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const {oceanColor, woodColor, brickColor, sheepColor, wheatColor, oreColor, desertColor, goldColor} = AppState;

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

    const gameArrays = {
        "base": [oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oreColor, sheepColor, woodColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, sheepColor, brickColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, wheatColor, woodColor, desertColor, woodColor, oreColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, wheatColor, oreColor, woodColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, wheatColor, sheepColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor],
        "baseExtend": [oceanColor, oceanColor, oreColor, wheatColor, woodColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oreColor, sheepColor, sheepColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, oreColor, wheatColor, desertColor, sheepColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, brickColor, brickColor, oreColor, woodColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, desertColor, woodColor, wheatColor, woodColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, brickColor, oreColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, sheepColor, wheatColor, oceanColor, oceanColor, oceanColor],
        "fourIslands": [oceanColor, sheepColor, oreColor, oceanColor, desertColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, brickColor, oceanColor, oceanColor, wheatColor, woodColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, woodColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, sheepColor, brickColor, oceanColor, desertColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, wheatColor, oceanColor, oceanColor, oreColor, woodColor, oceanColor, oceanColor, sheepColor, oreColor, oceanColor, oreColor, sheepColor, oceanColor, oceanColor],
        "sixIslands": [sheepColor, oreColor, oceanColor, sheepColor, oceanColor, brickColor, wheatColor, oceanColor, oceanColor, sheepColor, brickColor, oceanColor, oreColor, wheatColor, oceanColor, wheatColor, woodColor, oceanColor, brickColor, oceanColor, oceanColor, sheepColor, woodColor, oceanColor, woodColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, wheatColor, oceanColor, sheepColor, woodColor, oceanColor, oceanColor, woodColor, oceanColor, oceanColor, oceanColor, brickColor, wheatColor, oceanColor, brickColor, oreColor, oceanColor, oreColor, woodColor, sheepColor, oreColor, oceanColor, woodColor, oceanColor, oreColor, sheepColor, oceanColor],
        "newShores": [oceanColor, oceanColor, wheatColor, woodColor, oreColor, oceanColor, wheatColor, oceanColor, oceanColor, brickColor, oceanColor, sheepColor, brickColor, sheepColor, oreColor, oceanColor, oceanColor, oceanColor, oceanColor, brickColor, woodColor, desertColor, wheatColor, woodColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, goldColor, oceanColor, sheepColor, wheatColor, brickColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, woodColor, oreColor, oceanColor, woodColor, oceanColor, oceanColor, oceanColor, oreColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oceanColor, oreColor, sheepColor, oceanColor, goldColor, oceanColor, oceanColor],
        "newShoresExtend": [goldColor, oceanColor, oreColor, wheatColor, woodColor, oceanColor, goldColor, oceanColor, oceanColor, oceanColor, oceanColor, oreColor, sheepColor, sheepColor, brickColor, oceanColor, woodColor, brickColor, oceanColor, sheepColor, oreColor, wheatColor, desertColor, sheepColor, oceanColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, brickColor, brickColor, oreColor, woodColor, wheatColor, oceanColor, oceanColor, sheepColor, oceanColor, desertColor, woodColor, wheatColor, woodColor, wheatColor, oceanColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, brickColor, oreColor, brickColor, oceanColor, oreColor, goldColor, oceanColor, woodColor, sheepColor, wheatColor, oceanColor, oreColor, oceanColor],
        "catanUnlimited": [oceanColor, oceanColor, oreColor, wheatColor, woodColor, wheatColor, brickColor, oceanColor, oceanColor, sheepColor, woodColor, oreColor, sheepColor, sheepColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, sheepColor, oreColor, wheatColor, desertColor, sheepColor, brickColor, oreColor, oceanColor, oceanColor, woodColor, sheepColor, woodColor, brickColor, brickColor, oreColor, woodColor, wheatColor, oceanColor, oceanColor, oceanColor, oceanColor, desertColor, woodColor, wheatColor, woodColor, wheatColor, oreColor, wheatColor, oceanColor, oceanColor, sheepColor, woodColor, sheepColor, brickColor, oreColor, brickColor, oceanColor, oceanColor, oceanColor, oceanColor, woodColor, sheepColor, wheatColor, wheatColor, brickColor, oceanColor],
        "catanUnlimitedExtend": [woodColor, wheatColor, oreColor, wheatColor, woodColor, wheatColor, brickColor, wheatColor, woodColor, sheepColor, woodColor, oreColor, sheepColor, sheepColor, brickColor, oreColor, desertColor, wheatColor, woodColor, sheepColor, oreColor, wheatColor, desertColor, sheepColor, brickColor, oreColor, sheepColor, oreColor, woodColor, sheepColor, woodColor, brickColor, brickColor, oreColor, woodColor, wheatColor, brickColor, sheepColor, oreColor, sheepColor, desertColor, woodColor, wheatColor, woodColor, wheatColor, oreColor, wheatColor, brickColor, desertColor, sheepColor, woodColor, sheepColor, brickColor, oreColor, brickColor, wheatColor, woodColor, brickColor, oreColor, woodColor, sheepColor, desertColor, wheatColor, brickColor, wheatColor]
    }

    const boardButton = {
        flex: 6,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 0.8,
        overflow: "hidden",
        boxShadow: "10 10 10 10"
    }
    const buttons = {
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        alignItems: "center"
    }

    return(
        <ScrollView style={{display: "flex", flexDirection: "column"}}>
            <Text style={{alignSelf: "center", fontSize: 18, margin: 10}}>Tap a board name to activate it</Text>
            <View style={buttons}>
                <Button onPress={(e) => activateBoard(gameArrays["base"])} title={"Base Catan 3-4 Players"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["baseExtend"])} title={"Base Catan 5-6 Players"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["fourIslands"])} title={"Four Islands"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["sixIslands"])} title={"Six Islands"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["newShores"])} title={"New Shores 3-4 Players"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["newShoresExtend"])} title={"New Shores 5-6 Players"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["catanUnlimited"])} title={"Catan Unlimited"}></Button>
                <Button onPress={(e) => activateBoard(gameArrays["catanUnlimitedExtend"])} title={"Catan Unlimited Extended"}></Button>
            </View>
        </ScrollView>
    )
}