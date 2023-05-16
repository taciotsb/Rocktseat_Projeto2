import styled from "styled-components";

export const Container = styled.div`
    width: 256px;
    height: 310px;
    background: ${(props)=> props.theme['gray-100']};
    border-radius: 6px 36px;
    display:flex;
    margin-bottom:2.5rem;
    flex-direction:column;
    align-items:center;
`;

export const ImageContainer = styled.div`
    margin-top:-20px;
`;

export const InformativeTagContainer = styled.div`
    margin-top:0.75rem;
    display:flex;
    flex-direction:row;
    gap:0.3rem;

    span{
        color:${(props) => props.theme['yellow-dark']};
        background-color:${(props) => props.theme['yellow-light']};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 130%;
        padding:0.25rem 0.5rem;
        border-radius:100px;
    }
`;


export const DescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    

    h1{
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['gray-400']};
        margin-bottom:0.5rem;
        margin-top:1rem;
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
    }

    span{
        font-size:0.875rem;
        line-height: 130%;
        text-align:center;
        color: ${(props) => props.theme['gray-200']};
        padding:0 1.25rem;
    }
`;

export const BuyContainer = styled.div`
    margin-top:2rem;
    display:flex;
    flex-direction:row;
    gap:1.5rem;
    align-items:center;
    justify-content:center;

    #price{
        display:flex;
        flex-direction:row;
        gap:0.2rem;
        align-items:center;

        span{
            font-size:0.875rem;
            color: ${(props) => props.theme['gray-300']};
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            display:inline;
        }

                
        h1{
            font-size:0.875rem;
            color: ${(props) => props.theme['gray-300']};
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 1.5rem;
            }
        }

    #car{
        display:flex;
        flex-direction:row;
        gap:0.5rem;
        align-items:center;
        width: 7.375rem;
        height: 2.375rem;

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

        #icon {
            width: 2.375rem;
            height: 2.375rem;
            padding:0.5rem;
            display:flex;
            align-items: center;
            justify-content: center;
            background: ${(props) => props.theme['purple-dark']};
            color: ${(props) => props.theme['white']};
            border-radius: 6px;

            &:hover{
            cursor:pointer;
                }
            }
    }

`;






