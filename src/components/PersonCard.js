import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const PersonCard = ({ item, index, onDetail, onDelete }) => {

    return (
        <View key={index} style={styles.container}>
            <TouchableOpacity 
                style={styles.innerContainer}
                onPress={() => onDetail()}
            >
                <Image
                    source={{ uri: item.avatar }}
                    style={{ width: 25, height: 40, marginRight: 15 }}
                />
                <Text style={{fontWeight: "bold", fontSize: 15}}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete()} >
                <Ionicons name="trash-outline" size={25} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default PersonCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingHorizontal: 15
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    }
})