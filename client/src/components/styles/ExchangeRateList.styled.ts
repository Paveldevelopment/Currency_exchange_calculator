import React from 'react'
import styled, { keyframes } from 'styled-components'


const movingAnimation_1 = keyframes`
0% {
    left: 100%;
  }
  100% {
    left: -100%
  }
`

const movingAnimation_2 = keyframes`
0% {
    left: 100%;
  }
  100% {
    left: -100%
  }
`



export const FlexBox = styled.div`
height: 30px;
overflow: hidden;
line-height: 20px;
`



export const Container1 = styled.span`
display: flex;
bottom: 0;
left: 100%;
width: 100%;
overflow: hidden;
position: absolute;
white-space: nowrap;
padding-left: -15px;
animation: ${movingAnimation_1} 14s linear infinite; 
box-shadow: 0px 1px 170px 10px 	rgb(0,0,0);
`

export const Container2 = styled.span`
display: flex;
bottom: 0;
left: 100%;
width: 100%;
overflow: hidden;
position: absolute;
white-space: nowrap;
animation-delay: 1.5s;
padding-left: 10px;
animation: ${movingAnimation_2} 14s linear infinite; 
animation-delay: 7s;
box-shadow: 0px 1px 170px 10px 	rgb(0,0,0);
`



export const Card = styled.div`
    background-color: 	background-color: rgb(0,0,0);;      
`

export const Text = styled.div`
    font-size: 3em;
    width: 5em;
    border-left: solid 3px;
`



