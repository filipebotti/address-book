import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text } from '@storybook/addon-knobs'
import ContactListItem from './index'

const stories = storiesOf('ContactList', module)
stories.addDecorator(withKnobs)

stories.add('ContactListItem', () => {
  const name = text('Name', 'Filipe Botti')
  const phone = text('Phone', '(85) 99661-4898')

  return (
    <ContactListItem
      name={name}
      phone={phone}
    />
  )
})
