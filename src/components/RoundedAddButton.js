import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const RoundedAddButton = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            testID='roundedAddBtn'
            style={styles.container}
            onPress={() => navigation.navigate("Add")}
        >
            <Ionicons name="add-sharp" size={40} color="white" />
        </TouchableOpacity>
    )
}

export default RoundedAddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0275d8",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    }
})