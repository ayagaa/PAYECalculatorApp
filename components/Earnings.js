import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const styles = StyleSheet.create({
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100,
        paddingLeft: 45,
        marginTop: 50
    },
    inputs: {
        fontSize: 30,
        width: 300,
        height: 60,
        marginBottom: 30,
        marginTop: 50,
        marginLeft: 50,
        borderBottomColor: '#00bcd4',
        borderBottomWidth: 2
    },
    datePickerButton: {
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginRight: 50,
        maxWidth: 300,
        marginRight: 50
    },
    datePickerText: {
        color: '#000',
        width: 300,
        textAlign: 'center',
        fontSize: 20
    },
    calculateButton: {
        marginTop: 100,
        color: '#00bcd4',
        width: 300,
        marginRight: 50,
        maxWidth: 300,
        marginRight: 50
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: 50
    },
    payPeriodTxt: {
        marginBottom: 20,
        color: '#00bcd4',
        fontSize: 18
    }
});

export default function Earnings() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState(new Date().toLocaleDateString('en-us', { month: 'long', year: 'numeric' }));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setButtonText(currentDate.toLocaleDateString('en-us', { month: 'long', year: 'numeric' }));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const calculatePAYE = () => {

    }

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    editable={true}
                    keyboardType='numeric'
                    label={"Gross Salary"}
                    placeholder={"Gross Salary"}
                />
                <View style={styles.buttonContainer}>
                    <Text style={styles.payPeriodTxt}>Pay Period</Text>
                    <Pressable style={styles.datePickerButton} onPress={showDatepicker}>
                        <Text styles={styles.datePickerText}>{buttonText}</Text>
                    </Pressable>
                </View>
                <View>
                    {show && (
                        <DateTimePicker style={styles.inputs}
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            display="default"
                            onChange={onChange}
                        />)
                    }
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.calculateButton} onPress={calculatePAYE} title='CALCULATE' />
                </View>
            </View>
        </View>
    )
}
