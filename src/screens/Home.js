import React, {useEffect, useState} from "react";
import { HexGrid, Layout, Hexagon} from 'react-native-hexgrid';
import {View, Text, ScrollView, Button, Alert, Dimensions, TouchableOpacity} from "react-native";
import axios from "axios";
import {isTablet} from 'react-native-device-detection'

export default function Home({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const {singleHex, setSingleHex} = AppState;
    const {currentBoard, setCurrentBoard} = AppState;
    const {oceanColor, woodColor, brickColor, wheatColor, sheepColor, oreColor, desertColor, goldColor} = AppState;
    const {rotation, setRotation } = AppState
    

    useEffect(() => {
        let tempHexes = [...hexagons];
        for (let i = 0; i < hexagons.length; i++){
            let currentHex = {...hexagons[i]};
            currentHex.fill = currentBoard[i];
            tempHexes[i] = currentHex;
        }
        setHexagons(tempHexes);
    }, [])


    const style = {
        backgroundColor: "white"
    }


    const resetHexes = (e) => {
        console.log("reset pressed");
        let tempHexes = [...hexagons];
        for (let i = 0; i < hexagons.length; i++){
            let currentHex = {...hexagons[i]};
            currentHex.fill = currentBoard[i];
            tempHexes[i] = currentHex;
        }
        setHexagons(tempHexes);
    }

    const openEdit = (id) => {
        let currentHex = {...hexagons[id]};
        setSingleHex(currentHex);
        navigation.navigate("Edit");
    }

    const saveBoard = () => {
        let tempValues = [];
        for (let i = 0; i < hexagons.length; i++) {
            let tempHex = {...hexagons[i]};
            tempValues.push(tempHex.fill)
        }
        
        Alert.prompt(
            "Board Name",
            "Name your masterpiece!",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        let easyMode = [];
                        for (let i = 0; i < tempValues.length; i++) {
                            if (tempValues[i] === oceanColor) {
                                easyMode.push("oceanColor")
                            } else if (tempValues[i] === woodColor) {
                                easyMode.push("woodColor")
                            } else if (tempValues [i] === brickColor) {
                                easyMode.push("brickColor")
                            } else if (tempValues[i] === sheepColor) {
                                easyMode.push("sheepColor")
                            } else if (tempValues[i] === wheatColor) {
                                easyMode.push("wheatColor")
                            } else if (tempValues[i] === oreColor) {
                                easyMode.push("oreColor")
                            } else if (tempValues[i] === desertColor) {
                                easyMode.push("desertColor")
                            } else if (tempValues[i] === goldColor) {
                                easyMode.push("goldColor")
                            }
                        }
                        console.log(easyMode);
                        navigation.navigate("Home");
                    },
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: boardName => {
                        let boardObj = {name: boardName, values: tempValues}
                        axios.post("http://54.215.140.17/api/gameBoards", boardObj)
                    }
                }
            ],
            "plain-text"
        )
    }

    const centerHex = hexagons.find(hex => hex.id === 32);
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
                <HexGrid
                    style={{
                        style,
                        transform: [{rotateZ: `${rotation}deg`}]
                    }}
                    width={screenWidth}
                    height={screenHeight}
                    viewBox={`-${viewBoxX} -${viewBoxY} ${viewBoxX * 2} ${viewBoxY * 2}`}
                >
                    <Layout
                        size={ (isTablet && rotation > 0) ? { x: 4.95, y: 4.95} :
                            { x: 3.6, y: 3.6 }
                        }
                        flat={true}
                        spacing={1.06}
                        origin={{ x: 0, y: 0 }}
                    >
                        {hexagons.map((hexagon, index) => {
                            return (
                                <Hexagon
                                    style={{
                                        stroke: "rgb(40, 40, 40)",
                                        strokeWidth: 0.2,
                                    }}
                                    key={index}
                                    id={hexagon.id}
                                    onPress={(e) => openEdit(hexagon.id)}
                                    fill={hexagon.fill}
                                    q={hexagon.q - centerHex.q}
                                    r={hexagon.r - centerHex.r}
                                    s={hexagon.s - centerHex.s}
                                ></Hexagon>
                            );
                        })}
                    </Layout>
                </HexGrid>
            </View>
            <View
                style={{
                    display: "flex",
                    paddingRight: 10,
                    paddingLeft: 10,
                    position: "absolute",
                    bottom: 30,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <Button onPress={(e) => resetHexes()} title="Reset" color={"red"} />
                <Button
                    onPress={(e) => saveBoard()}
                    title="Save Board"
                    color={"green"}
                />
            </View>
        </View>
    );
    
};