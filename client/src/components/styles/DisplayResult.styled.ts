import styled from 'styled-components'


export const Result_Container = styled.div`
top: -10em;
position: relative;
text-align: center;
margin-top: 0em;
margin-bottom: 0em;
padding-top: 0em;
padding-bottom: 0em;
`

export const Result_Text = styled.h1`
font-size: calc(var(--text) * 2);
margin-top: 0em;
margin-bottom: 0em;
padding-top: 0em;
padding-bottom: 0em;
`

export const Back_To_Inpunt_Button = styled.h1`
& {
    font-size: calc(var(--text) * 1);
    margin-top: 2em;
    color: blue;
    text-decoration: underline;
    padding: 0em;
}
&:active {
    font-size: calc(var(--text) * 1.15);
}

`