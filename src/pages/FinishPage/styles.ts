import styled from "styled-components";

export const Container = styled.div`
    margin: 5rem 10rem;

    #content{
        display:flex;
        flex-direction:row;
        gap:100px;
    }

    #mensagem{
        h1{
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 2rem;
            line-height: 130%;
            color:${(props)=>props.theme['yellow-dark']};
        }
        span{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;
            color:${(props)=>props.theme['gray-300']};
        }
    }
`;

export const InfoContainer = styled.div`
    width: 526px;
    height: 270px;
    margin-top:40px;
    padding:40px;
    display:flex;
    flex-direction:column;
    gap:2rem;
    border-radius: 6px 36px;
    border: 1px solid ${(props)=>props.theme['purple']};;
    `;

export const TagContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:0.5rem;

    #icon1{
            color:${(props)=>props.theme['white']};
            background-color:${(props)=>props.theme['purple']};
            border-radius:18px;
            padding:8px;
        }
    #icon2{
            color:${(props)=>props.theme['white']};
            background-color:${(props)=>props.theme['yellow']};
            border-radius:18px;
            padding:8px;
        }
    #icon3{
            color:${(props)=>props.theme['white']};
            background-color:${(props)=>props.theme['yellow-dark']};
            border-radius:18px;
            padding:8px;
        }
    

    div{
        display:flex;
        flex-direction:column;
        gap:0.2rem;
        margin:0;

        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 130%;
            color:${(props)=>props.theme['gray-400']};
        }

        span{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 130%;
            color:${(props)=>props.theme['gray-400']};
        }
    }
`