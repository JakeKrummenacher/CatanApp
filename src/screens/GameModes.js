import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";

export default function GameModes({AppState, navigation}){

    const buttons = {
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        alignItems: "center",
    }
    const buttonBox = {
        marginTop: 10
    }
    
    return(
        <View style={buttons}>
            <View style={buttonBox}>
                <Button title="Pre-Installed Game Modes" onPress={() => navigation.navigate("Installed Modes")}></Button>
            </View>
            <View style={buttonBox}>
                <Button title="Custom Game Modes" onPress={() => navigation.navigate("Custom Modes")}></Button>
            </View>
        </View>
    )
}