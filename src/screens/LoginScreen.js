import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, TextInput, Image, Pressable} from "react-native";
import { Button } from 'react-native-web';

export default function App(){
    return(
        <SafeAreaView>
            <Text>SIGN IN</Text>
            <Text>Enter your login and password to create your account.</Text>
            <Image></Image>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123'
    }
})