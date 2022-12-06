import React from "react";
import { Button, View } from "react-native";
import { HexGrid, Layout, Hexagon, Text} from "react-native-hexgrid";

export default function Edit({AppState, navigation}){

    const {singleHex, setSingleHex} = AppState;
    const {hexagons, setHexagons} = AppState;
    const {woodColor, brickColor, wheatColor, sheepColor, oreColor, desertColor, goldColor, oceanColor} = AppState;

    const chooseColor = (color) => {
        let tempHexes = [...hexagons];
        let currentHex = {...hexagons[singleHex.id]}
        currentHex.fill = color;
        tempHexes[singleHex.id] = currentHex;
        setHexagons(tempHexes);

        navigation.navigate("Home");
    }

    const hexStyle = {strokeWidth: 0, fontSize: 2, fill: "white"};

    return (
    <View minHeight={0} minWidth={0} 
                style={{  display: "flex",
                position: "absolute",
                left: -270,
                top: 0,
                minHeight: 1200,
                minWidth: 1200
            }}>
        <View horizontal={true} minWidth={1200}>
            <Text style={{position: "relative", left: 20, fontSize: 21, backgroundColor: "white", paddingLeft: 300, paddingTop:50}}>Choose a new color for your Hex</Text>
            <HexGrid style={{backgroundColor: "white"}} width={1200} height={800} viewBox="-22 -35 100 100">
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