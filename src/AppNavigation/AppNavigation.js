import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import Home from "../screens/Home";
import Edit from "../screens/Edit";
import GameModes from "../screens/GameModes";
import Settings from "../screens/Settings";
import InstalledModes from "../screens/InstalledModes";
import EditBoard from "../screens/EditBoard";
import EditCustom from "../screens/EditCustom";
import EditColor from "../screens/EditColor";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomModes from "../screens/CustomModes";




export default function AppNavigation({AppState}) {

    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    
    
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home" screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === "Preferences") {
                        iconName = focused ? 'hexagon-slice-6' : 'hexagon-outline';
                    } else if (rn === "Games") {
                        iconName = focused ? 'hexagon-multiple' : 'hexagon-multiple-outline';
                    }

                    return <Icon name={iconName} size={25}></Icon>
                    
                },
            })}>
                <Tab.Screen name="Home">
                    {props => <Home {...props} AppState={AppState}></Home>}
                </Tab.Screen>
                <Tab.Screen name="Games">
                    {props => <GameModes {...props} AppState={AppState}></GameModes>}
                </Tab.Screen>
                <Tab.Screen name="Preferences">
                    {props => <Settings {...props} AppState={AppState}></Settings>}
                </Tab.Screen>
                <Tab.Screen name="Edit" options={{
                    tabBarButton: () => null
                }}>
                    {props => <Edit {...props} AppState={AppState}></Edit>}
                </Tab.Screen>
                <Tab.Screen name="Installed Modes" options={{
                    tabBarButton: () => null
                }}>
                    {props => <InstalledModes {...props} AppState={AppState}></InstalledModes>}
                </Tab.Screen>
                <Tab.Screen name="Custom Modes" options={{
                    tabBarButton: () => null
                }}>
                    {props => <CustomModes {...props} AppState={AppState}></CustomModes>}
                </Tab.Screen>
                <Tab.Screen name="Edit Board" options={{
                    tabBarButton: () => null
                }}>
                    {props => <EditBoard {...props} AppState={AppState}></EditBoard>}
                </Tab.Screen>
                <Tab.Screen name="Edit Custom" options={{
                    tabBarButton: () => null
                }}>
                    {props => <EditCustom {...props} AppState={AppState}></EditCustom>}
                </Tab.Screen>
                <Tab.Screen name="Edit Color" options={{
                    tabBarButton: () => null
                }}>
                    {props => <EditColor {...props} AppState={AppState}></EditColor>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    );

}