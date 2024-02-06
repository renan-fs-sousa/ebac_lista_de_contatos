import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { add } from '../../store/reducers/contacts'

import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    //expressão para aceitar apenas números
    if (/^\d*$/.test(inputValue)) {
      setTel(inputValue)
    }
  }

  const addContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      add({
        name,
        email,
        tel
      })
    )

    setName('')
    setTel('')
    setEmail('')
  }

  return (
    <S.FormularioContainerMaster>
      <S.Formulario onSubmit={addContact}>
        <S.FormularioContainer>
          <S.FormularioLabel htmlFor="nome">Nome Completo:</S.FormularioLabel>
          <S.FormularioInput
            id="nome"
            value={name}
            onChange={(evento) => setName(evento.target.value)}
            type="text"
            placeholder="Insira seu nome"
            required
          />
        </S.FormularioContainer>
        <S.FormularioContainer>
          <S.FormularioLabel htmlFor="email">E-mail:</S.FormularioLabel>
          <S.FormularioInput
            id="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            placeholder="Insira seu e-mail"
            required
          />
        </S.FormularioContainer>
        <S.FormularioContainer>
          <S.FormularioLabel htmlFor="telefone">Telefone:</S.FormularioLabel>
          <S.FormularioInput
            id="telefone"
            type="tel"
            placeholder="Insira apenas números"
            value={tel}
            onChange={(e) => handleChange(e)}
            required
          />
        </S.FormularioContainer>
        <S.FormularioButton type="submit">Adicionar</S.FormularioButton>
      </S.Formulario>
    </S.FormularioContainerMaster>
  )
}
export default Form
