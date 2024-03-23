import styled from "styled-components"

type FilledButtonProps = {
    title:string
}

const Button = styled.button`
   font-size:0.85rem;
   cursor:pointer;
   font-weight:600;
   background:transparent;
   padding:0.75rem 1.5rem;
   border-radius:100px;
   border: solid 2px #DCCA87;
   color:#DCCA87;
   transition: all 0.25s ease-in;
   &:hover{
     color:#ffffff;
     background-color:#DCCA87;
   }
`

const FilledButton = ({ title }: FilledButtonProps) => {
    return (
        <Button>{title}</Button>
    )
}

export default FilledButton;