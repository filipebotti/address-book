import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'
import ContactListItem from './ContactListItem'

const ItemSeparator = () => (
  <View style={{ borderBottomColor: '#0000004D', borderBottomWidth: 0.5 }} />
)

const ContactList = ({ contacts }) => (
  <FlatList
    data={contacts}
    ItemSeparatorComponent={ItemSeparator}
    keyExtractor={(item, index) => item.name + index}
    renderItem={({ item }) => <ContactListItem name={item.name} phone={item.phone} />}
  />
)

ContactList.propTypes = {
  contacts: PropTypes.array,
}

ContactList.defaultProps = {
  contacts: [],
}

export default ContactList
