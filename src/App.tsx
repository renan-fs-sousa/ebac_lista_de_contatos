import { Provider } from 'react-redux'

import ContactList from './containers/ContactList'
import Form from './components/Form'
import Header from './components/Header'
import store from './store'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Form />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
