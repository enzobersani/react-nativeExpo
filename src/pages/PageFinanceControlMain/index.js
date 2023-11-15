import React, {useState} from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView, 
    TouchableWithoutFeedback,
    Keyboard} 
    from "react-native";
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from "react-native-masked-text";
import { RadioButton } from "react-native-paper";

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const handlePressOutside = () => {
    Keyboard.dismiss(); // Fecha o teclado
  };

export default function PageFinanceControlMain(props){
    const [inputMoeda, setInputMoeda] = useState('0');
    const [valorMoeda, setValorMoeda] = useState(0);

    const [selectedOption, setSelectedOption] = useState('Entrada');
    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };

    var valor = 3750.74
    var isNegativo = valor < 0;
    const valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    const estiloValor = isNegativo ? styles.textoNegativo : styles.textoPositivo;

    const selectedMonth = props.route.params.paramKey;
    const monthIndex = Math.max(1, Math.min(12, selectedMonth)) - 1;
    const monthName = monthNames[monthIndex];
    
    return(    
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View style={styles.container}>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>{monthName}</Text>
                </Animatable.View>

                <View style={styles.containerForm}>
                        <Text style={styles.textValor}>Informe um valor!</Text>
                        <TextInputMask
                            style={styles.input}
                            type={"money"}
                            value={inputMoeda}
                            maxLength={18}
                            onChangeText={value => {
                                setInputMoeda(value);
                                value = value.replace('R$', '');
                                value = value.replace('.', '');
                                value = value.replace(',', '.');
                                setValorMoeda(Number(value));
                            }}
                        />

                    <View style={styles.radioButtonContainer}>
                        <TouchableOpacity
                            style={[styles.optionButton, selectedOption === 'Entrada' && styles.selectedOption]}
                            onPress={() => handleOptionPress('Entrada')}
                        >
                            <Text style={styles.optionButtonText}>Entrada</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.optionButton, selectedOption === 'Saída' && styles.selectedOption]}
                            onPress={() => handleOptionPress('Saída')}
                        >
                            <Text style={styles.optionButtonText}>Saída</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonConfirmar}>
                        <Text style={styles.textConfirmar}>Confirmar</Text>
                    </TouchableOpacity>

                    <Text style={estiloValor}>{valorFormatado}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38A69D'
    },
    textValor:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#A1A1A1',
        paddingTop: '3%',
        paddingStart: '5%'
    },
    input:{
        width: '90%',
        height: 50,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 25,
        padding: 5,
        marginTop: '2%',
        marginStart: '5%',
        marginEnd: '5%'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '3%',
        paddingStart: '5%',
        borderBottomWidth: 3,
        borderBottomColor: '#FFF'
    },
    message:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        paddingBottom: '3%'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    radioButtonContainer: {
        flexDirection: 'row', // Isso coloca os RadioButton e Text na mesma linha
        alignItems: 'center', // Alinha os itens verticalmente
        marginTop: 10,
        marginStart: '3%',
      },
      TextRadioButton:{
        color: '#A1A1A1',
        fontWeight: 'bold',
        fontSize: 20
      },
      optionButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        width: '40%',
        borderRadius: 10,
        marginVertical: 10,
        marginStart: '2%',
        marginEnd: '10%',
        alignItems: 'center'
      },
      selectedOption: {
        backgroundColor: '#38A69D',
      },
      optionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      textoNegativo: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '5%'
      },
      textoPositivo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A1A1A1',
        alignSelf: 'center',
        marginTop: '5%'
      },
      buttonConfirmar:{
        marginTop: '2%',
        marginStart: '5%',
        backgroundColor: '#38A69D',
        borderRadius: 10,
        width: '89%%',
        paddingVertical: 20,
        alignItems: 'center'
      },
      textConfirmar:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
      }
 })