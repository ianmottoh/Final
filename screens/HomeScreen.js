import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>   
          <View>
               <Text style={styles.title}>Katalog Laptop 2019</Text>
               <Button
                    title="Buka Katalog"
                    
                    type="outline"
                    color=""
                    onPress={() => navigation.navigate('Image')}
               />

          </View>
       </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
     title: {
          textAlign: 'center',
          color: 'white',
          fontSize: 35,
          marginVertical: 100
     }
   });