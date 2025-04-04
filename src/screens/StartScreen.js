import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.TextH1}>Welcome to</Text>
      <Text style={styles.TextHood}>hood</Text>
      <Text style={styles.TextP}>feel.rhythm.vibe</Text>
      <Image style={styles.Logo} source={require('../../assets/icon2.png')} />
      <Pressable 
        style={styles.ButtonSignIn} 
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.ButtonSignInText}>SIGN IN</Text>
      </Pressable>
      <Pressable 
        style={styles.ButtonSignUp} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.ButtonSignUpText}>SIGN UP</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="SignIn" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 300,
    height: 300,
  },
  TextH1: {
    fontSize: 32,
    fontWeight: '900',
    color: '#654',
  },
  TextHood: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
  },
  TextP: {
    fontSize: 16,
    fontWeight: '500',
    color: '#564',
  },
  ButtonSignIn: {
    marginTop: 25,
    backgroundColor: 'white',
    padding: 14,
    width: 200,
    borderRadius: 50
  },
  ButtonSignUp: {
    marginTop: 10,
    padding: 14,
    width: 200,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white'
  }, 
  ButtonSignInText: {
  fontSize: 32,
  textAlign: 'center',
  color: '#123',
  fontWeight: '900',
  },
  ButtonSignUpText: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900',
  },
});
