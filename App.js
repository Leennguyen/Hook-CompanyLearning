// import React, {useState} from 'react';
// import {
//   Alert,
//   Button,
//   FlatList,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Switch,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const App = () => {
//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'Xin Chao',
//       des: 'hihihihi',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Nihao',
//       des: 'hahahaha',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Sawadica',
//       des: 'hehehehhehe',
//     },
//   ];
//   const Item = ({des}) => (
//     <View>
//       <Text>{des}</Text>
//     </View>
//   );
//   const renderItem = ({item}) => <Item des={item.des} />;
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => {
//     setIsEnabled(previousState => !previousState);
//   };
//   return (
//     <ScrollView>
//       <View>
//         <View style={styles.containerImg}>
//           <Text>Blackpink in your area</Text>
//         </View>
//         <View style={styles.containerImg}>
//           <Image
//             source={{
//               uri: 'https://znews-photo.zingcdn.me/w660/Uploaded/ofh_btgazsox/2022_06_15/blackpink_becomes_first_girl_group_in_the_world_to_exceed_20m_spotify_followers_also_the_highest_among_girl_groups.jpg',
//             }}
//             style={styles.img}
//           />
//         </View>
//         <TextInput style={styles.input} placeholder="Type something" />
//         <TouchableOpacity>
//           <View style={styles.press}>
//             <Text style={styles.text}>Press me !</Text>
//           </View>
//         </TouchableOpacity>
//         <Button title="Touch" onPress={() => Alert.alert('Nice to meet you')} />
//         <Switch
//           trackColor={{false: 'red', true: 'green'}}
//           thumbColor={isEnabled ? 'green' : 'red'}
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//         />
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   containerImg: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     paddingVertical: 5,
//   },
//   press: {
//     height: 30,
//     width: 80,
//     borderRadius: 5,
//     backgroundColor: 'yellow',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   img: {
//     width: 300,
//     height: 150,
//     resizeMode: 'cover',
//     margin: 0,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
// });
// export default App;
//222222222222222222222222222222222222222222222222222222
// import React, {useState} from 'react';
// import {
//   Alert,
//   Dimensions,
//   FlatList,
//   Image,
//   Modal,
//   Pressable,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const width = Dimensions.get('window').width;
// const EMPTY = [];
// const DATA = [
//   {
//     id: 1,
//     avt: '',
//     userName: 'no name',
//   },
//   {
//     id: 5,
//     avt: 'https://toplist.vn/images/800px/bai-van-ta-con-ga-trong-hay-nhat-209461.jpg',
//     userName: 'con gà gáy',
//   },
//   {
//     id: 6,
//     avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
//     userName: 'có con chim vành khuyên',
//   },
//   {
//     id: 7,
//     avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
//     userName: '2 con thằn lằn con',
//   },
//   {
//     id: 8,
//     avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
//     userName: 'một con vịt',
//   },
//   {
//     id: 9,
//     avt: '',
//     userName: 'con gà gáy',
//   },
//   {
//     id: 10,
//     avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
//     userName: 'có con chim vành khuyên',
//   },
//   {
//     id: 11,
//     avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
//     userName: '2 con thằn lằn con',
//   },
//   {
//     id: 12,
//     avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
//     userName: 'một con vịt',
//   },
//   {
//     id: 13,
//     avt: '',
//     userName: '2 con thằn lằn con',
//   },
//   {
//     id: 14,
//     avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
//     userName: 'một con vịt',
//   },
// ];

// const App = () => {
//   const Btn = () => (
//     <View style={styles.containBtn}>
//       <TouchableOpacity>
//         <Text style={styles.btnC}>Confirm</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => setModalVisible(true)}>
//         <Text style={styles.btnD}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
//   const Item = ({avt, userName}) => (
//     <View style={styles.row}>
//       {avt !== '' ? (
//         <Image
//           source={{
//             uri: avt,
//           }}
//           style={styles.img}
//         />
//       ) : (
//         <Image
//           source={{
//             uri: 'https://img.pikbest.com/png-images/qianku/default-avatar_2404265.png!w700wp',
//           }}
//           style={styles.img}
//         />
//       )}

//       <View style={styles.right}>
//         <Text style={styles.name}>{userName}</Text>
//         <Btn />
//       </View>
//     </View>
//   );
//   const renderItem = ({item}) => (
//     <Item avt={item.avt} userName={item.userName} />
//   );
//   const [data, setData] = React.useState(DATA);
//   const deleteInvitation = id => {
//     let arr = data.filter(function (item) {
//       return item.id !== id;
//     });
//     console.log(id);
//     setData(arr);
//   };
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         stickyHeaderIndices={[0]}
//         contentContainerStyle={
//           EMPTY.length ? styles.wrapper : styles.containText
//         }
//         ListEmptyComponent={
//           <View style={styles.containText}>
//             <Text
//               style={{textAlign: 'center', color: 'red', fontWeight: '700'}}>
//               There no data at all
//             </Text>
//           </View>
//         }
//         ListHeaderComponent={
//           <View style={{backgroundColor: 'white'}}>
//             <Text style={styles.title}>Friends</Text>
//             <View style={styles.btbHeader}>
//               <Text style={styles.btn}>Suggestions</Text>
//               <Text style={styles.btn}>Your Friends</Text>
//             </View>
//             <View style={styles.botHeader}>
//               <Text style={styles.title}>Friend Requests</Text>
//               <Text style={{color: 'blue'}}>See all</Text>
//             </View>
//           </View>
//         }
//       />

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>
//               Are u sure to delete this invitation
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//                 width: width - 100,
//               }}>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text style={styles.textStyle}>Cancel</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text
//                   style={styles.textStyle}
//                   onPress={() => deleteInvitation()}>
//                   Agree
//                 </Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   containText: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   img: {
//     height: 70,
//     width: 70,
//     borderRadius: 100,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   name: {
//     fontWeight: '700',
//     paddingVertical: 2,
//     color: 'black',
//     fontSize: 16,
//   },
//   containBtn: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: width - 105,
//   },
//   btn: {
//     width: 100,
//     height: 35,
//     borderRadius: 20,
//     backgroundColor: 'lightgray',
//     color: 'black',
//     textAlign: 'center',
//     lineHeight: 33,
//   },
//   btnC: {
//     fontWeight: '700',
//     width: 140,
//     height: 40,
//     borderRadius: 5,
//     backgroundColor: 'blue',
//     color: 'white',
//     textAlign: 'center',
//     lineHeight: 38,
//   },
//   btnD: {
//     fontWeight: '700',
//     width: 140,
//     height: 40,
//     borderRadius: 5,
//     backgroundColor: 'lightgray',
//     textAlign: 'center',
//     lineHeight: 38,
//     color: 'black',
//   },
//   right: {
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: '500',
//     color: 'black',
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   botHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: width - 10,
//   },
//   btbHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: width - 180,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     width: 50,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//     fontWeight: '700',
//     fontSize: 18,
//     color: 'red',
//   },
// });
// export default App;
//33333333333333333333333333333333333333333333333333333333333333
// import React, {useRef} from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   Animated,
//   Button,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// const App = () => {
//   const fadeAnimated = useRef(new Animated.Value(0)).current;
//   const Fadin = () => {
//     Animated.timing(fadeAnimated, {
//       toValue: 1,
//       duration: 5000,
//     }).start();
//   };
//   const Fadout = () => {
//     Animated.timing(fadeAnimated, {
//       toValue: 0,
//       duration: 3000,
//     }).start();
//   };
//   const createButtonAlert = () => {
//     Alert.alert('Alert Title', 'Marry me?', [
//       {
//         text: 'Ask me later',
//         onPress: () => console.log('Ask me later'),
//       },
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressd'),
//         style: 'cancel',
//       },
//       {text: 'OK', onPress: () => console.log('OK Press'), styles: 'OK'},
//     ]);
//   };
//   return (
//     <View>
//       <ActivityIndicator size={'large'} color={'red'} />
//       <Button title={'Hi'} onPress={createButtonAlert} />
//       <Animated.View style={[styles.fadingContainer, {opacity: fadeAnimated}]}>
//         <Text style={{fontSize: 30, color: 'black'}}>HIIIII</Text>
//       </Animated.View>
//       <Button title="In" onPress={Fadin} />
//       <Button title="Out" onPress={Fadout} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
// });
// export default App;
import React from 'react';
import {SafeAreaView} from 'react-native';
import Count from './src/useState';
const DATA = [
  {
    id: 1,
    avt: '',
    userName: 'no name',
  },
  {
    id: 5,
    avt: 'https://toplist.vn/images/800px/bai-van-ta-con-ga-trong-hay-nhat-209461.jpg',
    userName: 'con gà gáy',
  },
  {
    id: 6,
    avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    userName: 'có con chim vành khuyên',
  },
  {
    id: 7,
    avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    userName: '2 con thằn lằn con',
  },
  {
    id: 8,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
  {
    id: 9,
    avt: '',
    userName: 'con gà gáy',
  },
  {
    id: 10,
    avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    userName: 'có con chim vành khuyên',
  },
  {
    id: 11,
    avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    userName: '2 con thằn lằn con',
  },
  {
    id: 12,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
  {
    id: 13,
    avt: '',
    userName: '2 con thằn lằn con',
  },
  {
    id: 14,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
];
const App = () => {
  // const [data, setData] = useState(0);
  // const [person, setPerson] = useState(DATA);
  // useEffect(() => {
  //   console.log(DATA);
  // }, []);
  return (
    <SafeAreaView>
      <Count />
    </SafeAreaView>
  );
};
export default App;
