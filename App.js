import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
// import Storybook from './storybook'
import MyContacts from './src/views/MyContacts'
import { ContactProvider } from './src/hooks'

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
