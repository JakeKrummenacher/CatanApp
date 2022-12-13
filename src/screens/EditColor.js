import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

export default function EditColor({AppState, navigation}) {
    const {oceanColor, setOceanColor} = AppState;
    const {woodColor, setWoodColor} = AppState;
    const {brickColor, setBrickColor} = AppState;
    const {sheepColor, setSheepColor} = AppState;
    const {wheatColor, setWheatColor} = AppState;
    const {oreColor, setOreColor} = AppState;
    const {goldColor, setGoldColor} = AppState;
    const {desertColor, setDesertColor} = AppState;
    const {currentColorName, setCurrentColorName} = AppState;

    const [currentColor, setCurrentColor] = useState("rgb(0, 0, 0)");

    const submitColor = (e) => {
        if (currentColorName === "Ocean") {
            setOceanColor(currentColor);
        } else if (currentColorName === "Wood") {
            setWoodColor(currentColor);
        } else if (currentColorName ==="Brick") {
            setBrickColor(currentColor);
        } else if (currentColorName === "Sheep") {
            setSheepColor(currentColor);
        } else if (currentColorName === "Wheat") {
            setWheatColor(currentColor);
        } else if (currentColorName === "Ore") {
            setOreColor(currentColor);
        } else if (currentColorName === "Desert") {
            setDesertColor(currentColor);
        } else if (currentColorName === "Gold") {
            setGoldColor(currentColor);
        }
        navigation.navigate("Preferences");
    }



    return (
        <View style={{width: 350, marginLeft: "auto", marginRight: "auto", display: "flex"}}>
            <Text style={{fontSize: 20, alignSelf: "center"}}>Choose your new color for {currentColorName}</Text>
            <ColorPicker onColorChange={color => setCurrentColor(color)} swatches={false} thumbSize={20}></ColorPicker>
            <TouchableOpacity onPress={(e) => {submitColor()}} style={{position: "absolute", top: 300, alignSelf: "center", backgroundColor: "powderblue", padding: 10, outlineSize: 10}}><Text>Submit</Text></TouchableOpacity>
        </View>
    )

}