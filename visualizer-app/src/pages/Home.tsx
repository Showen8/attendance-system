import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackNavication } from "../navigator";

interface Iprops {
    navigation: RootStackNavication;
}

class Home extends React.Component<Iprops> {

    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {
            id: 100,
        });
    }

    render() {
        return (
            <View>
                <Text> Home </Text>
                <Button title="跳转到详情页" onPress={this.onPress} />
            </View>
        )
    }
}

export default Home;