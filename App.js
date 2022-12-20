import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <ScrollView>
      <View>
        <Text>Blackpink in your area</Text>
        <Image
          source={{
            uri: 'https://znews-photo.zingcdn.me/w660/Uploaded/ofh_btgazsox/2022_06_15/blackpink_becomes_first_girl_group_in_the_world_to_exceed_20m_spotify_followers_also_the_highest_among_girl_groups.jpg',
          }}
          style={styles.img}
        />
        <TextInput style={styles.input} placeholder="Type something" />
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text}>Press me !</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  btn: {
    height: 30,
    width: 80,
    borderRadius: 5,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    margin: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default ViewBoxesWithColorAndText;
