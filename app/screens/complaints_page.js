import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');

const renderList = ({item, index}) => {
  return (
    <View style={styles.listItem} key={index}>
      <View style={styles.leadingIcon}>
        <Ionicons name="bug" size={20} color="#333" />
      </View>
      <TouchableOpacity style={styles.questionsContainer}>
        <Text style={styles.questions}>{item}</Text>
      </TouchableOpacity>
      <View style={styles.postIcon}>
        <Ionicons name="arrow-forward-circle" size={18} color="#333" />
      </View>
    </View>
  );
};

const data = [
  'fkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljdfkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
  'fkjsjdfasjdasdkljaklsdjaskljd',
];

const ComplaintPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderList}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  flatList: {
    flex: 1,
    width: width,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    elevation: 4,
    shadowColor: '#333',
  },
  questionsContainer: {
    flex: 6,
    marginLeft: 3,
  },
  questions: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  leadingIcon: {
    flex: 0.5,
    justifyContent: 'center',
  },
  postIcon: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
});

export default ComplaintPage;
