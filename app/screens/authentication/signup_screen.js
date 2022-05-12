import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Span,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState, useContext} from 'react';
import Colors from '../../../assets/colors/logo';
import Logo from '../../../assets/images/logo/logo.png';
import {useNavigation} from '@react-navigation/native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import axios from 'axios';
import {storeData, getData} from '../../utilities/asyn_storage';
import {baseUrl} from '../../utilities/api';
const {width, height} = Dimensions.get('screen');

const SignupScreen = () => {
  const navigation = useNavigation();

  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitButtonHandler = async () => {
    navigation.navigate('SignupNavigation');
  };
  return (
    <ScrollView style={{backgroundColor: Colors.white}}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <TextInput
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Shop name"
            mode="flat"
            style={styles.input}
            placeholder="i.e Zara mart"
            onChangeText={value => setShopName(value)}
          />
          <TextInput
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Owner name"
            style={styles.input}
            placeholder="i.e Faisal"
            onChangeText={value => setOwnerName(value)}
          />
          <TextInput
            keyboardType="number-pad"
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Phone number"
            style={styles.input}
            placeholder="i.e 03056649826"
            onChangeText={value => setPhoneNumber(value)}
          />
          <TextInput
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Address"
            style={styles.input}
            placeholder="enter shop address"
            onChangeText={value => setAddress(value)}
          />
          <TextInput
            secureTextEntry={true}
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Password"
            style={styles.input}
            placeholder="type your password "
            onChangeText={value => setPassword(value)}
          />
          <TextInput
            secureTextEntry={true}
            activeUnderlineColor={Colors.primary}
            underlineColor={Colors.primary}
            label="Confirm password"
            style={styles.input}
            placeholder="type password again"
            onChangeText={value => setConfirmPassword(value)}
          />

          <TouchableOpacity style={styles.button} onPress={submitButtonHandler}>
            <Text style={styles.buttonlabel}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.textOne}>
            Already user?
            <Text
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
              style={{color: Colors.primary}}>
              Sign In
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
    marginTop: width - 330,
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
});

export default SignupScreen;
