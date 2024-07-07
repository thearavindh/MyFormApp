import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserForm from './src/UserForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
