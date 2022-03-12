import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const PersonCard = ({ item, index, onDetail, onDelete }) => {

    return (
        <View key={index} style={styles.container} testID="personCard">
            <TouchableOpacity 
                style={styles.innerContainer}
                onPress={() => onDetail()}
                testID='onDetailBtn'
            >
                <Image
                    testID='avatar'
                    source={{ uri: item.avatar }}
                    style={{ width: 25, height: 40, marginRight: 15 }}
                />
                <Text testID="personName" style={{fontWeight: "bold", fontSize: 15}}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='onDeleteBtn' onPress={() => onDelete()} >
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