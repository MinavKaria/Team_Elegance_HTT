import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const Profile = () => {

    const handleImagePress = (url) => {
        Linking.openURL(url);
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Zorko</Text>
            <Text style={styles.p}>ZORKO is an inspirational Entrepreneurial journey of Nahar Brothers ( Anand Nahar and Amrit Nahar) who dared to dream and execute big during the COVID-19 Pandemic time. When Youths of their age were busy doing Netflix and chill during the lockdown, Nahar brothers decided to utilize this time for a noble cause that touched more than 1 million lives. Both the brothers are engineering graduate with no formal education in business. Anand Nahar is also a SEBI Registered ® Research Analyst while Amrit Nahar has done his masters in Anthropology. There are only 760 such Registered ® Analyst in India 🇮🇳 .</Text>

        <View style={styles.image}>
            <TouchableOpacity onPress={() => handleImagePress('https://www.instagram.com/zorkobrand/')}>
      <Image
        source={require('../assets/images/icons8-instagram-48.png')}
        style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePress('https://www.facebook.com/ZorkoBrand/')}>
      <Image
        source={require('../assets/images/icons8-facebook-50.png')}
        style={styles.image}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImagePress('https://zorko.in/')}>
      <Image
        source={require('../assets/images/icons8-personal-hotspot-80.png')}
        style={styles.image}
      />
      </TouchableOpacity>
    </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between",
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'rgb(190, 71, 20)'
    },
    p:{
        fontSize:19,
        textAlign:'center',
        fontFamily:'Roboto',
        color:'rgb(190, 71, 20)'
    },
    image:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
});

export default Profile;
