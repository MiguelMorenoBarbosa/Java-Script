import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
    display: flex;
    border-bottom: 0.5rem solid ${colors.secundary};
    picture svg{
        height: 6rem;
        width: 6rem;
    }
    nav{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    
        ul{
            list-style-type: none;
            display: flex;
            align-items: center;
        
            li{
                margin: 0 1.5em;
                a{
                    text-decoration: none;
                    font-size: 1.2rem;
                    color: ${colors.primary};
                }
            }
        }
    }
`