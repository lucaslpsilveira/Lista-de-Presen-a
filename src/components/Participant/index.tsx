import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    name: string;
    lastName?: string;
    onRemove: () => void;
}

export function Participant({ name, lastName, onRemove }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name} {lastName}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}