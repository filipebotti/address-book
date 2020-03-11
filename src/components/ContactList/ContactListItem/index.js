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

const ContactListItem = memo(({ name, phones }) => (
  <Wrapper>
    <Name>{name}</Name>
    {
      phones.map((phone) => (
        <Phone key={phone.label + phone.value}>
          {phone.label && <Phone>{`${phone.label} - `}</Phone>}
          <Phone>{phone.value}</Phone>
        </Phone>
      ))
    }
  </Wrapper>
), (prevProps, nextProps) => (
  prevProps.name === nextProps.name && prevProps.phones === nextProps.phones
))

ContactListItem.propTypes = {
  name: PropTypes.string,
  phones: PropTypes.array,
}

ContactListItem.defaultProps = {
  name: '',
  phones: [],
}

export default ContactListItem
