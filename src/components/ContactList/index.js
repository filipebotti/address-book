import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import ContactListItem from './ContactListItem'

const ItemSeparator = styled.View`
  border-bottom-color: #0000004D;
  border-bottom-width: 0.5px;
`
const EmptyListWrapper = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`
const EmptyListText = styled.Text`
  font-family: 'Roboto'
  font-size: 16px;
`

const EmptyList = () => (
  <EmptyListWrapper>
    <EmptyListText>Puxe para baixo para atualizar</EmptyListText>
  </EmptyListWrapper>
)

const ContactList = ({ contacts, loading, onRefresh }) => (
  <FlatList
    refreshing={loading}
    onRefresh={onRefresh}
    data={contacts}
    ItemSeparatorComponent={ItemSeparator}
    keyExtractor={(item, index) => item.name + index}
    renderItem={({ item }) => <ContactListItem name={item.name} phones={item.phones} />}
    ListEmptyComponent={EmptyList}
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
