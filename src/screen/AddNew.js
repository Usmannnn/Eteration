import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

import { addCharacterToStorage } from '../helpers/methods'

const AddNew = () => {

    const navigation = useNavigation()

    const [fullName, setFullName] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [about, setAbout] = useState("")
    const [imageLink, setImageLink] = useState("")


    const handleAdd = () => {
        addCharacterToStorage({ fullName, jobTitle, about, imageLink })
        setFullName("")
        setJobTitle("")
        setAbout("")
        setImageLink("")

        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
                <CustomInput
                    label={"Name Surname:"}
                    field={fullName}
                    setField={setFullName}
                />
                <CustomInput
                    label={"Job Title:"}
                    field={jobTitle}
                    setField={setJobTitle}
                />
                <CustomInput
                    multiline
                    label={"About Him/Her:"}
                    field={about}
                    setField={setAbout}
                />
                <CustomInput
                    field={imageLink}
                    setField={setImageLink}
                    label={"Image Link:"}
                />
            </ScrollView>
            <CustomButton
                isKeyboardSensitive
                label={"Add Character"}
                onAction={() => handleAdd()}
            />
        </View>
    )
}

export default AddNew

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 15
    },
    formContainer: {
        flex: 1,
        backgroundColor: "whitesmoke"
    }
})