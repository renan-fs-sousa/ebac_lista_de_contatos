import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contact from '../../components/Contact'
import { MainContainer, DivContainer, FormatLi } from './styles'

const ContactFormatList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <MainContainer>
      <DivContainer>
        <ul>
          {itens.map(
            (contact: {
              tel: string
              email: string
              id: number
              name: string
            }) => (
              <FormatLi key={contact.name}>
                <Contact
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  tel={contact.tel}
                />
              </FormatLi>
            )
          )}
        </ul>
      </DivContainer>
    </MainContainer>
  )
}

export default ContactFormatList
