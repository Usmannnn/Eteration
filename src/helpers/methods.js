
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMockData = async () => {
    await fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        .then(response => response.json())
        .then(result => storeData(result))
}

export const addCharacterToStorage = ({ fullName, jobTitle, about, imageLink }) => {
    getData().then(response => {
        const newData = [...response, {
            id: response.length * 10,
            name: fullName,
            job: jobTitle,
            about,
            avatar: `http://placeimg.com/640/480/${imageLink}`
        }]
        storeData(newData)
    })
}

export const handleDeleteItemFromStorage = ({ itemId }) => {
    getData()
        .then(response => {
            const filteredData = response.filter(item => item.id !== itemId)
            storeData(filteredData)
        })
}


const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@mockData', jsonValue)
    } catch (e) {
        console.log(e, "Error when storing data")
    }
}


export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@mockData')
        return jsonValue != null ? JSON.parse(jsonValue) : getMockData();
    } catch (e) {
        console.log(e, "Error when reading data")
    }
}

const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e, `Error when removing ${key} forom storage`)
    }

    console.log('Done.')
}
