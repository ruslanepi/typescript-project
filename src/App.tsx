import React from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Ruslan',
      email: '123@mail.ru',
      address: { city: 'kazan', street: 'Zur Uram', zipcode: '123123' },
    },
    {
      id: 2,
      name: 'Sveta',
      email: '1234@mail.ru',
      address: { city: 'kazan', street: 'Zur Uram', zipcode: '123123' },
    },
  ]

  return (
    <div>
      <Card
        onClick={(num) => console.log('log!', num)}
        variant={CardVariant.outlined}
        height='200px'
        width='200px'
      >
        <button>click</button>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App
