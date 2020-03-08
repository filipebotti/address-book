import React, { useState } from 'react'

const data = [
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

const MyContactsLogic = Component => () => {
  const [contacts] = useState(data)

  return (
    <Component
      contacts={contacts}
    />
  )
}

export default MyContactsLogic
