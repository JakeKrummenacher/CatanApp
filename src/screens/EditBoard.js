import React, {useEffect, useState} from "react";
import { HexGrid, Layout, Hexagon, Pattern, Path, Hex, GridGenerator} from 'react-native-hexgrid';
import {View, Text, ScrollView, Button, Alert, Dimensions} from "react-native";
import axios from "axios";
import {isTablet} from 'react-native-device-detection'


export default function EditBoard({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const {singleHex, setSingleHex} = AppState;
    const {board, setBoard} = AppState;
    const {rotation, setRotation} = AppState;

    
    
    useEffect(() => {
        let tempHexes = [...hexagons];
        for (let i = 0; i < hexagons.length; i++){
            let currentHex = {...hexagons[i]};
            currentHex.fill = board.values[i];
            tempHexes[i] = currentHex;
        }
        setHexagons(tempHexes);
    }, [board])


    const style = {
        backgroundColor: "white"
    }

    const openEdit = (id) => {
        let currentHex = {...hexagons[id]};
        setSingleHex(currentHex);
        navigation.navigate("Edit Custom");
    }

    const saveBoard = () => {
        let tempValues = [];
        for (let i = 0; i < hexagons.length; i++){
            tempValues.push(hexagons[i].fill);
        }
        let tempObj = {name: board.name, values: tempValues};
        axios.put("http://54.215.140.17/api/gameBoards/" + board._id, tempObj)
        navigation.navigate("Home")
    }

    const centerHex = hexagons.find(hex => hex.id === 32);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    
    // Calculate the aspect ratio and viewBox values
    const aspectRatio = screenWidth / screenHeight;
    const viewBoxX = aspectRatio * 50;
    const viewBoxY = 50;

    // const rotateStyle = {
    //     transform: [{rotate: isTablet ? '270deg' : '0deg'}]
    // }

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
                <Button
                    onPress={(e) => saveBoard()}
                    title="Save Board"
                    color={"green"}
                />
            </View>
        </View>
    );
    // return (
    //     <View style={{height: 700}}>
    //         <View minHeight={0} minWidth={0} 
    //                     style={{  display: "flex",
    //                     position: "absolute",
    //                     left: -270,
    //                     margin: "auto",
    //                     top: 0
    //                 }}>
    //             <ScrollView horizontal={true} minWidth={1200}>
    //                 <HexGrid style={style} width={1200} height={800} viewBox="-9.5 -16 100 100">
    //                     <Layout size={{x:4.0, y:4.0}} flat={true} spacing={1.06} origin={{x:0, y:0}}>
    //                         {hexagons.map((hexagon, index) => {
    //                             return(
    //                                 <Hexagon style={{stroke: "rgb(40, 40, 40)", strokeWidth: .2}} key={index} id={hexagon.id} onPress={(e) => openEdit(hexagon.id)} fill={hexagon.fill} q={hexagon.q} r={hexagon.r} s={hexagon.s}></Hexagon>
    //                                 )
    //                             })}
    //                     </Layout>
    //                 </HexGrid>
    //             </ScrollView>
    //         </View>
    //         <View style={{display: "flex", paddingRight: 10, paddingLeft: 10, position: "absolute", bottom: 30, flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
    //             <Button onPress={(e)=>saveBoard()} title="Save Board" color={"green"}/>
    //         </View>
    //     </View>
    // )
};