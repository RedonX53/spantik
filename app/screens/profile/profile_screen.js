import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../assets/colors/logo';
import {Switch} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="image-outline" style={styles.iconImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.name}>Muhammad Ahmad</Text>
          <Text style={styles.userName}>muhammad.ahmad.53</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="settings-outline" style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Option Container */}
      <View style={styles.optionContainer}>
        <View style={styles.options}>
          <View style={styles.optionItem}>
            <Ionicons
              name="albums"
              size={30}
              style={styles.optionIcon}
              onPress={() => {
                navigation.navigate('OrderPage');
              }}
            />
          </View>
          <Text style={styles.optionTitle}>My Orders</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.optionItem}>
            <Ionicons
              name="cash"
              size={30}
              style={styles.optionIcon}
              onPress={() => {
                navigation.navigate('PromosPage');
              }}
            />
          </View>
          <Text style={styles.optionTitle}>Promos</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.optionItem}>
            <Ionicons
              name="help-circle"
              size={30}
              style={styles.optionIcon}
              onPress={() => {
                navigation.navigate('HelpCenter');
              }}
            />
          </View>
          <Text style={styles.optionTitle}>Help</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.optionItem}>
            <Ionicons
              name="chatbubbles"
              size={30}
              style={styles.optionIcon}
              onPress={() => {
                navigation.navigate('ComplaintsPage');
              }}
            />
          </View>
          <Text style={styles.optionTitle}>Complaints</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.optionItem}>
            <Ionicons name="call" size={30} style={styles.optionIcon} />
          </View>
          <Text style={styles.optionTitle}>Call Us</Text>
        </View>
      </View>
      {/* Terms & Condition Component */}
      <View style={styles.termsContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.languageTitle}>
            <Text style={styles.l1}>English</Text>
            <Text style={styles.l}>/</Text>
            <Text style={styles.l2}>Urdu</Text>
          </View>

          <Switch
            value={true}
            onValueChange={() => {}}
            style={styles.switchStyle}
            color={Colors.primary}
          />
        </View>

        <View style={styles.divider}></View>

        <View style={styles.termContainer}>
          <Text style={styles.termsConditions}>Terms&Conditions</Text>
        </View>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Ionicons name="log-out" size={28} />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    height: height * (23 / 100),
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 2,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    color: 'gray',
    fontSize: 100,
  },
  centerContainer: {
    flex: 2.3,
    margin: 2,
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    color: 'white',
    fontSize: 12,
  },
  rightContainer: {
    flex: 1.2,
    margin: 2,
    alignItems: 'flex-end',
  },
  settingsIcon: {
    color: 'white',
    fontSize: 22,
    margin: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    height: height * (10 / 100),
    padding: 4,
  },
  options: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
  },
  optionItem: {
    backgroundColor: '#e8d5da',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    height: width * (15 / 100),
    width: width * (15 / 100),
    elevation: 4,
    shadowColor: '#333',
  },
  optionIcon: {
    color: Colors.primaryShade,
  },
  optionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#474747',
  },
  termsContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    width: width * (90 / 100),
    height: height * (15 / 100),
    alignSelf: 'center',
    marginVertical: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 15,
  },
  languageTitle: {
    flexDirection: 'row',
  },
  switchStyle: {
    color: Colors.primaryShade,
  },
  titleContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    borderColor: '#333',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    flex: 0.1,
  },
  termContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  termsConditions: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  l1: {
    fontWeight: 'bold',
    color: Colors.blur,
  },
  l2: {
    fontWeight: 'bold',
  },
  logoutContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  logoutButton: {
    backgroundColor: '#e6e6e6',
    height: height * (6 / 100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
