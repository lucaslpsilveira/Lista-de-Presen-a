import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#303636',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,      
        marginLeft: 16  
    },
    button: {
        height: 59,
        width: 59,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})