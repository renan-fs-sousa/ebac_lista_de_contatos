import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;

        color: #eeee;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
    body {
      background-color:#181818;
    }
`
export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid chartreuse;
  padding: 30px;
  border-radius: 10px;
`

export default EstiloGlobal
