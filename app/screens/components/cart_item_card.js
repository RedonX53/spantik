import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Colors from '../../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {baseUrl} from '../../utilities/api';

const {width, height} = Dimensions.get('screen');

const CardItemCard = ({data}) => {
  const [quantity, setQuantity] = useState();

  const updateCartItem = async () => {
    const res = await axios.patch(baseUrl + `/carts/${data.id}`, data);
    console.log('Cart Item Updated');
  };

  useEffect(() => {
    setQuantity(data.quantity);
  }, []);

  return (
    <View style={styles.itemCard}>
      {/* Image Container */}
      <View style={styles.leftPort}>
        <View style={styles.imageContainer}>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>
      </View>
      {/* Description Container */}
      <View style={styles.centerPort}>
        <View style={{flex: 1.8, justifyContent: 'flex-end'}}>
          <Text style={styles.title_sku}>
            {data.name}-({data.unit})
          </Text>
          <Text style={styles.quantity}>
            Rs.{data.price}-(x{quantity})
          </Text>
        </View>
        {/* Controller Container */}
        <View
          style={{
            flex: 1,
          }}>
          <View style={styles.controller}>
            <Ionicons
              name="remove-circle-outline"
              size={24}
              color="#69da98"
              // ! Remove Quantity
              onPress={async () => {
                if (quantity > 1) {
                  data.quantity = quantity - 1;
                  data.item_total = data.price * data.quantity;
                  setQuantity(data.quantity);
                  await updateCartItem();
                  await data.getCart();
                } else {
                  console.log('Need to have atleast one product');
                }
              }}
            />
            <Text style={{fontSize: 16}}>{quantity}</Text>
            <Ionicons
              name="add-circle-outline"
              size={24}
              color="#69da98"
              // ! Add Quantity
              onPress={async () => {
                data.quantity = quantity + 1;
                data.item_total = data.price * data.quantity;
                setQuantity(data.quantity);
                await updateCartItem();
                await data.getCart();
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.rightPort}>
        <Ionicons
          name="close-circle"
          size={28}
          style={{marginLeft: 20, marginBottom: 20}}
          color="#cd6155"
          onPress={async () => {
            await data.cartUpdate(data.id);
          }}
        />
        <Text style={{marginBottom: 6, fontSize: 16}}>
          Rs.{data.price * quantity}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    height: height * (20 / 100),
    backgroundColor: Colors.white,
    margin: 12,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#333',
    flexDirection: 'row',
    padding: 3,
  },
  leftPort: {
    flex: 1.2,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  centerPort: {
    flex: 1.3,
  },
  rightPort: {
    flex: 0.7,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    backgroundColor: 'brown',
    borderRadius: 15,
    marginVertical: 16,
    marginHorizontal: 2,
    elevation: 1,
  },

  image: {
    flex: 1,
    borderRadius: 15,
  },
  title_sku: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontStyle: 'italic',
  },
  controller: {
    flex: 1,
    borderWidth: 0.8,
    margin: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#69da98',
  },
});

export default CardItemCard;
