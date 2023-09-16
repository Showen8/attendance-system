import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
import BottomTabs from "./BottomTabs";
import Detail from "@/pages/Detail";

export type RootStackParamList = {
    BottomTabs: {
        screen?: string;
    };
    Detail: {
        id: number;
    };
}

let Stack = createStackNavigator<RootStackParamList>();

export type RootStackNavication = StackNavigationProp<RootStackParamList>;

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerMode: "float",
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        // gestureDirection: 'horizontal'
                    }}>
                    <Stack.Screen name="BottomTabs" component={BottomTabs} />
                    <Stack.Screen name="Detail" options={{ headerTitle: '详情页' }} component={Detail} />
                </Stack.Navigator>
            </NavigationContainer >
        )
    }
}

export default Navigator;