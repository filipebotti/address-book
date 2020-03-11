import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ContactProvider } from 'react-native-my-contacts'
// import Storybook from './storybook'
import MyContacts from './src/views/MyContacts'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <ContactProvider>
        <MyContacts />
      </ContactProvider>
    </SafeAreaView>
  </>
);

export default App;
