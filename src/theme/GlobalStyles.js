import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
     
    }

    #root{
        height: 100svh;
    }    
  
`

export const lightTheme ={
    rootBg:'#F8F8F8',
    bodyBg: '#FFFFFF',
    inputBg:'#EBF1EF',
    buttonBg:"#EBF1EF",
    cardBg: "#FFFFFF",
    theme:"#292828",
    body: '#FFFFFF',
    text: '#4E4E4E',
    buttonText:"#135846",
    subText: '#6E6E6E',
    liText: '#799283',
    liTextHighLight: '#E23428',
    headingText: '#212121',
    idText:'#799283',
    disableColor:"#799283"
}

export const darkTheme ={
    rootBg:'#171717',
    bodyBg: '#292828',
    inputBg:'#292828',
    buttonBg:"#135846",
    cardBg: "#292828",
    theme:"#FFFFFF",
    body: '#202020',
    text: '#FFFFFF',
    buttonText:"#FFFFFF",
    subText: '#686868',
    liText: '#686868',
    liTextHighLight: '#E23428',
    headingText: '#FFFFFF',
    idText:'#799283',
    disableColor:"#135846"
}