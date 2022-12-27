import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
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
const Count = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const getData = () => {
    axios
      .get('https://6392a026b750c8d178e1ef17.mockapi.io/categories')
      .then(response => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getData();
    console.log('hii');
  });
  console.log(data);
  return (
    <View>
      <Text>Your: {count}</Text>
      <Button title="Click" onPress={() => setCount(count + 1)} />
      <Button title="reset" onPress={() => setCount(0)} />
      {/* <Button title="getData" onPress={() => getData()} /> */}
    </View>
  );
};
export default Count;
