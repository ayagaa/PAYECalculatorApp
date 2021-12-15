import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    taxesHeaderContainer: {
        backgroundColor: '#6666CC',
        height: 125,
        paddingTop: 30
    },
    headerText: {
        fontSize: 25,
        color: '#fff',
        marginLeft: 10,
    },
    bigNetPay: {
        fontSize: 40,
        color: '#fff',
        marginTop: 5,
        marginLeft: 10
    },
    grossPayContainer: {
        height: 60,
        width: 350,
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#000'
    },
    grossPay: {
        fontSize: 30,
        color: '#000',
        fontWeight: '700',
        flex: 1
    },
    grossPayAmount: {
        fontSize: 30,
        color: '#000',
        fontWeight: '700',
        flex: 1,
        textAlign: 'right'
    },
    taxDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 320,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'blue'
    },
    taxDetail: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        height: 50,
        width: 350
    },
    taxDetailTitle: {
        fontSize: 30,
        color: '#000',
        flex: 1
    },
    taxDetailAmount: {
        fontSize: 30,
        color: '#000',
        flex: 1,
        textAlign: 'right'
    },
});

export default function Taxes() {
    return (
        <View>
            <View style={styles.taxesHeaderContainer}>
                <Text style={styles.headerText}>Net Pay:</Text>
                <Text style={styles.bigNetPay}>0.00</Text>
            </View>
            <View style={styles.grossPayContainer}>
                <Text style={styles.grossPay}>Gross Pay</Text>
                <Text style={styles.grossPayAmount}>0.00</Text>
            </View>
            <View style={styles.taxDetailsContainer}>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>Taxable Pay</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>Total Tax</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>PAYE</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>Relief</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>NSSF</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
                <View style={styles.taxDetail}>
                    <Text style={styles.taxDetailTitle}>NHIF</Text>
                    <Text style={styles.taxDetailAmount}>0.00</Text>
                </View>
            </View>
            <View style={styles.grossPayContainer}>
                <Text style={styles.grossPay}>Net Pay</Text>
                <Text style={styles.grossPayAmount}>0.00</Text>
            </View>
        </View>
    )
}
