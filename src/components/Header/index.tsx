import { Container } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const contador = useSelector((estado: RootReducer) => estado.contacts.itens)

  return <Container>Lista de contatos - ( total: {contador.length} )</Container>
}

export default Header
