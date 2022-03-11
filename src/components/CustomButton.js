import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, Keyboard, Animated } from 'react-native'

const CustomButton = ({ label, isKeyboardSensitive, onAction }) => {

    const animatedPosition = useRef(new Animated.Value(0)).current
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    useEffect(() => {
        if(isKeyboardSensitive) {
            Animated.spring(animatedPosition,{
                toValue: keyboardStatus ? -100 : 0,
                useNativeDriver: false
            }).start()
        }
    }, [keyboardStatus])

    return (
        <Animated.View style={[styles.container, { bottom: animatedPosition}]}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => onAction()}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>{label}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        height: 45,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flex: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0275d8",
    }
})