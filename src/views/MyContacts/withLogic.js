import React, { useState, useEffect } from 'react'
import { NativeModules, Alert } from 'react-native';
// import ContactManager from 'react-native-my-contacts'


const MyContactsLogic = Component => () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function getContacts() {
      try {
        const resp = await NativeModules.ContactManager.getContacts()
        setContacts(resp)
      } catch (error) {
        const message = error.code === 'UNAUTHORIZED' ? 'Você precisa permitir o acesso aos contatos.' : 'Erro ao tentar mostrar os conatos'
        Alert.alert('Erro!', message)
      }
    }

    getContacts()
  }, [])

  return (
    <Component
      contacts={contacts}
    />
  )
}

export default MyContactsLogic
