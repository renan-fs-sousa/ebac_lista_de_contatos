import { useDispatch } from 'react-redux'

import * as S from './styles'
import { del, edit } from '../../store/reducers/contacts'
import { useEffect, useState } from 'react'

type Props = {
  id: number
  name: string
  email: string
  tel: string
}
const Contact = ({
  id,
  name: originalName,
  email: originalEmail,
  tel: originalTel
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalTel.length > 0) {
      setTel(originalTel)
    }
  }, [originalName, originalEmail, originalTel])

  function cancelEdit() {
    setName(originalName)
    setEmail(originalEmail)
    setTel(originalTel)
    setIsEditing(false)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    //expressão para aceitar apenas números
    if (/^\d*$/.test(inputValue)) {
      setTel(inputValue)
    }
  }
  const dispatch = useDispatch()

  return (
    <S.FormularioContainerMaster>
      <S.FormularioContainer>
        <S.ComponentesContainer>
          <S.FormularioLabel htmlFor="nome">Nome Completo:</S.FormularioLabel>
          {!isEditing ? (
            <S.FormularioInput
              id="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!isEditing}
              type="text"
              required
            />
          ) : (
            <S.FormularioInputB
              id="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!isEditing}
              type="text"
              placeholder="Insira seu nome"
              required
              ref={(input) => input && input.focus()}
            />
          )}
        </S.ComponentesContainer>
        <S.ComponentesContainer>
          <S.FormularioLabel htmlFor="email">E-mail:</S.FormularioLabel>
          {!isEditing ? (
            <S.FormularioInput
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!isEditing}
              type="email"
              required
            />
          ) : (
            <S.FormularioInputB
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!isEditing}
              type="email"
              placeholder="Insira seu e-mail"
              required
            />
          )}
        </S.ComponentesContainer>
        <S.ComponentesContainer>
          <S.FormularioLabel htmlFor="telefone">Telefone:</S.FormularioLabel>
          {!isEditing ? (
            <S.FormularioInput
              id="telefone"
              type="tel"
              placeholder="Informe apenas números"
              value={tel}
              onChange={(e) => handleChange(e)}
              readOnly={!isEditing}
              required
            />
          ) : (
            <S.FormularioInputB
              id="telefone"
              type="tel"
              placeholder="Insira apenas números"
              value={tel}
              onChange={(e) => handleChange(e)}
              readOnly={!isEditing}
              required
            />
          )}
        </S.ComponentesContainer>
        <>
          {isEditing ? (
            <>
              <S.BotaoSalvar
                onClick={() => {
                  if (name && email && tel) {
                    dispatch(edit({ id, name, tel, email }))
                    setIsEditing(false)
                  } else {
                    alert('Preencha todos os campos antes de salvar.')
                  }
                }}
              >
                Salvar
              </S.BotaoSalvar>
              <S.BotaoCancelarEDeletar onClick={cancelEdit}>
                Cancelar
              </S.BotaoCancelarEDeletar>
            </>
          ) : (
            <>
              <S.BotaoEdit onClick={() => setIsEditing(true)}>
                Editar
              </S.BotaoEdit>
              <S.BotaoCancelarEDeletar onClick={() => dispatch(del(id))}>
                Remover
              </S.BotaoCancelarEDeletar>
            </>
          )}
        </>
      </S.FormularioContainer>
    </S.FormularioContainerMaster>
  )
}

export default Contact
