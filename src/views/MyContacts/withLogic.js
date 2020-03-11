import React, { useEffect } from 'react'
import { Alert } from 'react-native';
import { useContacts } from 'react-native-my-contacts'


const MyContactsLogic = Component => () => {
  const { contacts, loading, error, refetchContacts } = useContacts()

  useEffect(() => {
    if (error) {
      Alert.alert('Erro!', error.message)
    }
  }, [error])

  return (
    <Component
      contacts={contacts}
      isLoading={loading}
      onRefetchContacts={refetchContacts}
    />
  )
}

export default MyContactsLogic
