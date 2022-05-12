import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {GlobalContext} from '../contexts/global_context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {baseUrl} from '../utilities/api';
const {width, height} = Dimensions.get('screen');

const OrdersPage = () => {
  const {ordersData, fetchOrders} = useContext(GlobalContext);
  const [headerStyle, setHeaderStyle] = useState();
  useEffect(() => {
    console.log(ordersData);
  }, []);

  const closeButtonHanddler = async (id, order) => {
    const res = await axios.patch(baseUrl + `/orders/${id}`, order);
    console.log(res.data);
    await fetchOrders();
  };

  return (
    <ScrollView style={styles.scroll}>
      {/* Order Container */}
      {ordersData &&
        ordersData.map((order, index) => {
          return (
            <View style={styles.orderContainer} key={index}>
              {/* Container Header */}
              <View
                style={
                  order.order_status == 'Active'
                    ? styles.activeHeader
                    : order.order_status == 'Completed'
                    ? styles.completeHeader
                    : order.order_status == 'Canceled'
                    ? styles.canceledHeader
                    : styles.activeHeader
                }>
                <View style={styles.phl}>
                  <Text style={styles.orderId}>Order#</Text>
                  <Text style={styles.orderId}>{order.id}</Text>
                </View>
                <View style={styles.phc}>
                  <Text style={styles.status}>
                    Status: {order.order_status}
                  </Text>
                  <Text style={styles.totalAmount}>
                    Total Bill: Rs.{order.total_bill}
                  </Text>
                </View>
                <View style={styles.phr}>
                  <Ionicons
                    name="close-circle"
                    style={styles.closeButton}
                    onPress={async () => {
                      order.order_status = 'Canceled';
                      await closeButtonHanddler(order.id, order);
                      console.log('Close Button Pressed');
                    }}
                  />
                </View>
              </View>
              {order.order_items.map((item, index) => {
                return (
                  <View style={styles.orderCard} key={index}>
                    <View style={styles.rightCard}>
                      <View style={styles.imageContainer}>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={styles.image}
                        />
                      </View>
                    </View>
                    <View style={styles.leftCard}>
                      <View style={styles.topLeftCard}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                      </View>
                      <View style={styles.bottomLeftCard}>
                        <Text style={styles.total}>
                          Rs.{item.price * item.quantity}
                        </Text>
                        <Text style={styles.quantity}>
                          Rs.{item.price}-(x{item.quantity})
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#e9eaeae1',
  },
  orderContainer: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: height * (30 / 100),
    margin: 10,
    borderRadius: 20,
    elevation: 6,
  },
  activeHeader: {
    backgroundColor: '#52BE80',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  completeHeader: {
    backgroundColor: '#99A3A4',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  canceledHeader: {
    backgroundColor: '#F1948A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    flexDirection: 'row',
  },
  phl: {
    flex: 1.4,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 18,
    color: '#333',
  },
  phc: {
    flex: 3,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  status: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
  },
  phr: {
    flex: 1,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 28,
    color: '#E74C3C',
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#e9eaea',
    height: width * (40 / 100),
    borderRadius: 20,
    margin: 6,
    elevation: 6,
  },
  rightCard: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    marginVertical: 16,
    marginHorizontal: 8,
    elevation: 2,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
  leftCard: {
    flex: 1.5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  topLeftCard: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    color: '#333',
    marginVertical: 6,
  },
  bottomLeftCard: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    color: '#333',
  },
});

export default OrdersPage;
