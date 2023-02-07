import styled from 'styled-components'


export const ParentContainer = styled.div`
    top: -10em;
    position: relative;

    text-align: center;
    weight: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    margin-top: 1em;
`

export const Input = styled.input`
    font-size: var(--text);
    width: 14.7em;
    padding:0.35em 0em;
`

export const Option = styled.option`
    font-size: 1em;
    margin-top: 1em;
`

export const Dropdown_menu = styled.select`
    font-size: var(--text);
    width: 15em;
    margin-top: 1em;
    padding:0.35em 0em;

`

export const Button = styled.button`
& {
    font-size: var(--text);
    width: 15em;
    background-color: black;
    margin-top: 1em;

     display:inline-block;
     padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;

     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-weight:300;
     color:#FFFFFF;
     text-align:center;
     transition: all 0.2s;
}
&:hover {
     color:#000000;
     background-color:#FFFFFF;
    border:0.1em solid black;

}
&:active {
    width: 10em;
    padding:0.15em 0.6em;
}
`