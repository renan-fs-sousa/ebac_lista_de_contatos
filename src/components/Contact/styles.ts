import styled from 'styled-components'

export const BotaoCancelarEDeletar = styled.button`
  margin: 10px 0;
  width: 30%;
  height: 40px;
  padding: 10px;
  margin-left: 6px;
  border-radius: 5px;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  background-color: indianred;
  &:hover {
    background-color: #444;
    color: indianred;
    border: 1px solid indianred;
  }
`
export const BotaoEdit = styled.button`
  margin: 10px 0;
  width: 30%;
  height: 40px;
  padding: 10px;
  margin-left: 6px;
  border-radius: 5px;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.5s ease;

  background-color: khaki;
  &:hover {
    background-color: #444;
    color: khaki;
    border: 1px solid khaki;
  }
`

export const BotaoSalvar = styled.button`
  margin: 10px 0;
  width: 30%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  background-color: cornflowerblue;
  &:hover {
    background-color: #444;
    border: 1px solid cornflowerblue;
    color: cornflowerblue;
  }
`

export const FormularioContainerMaster = styled.div`
  margin-top: 10px;
  background-color: #444;
  border-radius: 8px;
  display: flex;
`

export const FormularioContainer = styled.div`
  width: 100%;
  text-align: end;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ComponentesContainer = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormularioInput = styled.input`
  padding: 5px;
  width: 70%;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: #eee;
  font-size: 16px;
`

export const FormularioInputB = styled.input`
  padding: 5px;
  width: 70%;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #444;
  font-size: 16px;
`

export const FormularioLabel = styled.label`
  color: #eee;
`
