import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import EditColor from "./EditColor";

export default function Settings({ AppState, navigation }) {
    const {oceanColor, setOceanColor} = AppState;
    const {woodColor, setWoodColor} = AppState;
    const {brickColor, setBrickColor} = AppState;
    const {sheepColor, setSheepColor} = AppState;
    const {wheatColor, setWheatColor} = AppState;
    const {oreColor, setOreColor} = AppState;
    const {goldColor, setGoldColor} = AppState;
    const {desertColor, setDesertColor} = AppState;
    const {currentColorName, setCurrentColorName} = AppState;
    

    const buttonStyle = {
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        margin: 10,
        backgroundColor: "rgb(230,230,230)",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 200,
        borderWidth: 1
    }

    const textStyle = {
        fontSize: 20
    }

    const editColor = (name) => {
        setCurrentColorName(name);
        navigation.navigate("Edit Color")
    }

    return (
        <View style={{
            display: "flex",
            width: 350,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center"
        }}>
            <Text style={{fontSize: 20, marginTop: 20}}>Choose a Resource to Pick a New Color</Text>
            <View style={{marginTop: 20}}>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Ocean")}>
                    <Text style={textStyle}>Ocean</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: oceanColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Wood")}>
                    <Text style={textStyle}>Wood</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: woodColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Brick")}>
                    <Text style={textStyle}>Brick</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: brickColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Wheat")}>
                    <Text style={textStyle}>Wheat</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: wheatColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Sheep")}>
                    <Text style={textStyle}>Sheep</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: sheepColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Ore")}>
                    <Text style={textStyle}>Ore</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: oreColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Desert")}>
                    <Text style={textStyle}>Desert</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: desertColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyle} onPress={(e)=> editColor("Gold")}>
                    <Text style={textStyle}>Gold</Text>
                    <TouchableOpacity style={{width: 30, height: 30, backgroundColor: goldColor, borderRadius: "50%"}}></TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}