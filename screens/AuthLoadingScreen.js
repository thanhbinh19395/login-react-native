import React from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        title: 'AuthLoadingScreen',
    };

    constructor(props) {
        super(props);
        this._checkAuth();
    }

    _checkAuth = async () => {
        const userToken = await new Promise(function (resolve) {
            setTimeout(function () {
                resolve(null);
            }, 3000);
        });
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});