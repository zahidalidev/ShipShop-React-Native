import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from "../../theme/Colors";

function Screen({ children, style, statusBarColor = Colors.primary, barStyle = "light-content" }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {Platform.OS === "android" ? <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} /> : null}
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Screen;