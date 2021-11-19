import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// config
import Colors from "../../config/Theme"

function Screen({ children, style, statusBarColor = Colors.primary, barStyle = "light-content" }) {
    return (
        <SafeAreaView style={[{ flex: 1 }, style]} >
            {Platform.OS === "android" ? <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} /> : null}
            {children}
        </SafeAreaView>
    );
}

export default Screen;