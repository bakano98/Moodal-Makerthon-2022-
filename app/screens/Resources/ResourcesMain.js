import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const ResourcesMain = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text>Resources</Text>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default ResourcesMain;