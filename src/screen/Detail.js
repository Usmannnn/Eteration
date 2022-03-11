import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Detail = () => {

    const { selectedItem } = useRoute().params

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: selectedItem.avatar }}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    resizeMode={"contain"}
                />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.headInfo}>
                    <Text style={{ fontWeight: "bold", fontSize: 19 }}>{selectedItem.name}</Text>
                    <Text style={{ fontWeight: "400", fontSize: 16 }}>{selectedItem.job}</Text>
                </View>
                <ScrollView style={styles.describeContainer}>
                    {selectedItem.about ? 
                    <Text style={{ fontSize: 15 }}>{selectedItem.about}</Text> :
                        <Text style={{ fontSize: 15 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </Text>}
                </ScrollView>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 2,
        marginHorizontal: 10
    },
    infoContainer: {
        flex: 3,
        paddingHorizontal: 15
    },
    headInfo: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    describeContainer: {
        flex: 1,
        marginBottom: 15
    }
})