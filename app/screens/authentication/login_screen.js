import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Colors from '../../../assets/colors/logo';
import Logo from '../../../assets/images/logo/logo.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const LoginScreen = () => {
  const navigation = useNavigation();

  const submitButtonHandler = () => {
    navigation.navigate('ForegotPasswordScreen');
  };
  return (
    <ScrollView style={{backgroundColor: Colors.primary}}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <TextInput
            keyboardType="number-pad"
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Phone number"
            style={styles.input}
            placeholder="Enter your number i.e 03056649826"
          />

          <TextInput
            secureTextEntry={true}
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Password"
            style={styles.input}
            placeholder="Enter your password"
          />

          <Text
            style={styles.foregot}
            onPress={() => {
              navigation.navigate('ForegotPasswordScreen');
            }}>
            Forgot password?
          </Text>

          <TouchableOpacity style={styles.button} onPress={submitButtonHandler}>
            <Text style={styles.buttonlabel}>Sign in</Text>
          </TouchableOpacity>

          <Text style={styles.textOne}>
            Not a user?
            <Text
              onPress={() => {
                navigation.pop();
              }}
              style={{color: Colors.primary}}>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  logo: {
    width: width - 200,
    height: height - 600,
    marginTop: width - 280,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: Colors.blue,
    borderRadius: 7,
  },
  formContainer: {
    margin: 20,
    flex: 1,
    backgroundColor: Colors.blur,
    borderRadius: 9,
  },
  input: {
    width: width - 35,
    backgroundColor: Colors.white,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  lable: {
    marginHorizontal: 12,
    marginVertical: 5,
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    backgroundColor: Colors.primary,
    margin: 10,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonlabel: {
    fontSize: 18,
    color: 'white',
  },
  textOne: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
    textAlign: 'center',
  },
  foregot: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: '600',
    color: '#3498DB',
  },
});

export default LoginScreen;
