import styled from "styled-components";

export const Container = styled.form`
    display:flex;
    flex-direction:row;
    gap:2rem;
`;

export const RightContainer = styled.div`
    margin:2.5rem 0rem;

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color:${(props)=>props.theme['gray-400']}
    }
`;

export const LeftContainer = styled.div`
    margin:2.5rem 0 0 7rem;

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
        color:${(props)=>props.theme['gray-400']}
    }
`;


export const FormContainer = styled.div`
    margin-top:1rem;
    padding:2.5rem 2.5rem 2rem 2.5rem;
    background-color:${(props)=>props.theme['gray-100']};

    width: 40rem;
    height: 23.25rem;


    header{
        display:flex;
        flex-direction:row;
        gap:0.5rem;

        #icon{
                color:${(props)=>props.theme['yellow-dark']}
            }

        div{
            display:flex;
            flex-direction:column;
            gap:0.5rem;
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
                font-size: 0.875rem;
                line-height: 130%;
                color:${(props)=>props.theme['gray-300']};
            }
        }
    }

    div{
        margin-top:2rem;
        border-radius: 6px;   
        
        span{
            font-size:12px;
            margin-bottom:5px;
            color:red;
            display:flex;
            align-items:center;
            justify-content:center;
        }

        input{
            background-color:${(props)=>props.theme['gray-25']};
            border: 1px solid ${(props)=>props.theme['gray-50']};
            border-radius: 4px;
            color:${(props)=>props.theme['gray-200']};
            padding:0.75rem;
            height: 2.625rem;
            resize: none;
            overflow: hidden;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 130%;
            margin-bottom:1rem;
        }

        #CEP{
            display:block;
            width: 200px;
        }

        #Rua{
            display:block;
            width: 100%;
        }

        #Numero{
            width: 200px;
            margin-right:0.75rem;
        }

        #Complemento{
            width: 348px;
        }

        #Bairro{
            width: 200px;
            margin-right:0.75rem;
        }

        #Cidade{
            width: 276px;
            margin-right:0.75rem;
        }

        #UF{
            width: 60px;
        }
    }

`;

export const PaymentContainer = styled.div`
    margin:1rem 0rem;
    padding:2.5rem 2.5rem 2rem 2.5rem;
    background-color:${(props)=>props.theme['gray-100']};
    border-radius: 6px;    

    width: 40rem;
    height: 13rem;

    header{
        display:flex;
        flex-direction:row;
        gap:0.5rem;

        #icon{
                color:${(props)=>props.theme['purple']}
            }

        div{
            display:flex;
            flex-direction:column;
            gap:0.5rem;
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
                font-size: 0.875rem;
                line-height: 130%;
                color:${(props)=>props.theme['gray-300']};
            }
        }
    }

    div{
        margin-top:2rem;
        display:flex;
        flex-direction:row;
        gap:0.75rem;

        button{
            width: 178.67px;
            height: 51px;
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
            padding: 16px;
            gap: 12px;
            align-items:center;
            border:none;

            &:hover{
                cursor:pointer;
            }

            #icon{
                color:${(props)=>props.theme['purple']};
            }
        }

    }
`

export const ProductsContainer = styled.div`
    margin-top:1rem;
    padding:2.5rem 2.5rem 0rem 2.5rem;
    background-color:${(props)=>props.theme['gray-100']};
    width: 28rem;
    height: auto;
    border-radius: 6px 44px;
    display:flex;
    flex-direction:column;
    gap:1.5rem;
`

export const InfoResumedContainer = styled.div`
        display:flex;
        flex-direction:column;
        gap:0.75rem;

    div{
        display:flex;
        justify-content: space-between; 

        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color:${(props)=>props.theme['gray-300']};
        }

        h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color:${(props)=>props.theme['gray-300']};
        }
    }

    #Total{

        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 130%;
            color:${(props)=>props.theme['gray-300']};
        }

        h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 130%;
            color:${(props)=>props.theme['gray-300']};
        }
    }
`

export const ButtonSend = styled.button`
    padding: 12px 8px;
    margin-bottom:15px;
    gap: 4px;
    width: 368px;
    height: 46px;
    background: ${(props)=>props.theme['yellow']};
    border-radius: 6px;
    border:none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${(props)=>props.theme['white']};
    font-stretch: 100;

    &:hover{
        cursor:pointer;
    }
`

