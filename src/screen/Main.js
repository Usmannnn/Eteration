import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import PersonCard from '../components/PersonCard'

import { getData, handleDeleteItemFromStorage } from '../helpers/methods'
import RoundedAddButton from '../components/RoundedAddButton'

const Main = () => {

    const navigation = useNavigation()
    const [data, setData] = useState(null)

    useEffect(async () => {
        const mockData = await getData()
        setData(mockData)
    }, [data])

    return (
        <View style={styles.container}>
            {data && <FlatList
                data={data}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PersonCard
                            key={index}
                            item={item}
                            onDetail={() => navigation.navigate("Detail", { selectedItem: item })}
                            onDelete={() => handleDeleteItemFromStorage({ itemId: item.id })}
                        />
                    );
                }}
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
            />}
            <RoundedAddButton  />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    }
})