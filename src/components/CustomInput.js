
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const CustomInput = ({ label, multiline, field, setField, placeholder }) => {


    return (
        <View style={styles.container}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{label}</Text>
            <TextInput
                value={field}
                onChangeText={setField}
                placeholder={placeholder}
                multiline={multiline}
                textAlignVertical={multiline ? 'top' : "center"}
                style={[styles.inputStyle, { height: multiline ? 135 : 45 }]}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white",
        borderRadius: 5,
        width: "100%",
        padding: 10,
        marginTop: 10
    }
})