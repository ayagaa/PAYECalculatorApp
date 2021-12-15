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
        padding: 30
    },
    payPeriodTxt: {
        marginBottom: 20,
        color: '#00bcd4',
        fontSize: 28
    }
});

export default function Reports() {

    const [taxCardDate, setTaxCardPickerDate] = useState(new Date());
    const [taxCardMode, setTaxCardPickerMode] = useState('date');
    const [taxCardShow, setTaxCardPickerShow] = useState(false);
    const [taxCardText, setTaxCardPickerText] = useState(new Date().toLocaleDateString('en-us', { year: 'numeric' }));

    const [date, setPaySlipPickerDate] = useState(new Date());
    const [mode, setPaySlipPickerMode] = useState('date');
    const [show, setPaySlipPickerShow] = useState(false);
    const [paySlipPickerText, setPaySlipPickerText] = useState(new Date().toLocaleDateString('en-us', { month: 'long', year: 'numeric' }));


    const onPaySlipPickerChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setPaySlipPickerShow(false);
        setPaySlipPickerDate(currentDate);
        setPaySlipPickerText(currentDate.toLocaleDateString('en-us', { month: 'long', year: 'numeric' }));
    };

    const showPaySlipPickerMode = (currentMode) => {
        setPaySlipPickerShow(true);
        setPaySlipPickerMode(currentMode);
    };

    const showPaySlipDatePicker = () => {
        showPaySlipPickerMode('date');
    };

    const onTaxCardPickerChange = (event, selectedDate) => {
        const currentDate = selectedDate || taxCardDate;
        setTaxCardPickerShow(false);
        setTaxCardPickerDate(currentDate);
        setTaxCardPickerText(currentDate.toLocaleDateString('en-us', { year: 'numeric' }));
    };

    const showTaxCardPickerMode = (currentMode) => {
        setTaxCardPickerShow(true);
        setTaxCardPickerMode(currentMode);
    };

    const showTaxCardDatePicker = () => {
        showTaxCardPickerMode('date');
    };

    const downloadPaySlip = () => {

    };

    const downloadP9 = () => {

    };

    return (

        <View>
            <View style={styles.buttonContainer}>
                <Text style={styles.payPeriodTxt}>Pay Slip</Text>
                <Text>Pay slip Month</Text>
                <Pressable style={styles.datePickerButton} onPress={showPaySlipDatePicker}>
                    <Text style={styles.datePickerText}>{paySlipPickerText}</Text>
                </Pressable>
            </View>
            <View>
                {show && (
                    <DateTimePicker style={styles.inputs}
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        display="default"
                        onChange={onPaySlipPickerChange}
                    />)
                }
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.calculateButton} onPress={downloadPaySlip} title='Download Payslip' />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.payPeriodTxt}>P9 Tax Card</Text>
                <Text>Taxation Year</Text>
                <Pressable style={styles.datePickerButton} onPress={showTaxCardDatePicker}>
                    <Text style={styles.datePickerText}>{taxCardText}</Text>
                </Pressable>
            </View>
            <View>
                {taxCardShow && (
                    <DateTimePicker style={styles.inputs}
                        testID="dateTimePicker"
                        value={date}
                        mode={taxCardMode}
                        display="default"
                        onChange={onTaxCardPickerChange}
                    />)
                }
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.calculateButton} onPress={downloadP9} title='Download P9' />
            </View>
        </View>
    )
}
