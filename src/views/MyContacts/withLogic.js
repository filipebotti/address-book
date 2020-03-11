import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import { useContacts } from '../../hooks'
// import ContactManager from 'react-native-my-contacts'


const MyContactsLogic = Component => () => {
  const { contacts, loading, error } = useContacts()

  useEffect(() => {
    if (error) {
      Alert.alert('Erro!', error.message)
    }
  }, [error])

  return (
    <Component
      contacts={contacts}
      isLoading={loading}
    />
  )
}

export default MyContactsLogic
