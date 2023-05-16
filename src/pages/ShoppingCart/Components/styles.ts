import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction:row;
    gap:1.25rem;
    width:368px;
    height:6.5rem;
    padding-bottom:1.5rem;
    border-bottom: 1px solid #E6E5E5;


    #content{
        display:flex;
        flex-direction:column;
        gap:0.5rem;

        #info{       
            width:18rem;
            display:flex;
            justify-content: space-between;

            h1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                color: ${(props)=> props.theme['gray-400']};
            }
            span{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 130%;
                color: ${(props)=> props.theme['gray-300']};
            }
        }
    }

    img{
        width:4rem;
        height:4rem;
    }
`;

export const Buttons = styled.div`
            display:flex;
            flex-direction:row;
            gap:0.5rem;

        div{
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
            gap:0.25rem;
            background-color:${(props) => props.theme['gray-50']};
            padding:0.5rem;
            border-radius: 6px;
            width: 4.5rem;
            height: 2.375rem;
            
            #button {
                color:${(props) => props.theme['purple-dark']};

                &:hover{
                    cursor:pointer;
                }
            }

            span{
                font-size:1rem;
            }
        }

        button{
            background-color:${(props)=>props.theme['gray-50']};
            color:${(props)=>props.theme['gray-300']};
            border-radius: 6px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            display:flex;
            flex-direction:row;
            padding: 0.5rem;
            gap: 12px;
            align-items:center;
            border:none;
            height: 2.375rem;

            &:hover{
                cursor:pointer;
            }

            #icon{
                color:${(props)=>props.theme['purple']};
            }

            
        }
`