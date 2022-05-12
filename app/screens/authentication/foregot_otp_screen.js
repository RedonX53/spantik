import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Colors from '../../../assets/colors/logo';
import {TextInput} from 'react-native-paper';
const {width, height} = Dimensions.get('screen');

const ForegotOtpScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/lottie/otp.json')}
        autoPlay
        style={styles.gif}
      />
      <View style={styles.formContainer}>
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="OTP"
          style={styles.input}
          placeholder="Enter OTP you received"
        />
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="New password"
          style={styles.input}
          placeholder="Enter new password"
        />
        <TextInput
          activeUnderlineColor={Colors.primary}
          underlineColor={Colors.primary}
          label="Confirm new password"
          style={styles.input}
          placeholder="Confirm new password"
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonlabel}>Proceed Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  gif: {
    height: height * (30 / 100),
    width: width * (30 / 100),
    marginBottom: 20,
  },
  input: {
    width: width - 35,
    backgroundColor: Colors.white,
    height: 60,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.primaryShade,
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
});

export default ForegotOtpScreen;
