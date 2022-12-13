import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";

export default function CustomModes({AppState, navigation}) {
    const {hexagons, setHexagons} = AppState;
    const [allBoards, setAllBoards] = useState();
    const {board, setBoard} = AppState;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://54.215.140.17/api/gameBoards")
        .then((res) => {
            let unsortedBoards = (res.data.gameBoards);
            const sortedBoards = unsortedBoards.sort((a, b) => {
                if(a.name < b.name) {
                    return -1;
                }
            })
            setAllBoards(()=> {
                return sortedBoards;
            });
        })
        .then(() => {
            setLoaded(true);
        })
        .catch((err) => {
            console.log(err)
        })
    })

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

    const deleteBoard = (id) => {
        axios.delete("http://54.215.140.17/api/gameBoards/" + id)
    }

    const editBoard = (id) => {
        axios.get("http://54.215.140.17/api/gameBoards/" + id)
        .then( response => {
            setBoard(response.data.gameBoard);
        })
        .then(() => {
            navigation.navigate("Edit Board")
        })
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
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20
    }

    const deleteButton={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flex: 1.75,
        backgroundColor: "rgb(240, 240, 240)",
        padding: 10,
        margin: 10, 
        borderWidth: 0.8,
        borderRadius: 10,
        maxHeight: 40
    }

    const editButton ={
        display: "flex",
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifySelf: "center",
        alignSelf: "center",
        justifyContent: "center",
        margin: 10,
        padding: 10,
        borderWidth: 0.8,
        borderRadius: 10,
        maxHeight: 40
    }

    return loaded ? (
        <ScrollView style={{display: "flex", flexDirection: "column"}}>
            <Text style={{alignSelf: "center", fontSize: 20, margin: 10}}>Tap a board name to activate it</Text>
            {allBoards.map((board, index) => (
                <View style={buttons} key={index}>
                    <TouchableOpacity style={boardButton} onPress={(e) => {activateBoard(board.values)}}><Text style={{color: "navy"}}>{board.name}</Text></TouchableOpacity>
                    <TouchableOpacity style={editButton} onPress={(e) => {editBoard(board._id)}}><Text style={{color: "white"}}>Edit</Text></TouchableOpacity>
                    <TouchableOpacity style={deleteButton} onPress={(e) => {deleteBoard(board._id)}}><Text style={{color: "red"}}>Delete</Text></TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    ) : null
}