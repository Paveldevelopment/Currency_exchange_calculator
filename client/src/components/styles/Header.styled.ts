import styled from 'styled-components'



export const Head = styled.header`
 & {
	position: fixed;
	top: 0em;
	left: 0em;
	width: 100%;
	height: 30em;
	
 }
 &:before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	bottom: 6em;
	width: 100%;
	height: 40em;
	z-index: -1;
	transform: skewY(-3.5deg);
	background-color: rgb(0,0,0);
	background: 
	linear-gradient(rgba(1,0,0,.6), rgba(0,0,0,.6)),
		url(https://unsplash.com/photos/nN1HSDtKdlw) no-repeat center,
		linear-gradient(#4e4376, #2b5876);
	background-size: cover;
	border-bottom: .2em solid #fff;
  }
`

export const Title = styled.h1`
	font-size: calc(2.8em + 2.6vw);
	font-weight: 700;
	letter-spacing: .01em;
	padding: 1rem 0 0 4.5rem;
	text-shadow: .022em .022em .022em #111;
	color: #fff;
}
`
