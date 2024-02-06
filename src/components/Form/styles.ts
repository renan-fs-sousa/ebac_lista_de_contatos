import styled from 'styled-components'

export const FormularioContainerMaster = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: #444;
  border-radius: 8px;
  display: flex;
`
export const Formulario = styled.form`
  width: 100%;
  text-align: end;
`
export const FormularioContainer = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`
export const FormularioInput = styled.input`
  padding: 5px;
  width: 70%;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #444;
  font-size: 16px;
`

export const FormularioLabel = styled.label`
  color: #eeee;
`

export const FormularioButton = styled.button`
    margin-top: 10px;
    background-color: lawngreen;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 16px;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;
    width: 30%;

  &:hover {
    background-color: #444;
    border: 1px solid lawngreen;
    color: lawngreen;
  
`
