import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigator";

interface Iprops {
    route: RouteProp<RootStackParamList, 'Detail'>;
}

class Detail extends React.Component<Iprops> {

    render() {
        const { route } = this.props;
        return (
            <View>
                <Text> Detail</Text>
                <Text> {route.params.id}</Text>
            </View>
        )
    }
}

export default Detail;