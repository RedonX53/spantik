import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../assets/colors/logo';

const {width, height} = Dimensions.get('screen');

const ItemCard = ({item, properties, index}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topItemsCard} key={index}>
      {/* Image Section */}
      <View style={styles.rightCardSection}>
        <View style={styles.topItemThumbnail}>
          <Image source={{uri: item.image}} style={styles.thumbnailStyle} />
        </View>
      </View>
      {/* Info Section */}
      <View style={styles.centerCardSection}>
        <View style={styles.topCenter}></View>
        {/* Title,Quantity,price Section */}
        <TouchableOpacity
          style={styles.middleCenter}
          onPress={() => {
            if (properties.nav_behaviour == 'navigate') {
              navigation.navigate('ProductPage', item);
            } else if (properties.nav_behaviour == 'replace') {
              navigation.replace('ProductPage', item);
            }
          }}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 14}}>{item.unit}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Rs.{item.price}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Button Container */}
        <View style={styles.bottomCenter}>
          <TouchableOpacity
            style={styles.addToCart}
            onPress={async () => {
              item.quantity = 1;
              item.item_total = item.price * item.quantity;
              item.user_id = 53102;
              await properties.addToCart(item);
            }}>
            <Text style={{color: 'white', fontSize: 14}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Forward Icon Section  */}
      <TouchableOpacity style={styles.leftCardSetion}>
        <Ionicons name="chevron-forward-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topProductsContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#333',
    borderWidth: 0.2,
  },

  topProductsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: 'black',
    paddingVertical: 4,
  },

  topProductsItemContainer: {
    flex: 1,
    borderWidth: 0.6,
  },

  topItemsCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 6,
    height: height * (23 / 100),
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  rightCardSection: {
    flex: 1,
  },
  topItemThumbnail: {
    flex: 1,
    margin: 15,
    borderRadius: 16,
    elevation: 1,
  },
  thumbnailStyle: {
    flex: 1,
    borderRadius: 16,
  },
  centerCardSection: {
    flex: 1.2,
  },
  topCenter: {
    flex: 0.8,
  },
  middleCenter: {
    flex: 2,
  },
  titleContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  bottomCenter: {
    flex: 0.8,
    alignItems: 'flex-end',
  },
  leftCardSetion: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCart: {
    flex: 1,
    backgroundColor: '#28b463',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 100,
    borderRadius: 5,
  },
});

export default ItemCard;
