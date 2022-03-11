import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../screen/Main";
import Detail from "../screen/Detail";
import AddNew from "../screen/AddNew";

const Root = createNativeStackNavigator();


const RootStack = () => {
    return (
        <Root.Navigator initialRouteName="Main">
            <Root.Screen
                name="Main"
                component={Main}
                options={{ headerTitleAlign: "center", title: "Simpsons" }}
            />
            <Root.Screen
                name="Detail"
                component={Detail}
                options={{ headerTitleAlign: "center", title: "Details" }}
            />
            <Root.Screen
                name="Add"
                component={AddNew}
                options={{ headerTitleAlign: "center", title: "Add New Character" }}
            />
        </Root.Navigator>
    );
};

export default RootStack;