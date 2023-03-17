import React from "react";
import { Button, View, Dimensions } from "react-native";
import { HexGrid, Layout, Hexagon, Text} from "react-native-hexgrid";

export default function EditCustom({AppState, navigation}){

    const {singleHex, setSingleHex} = AppState;
    const {hexagons, setHexagons} = AppState;
    const {woodColor, brickColor, wheatColor, sheepColor, oreColor, desertColor, goldColor, oceanColor} = AppState;

    const chooseColor = (color) => {
        let tempHexes = [...hexagons];
        let currentHex = {...hexagons[singleHex.id]}
        currentHex.fill = color;
        tempHexes[singleHex.id] = currentHex;
        setHexagons(tempHexes);

        navigation.navigate("Edit Board");
    }

    const hexStyle = {strokeWidth: 0, fontSize: 2, fill: "white"};

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const aspectRatio = screenWidth / screenHeight;
    const viewBoxX = aspectRatio * 50;
    const viewBoxY = 50;

    return (
    <View style={{ flex: 1 }}>
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text
            style={{
            fontSize: 21,
            backgroundColor: "white",
            marginBottom: 20,
            }}
        >
            Choose a new color for your Hex
        </Text>
        <HexGrid
            style={{ backgroundColor: "white" }}
            width={screenWidth}
            height={screenHeight}
            viewBox={`-${viewBoxX} -${viewBoxY} ${viewBoxX * 2} ${viewBoxY * 2}`}
        >
            <Layout size={{x:6, y:6}} flat={true} spacing={1.1} origin={{x:0, y:0}}>
                    <Hexagon onPress={(e) => {chooseColor(oceanColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={oceanColor} q={0} r={-2} s={0}>
                        <Text style={hexStyle}>Ocean</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(woodColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={woodColor} q={0} r={0} s={0}>
                        <Text style={hexStyle}>Wood</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(brickColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={brickColor} q={1} r={0} s={0}>
                        <Text style={hexStyle}>Brick</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(sheepColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={sheepColor} q={1} r={-1} s={0}>
                        <Text style={hexStyle}>Sheep</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(wheatColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={wheatColor} q={0} r={-1} s={0}>
                        <Text style={{strokeWidth: 0, fontSize: 2, fill: "black"}}>Wheat</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(oreColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={oreColor} q={-1} r={0} s={0}>
                        <Text style={hexStyle}>Ore</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(goldColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={goldColor} q={-1} r={1} s={0}>
                        <Text style={hexStyle}>Gold</Text>
                    </Hexagon>
                    <Hexagon onPress={(e) => {chooseColor(desertColor)}} style={{stroke: "black", strokeWidth: .3}} id={0} fill={desertColor} q={0} r={1} s={0}>
                        <Text style={{strokeWidth: 0, fontSize: 2, fill: "black"}}>Desert</Text>
                    </Hexagon>
                </Layout>
        </HexGrid>
        </View>
    </View>
    );
}