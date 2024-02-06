import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Renan Sousa',
      tel: '99999999',
      email: 'renan@gmail.com'
    },
    {
      id: 2,
      name: 'Carol Sousa',
      tel: '99999999',
      email: 'carol@gmail.com'
    },
    {
      id: 3,
      name: 'Meg Sousa',
      tel: '99999999',
      email: 'meg@gmail.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existContact = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (existContact) {
        alert('Este nome de contato já está cadastrado.')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }

        state.itens.push(newContact)
      }
    },
    del: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    }
  }
})

export const { add, del, edit } = contactsSlice.actions

export default contactsSlice.reducer
