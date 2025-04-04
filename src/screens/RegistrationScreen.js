import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, TextInput, Pressable, Text, View, Switch } from "react-native";

export default function RegistrationScreen({ navigation }) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[A-Z])(?=.*\d).{7,}$/;
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        setFormValid(
            login.length > 7 && emailRegex.test(login) &&
            password.length > 7 &&
            passwordRegex.test(password) && password === confirmPassword &&
            isAgreed
        );
    }, [login, password, confirmPassword, isAgreed]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.TextH1}>SIGN UP</Text>
            <Text style={styles.TextP}>Enter your login and password to create your account.</Text>
            
            <View style={styles.ViewForm}>
                <Text style={styles.TextForm}>Login:</Text>
                <TextInput 
                    style={[styles.LoginInput, styles.InputBorder]} 
                    placeholder="login-example"
                    placeholderTextColor="rgba(255, 255, 255, 0.63)"
                    value={login}
                    onChangeText={setLogin}
                />
                
                <Text style={styles.TextForm}>Password:</Text>
                <TextInput 
                    style={[styles.PasswordInput, styles.InputBorder]} 
                    placeholder="password-example"
                    placeholderTextColor="rgba(255, 255, 255, 0.63)"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                
                <Text style={styles.TextForm}>Confirm password:</Text>
                <TextInput 
                    style={[styles.PasswordInput, styles.InputBorder]} 
                    placeholder="confirm password"
                    placeholderTextColor="rgba(255, 255, 255, 0.63)"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                
                <View style={styles.ViewCheckbox}>
                    <Switch
                        value={isAgreed}
                        onValueChange={setIsAgreed}
                        trackColor={{ false: "#767577", true: "rgba(255, 255, 255, 0.58)" }}
                        thumbColor={isAgreed ? "#f4444b" : "#f4f3f4"}
                    />
                    <Text numberOfLines={2} style={styles.CheckBoxP}>
                        Согласие на обработку персональных данных
                    </Text>
                </View>
                
                <View style={styles.Buttons}>
                    <Pressable
                        style={styles.ButtonBack}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.TextBack}>Back</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.ButtonContinue, !formValid && styles.DisabledButton]}
                        onLongPress={()=>alert("Удачная регистрация")}
                        onPress={() => navigation.navigate('Home')}
                        disabled={!formValid}
                    >
                        <Text style={styles.TextBack}>Continue</Text>
                    </Pressable>
                </View>
            </View>
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123',
        paddingHorizontal: '10%'
    },
    TextH1: {
        fontSize: 48,
        fontWeight: '900',
        color: '#654',
        marginTop: '10%'
    },
    TextForm: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 5
    },
    TextP: {
        fontSize: 24,
        fontWeight: '500',
        color: '#564',
        textAlign: 'center',
        marginVertical: 20
    },
    ViewForm: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
        gap: 10
    },
    ButtonBack: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#700',
        padding: 25,
        flex: 0.3
    },
    ButtonContinue: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: 'green',
        padding: 25,
        flex: 0.7
    },
    DisabledButton: {
        backgroundColor: "rgba(113, 102, 102, 0.51)"
    },
    TextBack: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600'
    },
    InputBorder: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    LoginInput: {
        fontSize: 18,
        color: 'white'
    },
    PasswordInput: {
        fontSize: 18,
        color: 'white'
    },
    ViewCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    CheckBoxP: {
        fontSize: 16,
        fontWeight: '200',
        color: '#fff',
        width: 200,
        marginLeft: 10
    }
});