import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";

export default function GameModes({AppState, navigation}){

    const style ={
        backgroundColor: "white"
    }
    
    return(
        <View>
            <Button style={style} title="Pre-Installed Game Modes" onPress={() => navigation.navigate("Installed Modes")}></Button>
            <Button style={style} title="Custom Game Modes"></Button>
        </View>
    )
}