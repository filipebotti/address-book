import React from 'react'

import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'
import ContactListItem from './ContactListItem'

const ItemSeparator = () => (
  <View style={{ borderBottomColor: '#0000004D', borderBottomWidth: 0.5 }} />
)

const ContactList = ({ contacts, loading, onRefresh }) => (
  <FlatList
    refreshing={loading}
    onRefresh={onRefresh}
    data={contacts}
    ItemSeparatorComponent={ItemSeparator}
    keyExtractor={(item, index) => item.name + index}
    renderItem={({ item }) => <ContactListItem name={item.name} phones={item.phones} />}
  />
)

ContactList.propTypes = {
  contacts: PropTypes.array,
  loading: PropTypes.bool,
  onRefresh: PropTypes.func,
}

ContactList.defaultProps = {
  contacts: [],
  loading: false,
  onRefresh: () => {},
}

export default ContactList
