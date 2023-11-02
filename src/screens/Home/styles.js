import { StyleSheet  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202222',
      padding: 20      
    },
    eventName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    eventDate: {
        color: '#888',
        fontSize: 12,
    },
    input: {
        backgroundColor: '#303636',
        height: 59,
        borderStyle: 'solid',
        borderWidth: 0.2,
        borderColor: '#000',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12,
        color: '#fff'
    },
    button: {
        height: 59,
        width: 59,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmptytext: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
});