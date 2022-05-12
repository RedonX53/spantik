import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Colors from '../../assets/colors/logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState, useEffect, useContext} from 'react';
import CartItemCard from './components/cart_item_card';
import axios from 'axios';
import {baseUrl} from '../utilities/api';
import {GlobalContext} from '../contexts/global_context';

const {width, height} = Dimensions.get('screen');

const Cart = () => {
  const [data, setData] = useState();
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [cartItemIds, setCartItemIds] = useState([]);
  const {ordersData, fetchOrders} = useContext(GlobalContext);
  const toggleTrigger = () => {
    if (toggle == true) {
      setToggle(false);
    } else if (toggle == false) {
      setToggle(true);
    }
  };

  const cartUpdate = async id => {
    const res = await axios.delete(baseUrl + `/carts/${id}`);
    toggleTrigger();
  };

  const placeOrder = async order => {
    const res = await axios.post(baseUrl + `/orders`, order);
  };

  const getCart = async () => {
    const res = await axios.get(baseUrl + '/carts');
    setData(res.data);
    console.log('Fetched Cart');
    const ids = res.data.map(e => e.id);
    setCartItemIds(ids);
    const tp = res.data
      .map(e => {
        return e.item_total;
      })
      .reduce((pre, cru) => pre + cru, 0);
    setTotal(tp);
  };

  const proceedOrder = async () => {
    if (data.length != 0) {
      const order = {
        user_id: 53102,
        order_status: 'Active',
        total_bill: total,
        order_items: data,
      };
      await placeOrder(order);
      cartItemIds.forEach(async id => {
        await axios.delete(baseUrl + `/carts/${id}`).then(() => {
          console.log(`Cart item with id :${id} deleted.`);
        });
      });
      await getCart();
    } else {
      console.log("There's no item in cart");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(baseUrl + '/carts');
      setData(res.data);
      await getCart();
    }
    fetchData();
  }, [toggle]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#f5f5f5'}}>
      <View style={styles.container}>
        {/* Titles */}
        <View style={styles.yourItems}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#333'}}>
            Your items
          </Text>
        </View>
        {/* Item Container */}
        <View style={styles.itemsContainer}>
          {data &&
            data.map((item, index) => {
              return (
                <CartItemCard
                  data={{...item, getCart, cartUpdate}}
                  key={index}
                />
              );
            })}
        </View>
        {/* Promo Card */}
        <View style={styles.promoCard}>
          {/* Promo Header */}
          <View style={styles.promoHeader}>
            <View style={styles.leadingContainer}>
              <Ionicons name="barcode-outline" size={26} color="#999999" />
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Put promo code"
                style={styles.promoInput}
              />
            </View>
            <View style={styles.secondaryContainer}>
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                size={26}
                color="black"
              />
            </View>
          </View>
          {/* Promo Footer */}
          <View style={styles.promoFooter}>
            <Text style={styles.promoFooterText}>Sub Total</Text>
            <Text style={styles.promoFooterText}>Rs.{total}</Text>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>Rs.{total}</Text>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={proceedOrder}>
          <Text style={styles.buttonTitle}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yourItems: {
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#333',
    marginBottom: 10,
  },
  itemsContainer: {
    flex: 1,
    minHeight: height * (40 / 100),
    borderColor: '#333',
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginBottom: 30,
  },

  promoCard: {
    height: height * (16 / 100),
    backgroundColor: Colors.white,
    margin: 12,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#333',
  },
  promoHeader: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
  },
  leadingContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  secondaryContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoInput: {
    marginVertical: 8,
    color: 'black',
    fontSize: 16,
  },
  promoFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  promoFooterText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalContainer: {
    height: width * (16 / 100),
    backgroundColor: Colors.white,
    margin: 12,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  totalText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalPrice: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  payButton: {
    height: width * (14 / 100),
    backgroundColor: Colors.primaryShade,
    margin: 12,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#333',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Cart;
