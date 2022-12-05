import React, {useEffect, useState} from "react";
import { HexGrid, Layout, Hexagon, Pattern, Path, Hex, GridGenerator} from 'react-native-hexgrid';
import {View, Text, ScrollView, Button} from "react-native";


export default function Home({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const {singleHex, setSingleHex} = AppState;
    const {currentBoard, setCurrentBoard} = AppState;

    
    
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


    const displayId = (id) => {
        console.log(id);
    };

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


    return (
        <View style={{height: 700}}>
            <View minHeight={0} minWidth={0} 
                        style={{  display: "flex",
                        position: "absolute",
                        left: -270,
                        top: 0,
                        minHeight: 1200,
                        minWidth: 1200
                    }}>
                <ScrollView horizontal={true} minWidth={1200}>
                    <HexGrid style={style} width={1200} height={800} viewBox="-10 -18 100 100">
                        <Layout size={{x:4.1, y:4.1}} flat={true} spacing={1.06} origin={{x:0, y:0}}>
                            {hexagons.map((hexagon, index) => {
                                return(
                                    <Hexagon style={{stroke: "rgb(40, 40, 40)", strokeWidth: .2}} key={index} id={hexagon.id} onPress={(e) => openEdit(hexagon.id)} fill={hexagon.fill} q={hexagon.q} r={hexagon.r} s={hexagon.s}></Hexagon>
                                    )
                                })}
                        </Layout>
                    </HexGrid>
                </ScrollView>
            </View>
            <View style={{display: "flex", paddingRight: 40, paddingTop: 20, flexDirection: "row", width: "100%", justifyContent: "flex-end"}}>
                <Button onPress={(e)=>resetHexes()} title="Reset" color={"red"}/>
            </View>
        </View>
    )
};