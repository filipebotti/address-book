import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.View`
  paddingVertical: 15px;
  paddingHorizontal: 20px;  
`

const Name = styled.Text`
  font-family: 'Roboto'
  font-size: 14px;
  font-weight: 500;
`

const Phone = styled.Text`
  font-family: 'Roboto'
  font-size: 12px;
`

const ContactListItem = memo(({ name, phone }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Phone>{phone}</Phone>
  </Wrapper>
), (prevProps, nextProps) => (
  prevProps.name === nextProps.name && prevProps.phone === nextProps.phone
))

ContactListItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
}

ContactListItem.defaultProps = {
  name: '',
  phone: '',
}

export default ContactListItem
