import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 2rem 7rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme['headerBackground']};


    nav{
        display:flex;
        gap: 1rem;

        div{
            gap:0.3rem;
            padding:0.5rem;
            display:flex;
            align-items: center;
            justify-content: center;
            background: ${(props) => props.theme['headerLocationBackground']};
            color: ${(props) => props.theme['headerLocationColor']};
            border-radius:8px;
        }
        
        a {
            padding:0.5rem;
            display:flex;
            align-items: center;
            justify-content: center;
            background: ${(props) => props.theme['headerIconBackground']};
            color: ${(props) => props.theme['headerIconColor']};
            border-radius: 6px;
        }

        
        #quantity{
                background-color:${(props) => props.theme['yellow-dark']};
                color:${(props) => props.theme['white']};
                border-radius: 1000px;
                width: 20px;
                height: 20px;
                text-align:center;
                margin-left:-1.5rem;
                margin-top:-0.5rem;
            }

    }
`;
