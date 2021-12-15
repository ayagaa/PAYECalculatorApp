import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';


const counties = ["Nairobi", "Kisumu", "Mombasa", "Nakuru", "Kiambu"];

const styles = StyleSheet.create({
    topView: {
        display: 'flex',
        flexDirection: 'row'
    },
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 50,
        marginLeft: 50
    },
    textStyle: {
        fontSize: 40,
        marginTop: 65,
        marginLeft: 20
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100,
        paddingLeft: 45
    },
    inputs: {
        fontSize: 30,
        width: 300,
        height: 60,
        marginBottom: 30,
        borderBottomColor: '#00bcd4',
        borderBottomWidth: 2
    },
    dropDownSelect: {
        fontSize: 30,
        width: 300,
        height: 60,
        marginBottom: 50,
    },
    buttonStyle: {
        marginTop: 20,
        color: '#00bcd4',
        width: 300,
        marginRight: 50,
        maxWidth: 300,
        marginRight: 50
    }
});

export default function Profile() {
    return (
        <View>
            <View style={styles.topView}>
                <Image
                    style={styles.profilePic}
                    source={require('../assets/placeholder-avatar-2.png')}
                />
                <Text style={styles.textStyle}>Your Profile</Text>
            </View>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.inputs}
                    editable={true}
                    label={"Name"}
                    placeholder={"Name"}
                />
                <SelectDropdown
                    style={styles.dropDownSelect}
                    data={counties}
                    onSelect={(selectedItem, index) => {
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <TextInput style={styles.inputs}
                    editable={true}
                    keyboardType='numeric'
                    label={"Phone Number"}
                    placeholder={"Phone Number"}
                />
                <View style={styles.buttonStyle}>
                    <Button
                        title="Save"
                    />
                </View>

            </View>
        </View>
    )
}
