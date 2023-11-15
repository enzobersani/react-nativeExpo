import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView } 
    from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function PageFinanceControl(){
    const navigation = useNavigation();
    const buttons = Array.from({ length: 12 }, (_, index) => `Mes /${index + 1}`);

    const goToFinanceControlMain = (selectedMonth) => {
        navigation.navigate('PageFinanceControlMain', {paramKey: selectedMonth});
    };

    return(    
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Controle Financeiro</Text>
                <Text style={styles.messageMonth}>Selecione um mes!</Text>
            </Animatable.View>
    
            <ScrollView style={styles.containerForm}>
                {buttons.map((buttonText, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => goToFinanceControlMain(index + 1)}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
        ))} 
            </ScrollView>
    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38A69D'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '3%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },
    messageMonth:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: '5%'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    button:{
        backgroundColor:'#38A69D',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 25,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
    }
 })