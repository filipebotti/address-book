import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withLogic from './withLogic'
import { ContactList } from '../../components'

const Wrapper = styled.View`
  flex: 1
`

const Header = styled.View`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  border-bottom-width: 0.5px;
  border-bottom-color: #0000004D;
`

const Title = styled.Text`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
`


const MyContactsViews = ({ contacts, isLoading, onRefetchContacts }) => (
  <Wrapper>
    <Header>
      <Title>Meus Contatos</Title>
    </Header>
    <ContactList
      contacts={contacts}
      loading={isLoading}
      onRefresh={onRefetchContacts}
    />
  </Wrapper>
)

MyContactsViews.propTypes = {
  contacts: PropTypes.array,
  isLoading: PropTypes.bool,
  onRefetchContacts: PropTypes.func,
}

MyContactsViews.defaultProps = {
  contacts: [],
  isLoading: false,
  onRefetchContacts: () => {},
}

export { MyContactsViews }
export default withLogic(MyContactsViews)
