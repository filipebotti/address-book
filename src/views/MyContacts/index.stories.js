import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { MyContactsViews } from './index'

const stories = storiesOf('Views', module)
stories.addDecorator(withKnobs)

stories.add('MyContacts', () => {
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
    <MyContactsViews
      contacts={contacts}
    />
  )
})
