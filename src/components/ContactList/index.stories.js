import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import ContactList from './index'

const stories = storiesOf('ContactList', module)
stories.addDecorator(withKnobs)

stories.add('List', () => {
  const contacts = [
    {
      name: 'Filipe Botti',
      phone: '(85) 99661-4898',
    },
    {
      name: 'John Cena',
      phone: '(31) 4333-3334',
    },
    {
      name: 'Josefina',
      phone: '(85) 9933-2345',
    },
  ]

  return (
    <ContactList
      contacts={contacts}
    />
  )
})
