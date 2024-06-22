import  styled ,{css} from "styled-components";


const H1 = styled.h1`
${(props) =>
    props.as === 'h1' &&
    css` color: var(--color-brand-500)
    `}
${props.as === 'h2' && 
    css` color: var(--color-brand-100)`}
        
`;

export default H1