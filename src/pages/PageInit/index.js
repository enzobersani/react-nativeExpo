import React from "react";
import { StyleSheet ,View, Text ,TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function PageInit(){
    const navigation = useNavigation();

    return(    
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Selecione a tarefa que deseja!</Text>
        </Animatable.View>

        <Animatable.View style={styles.containerForm}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('PageFinanceControl')}
                >
                    <Text style={styles.buttonText}>Controle Financeiro</Text>
            </TouchableOpacity>

        </Animatable.View>

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
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
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