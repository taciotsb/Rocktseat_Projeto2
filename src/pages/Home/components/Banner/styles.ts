import styled from "styled-components";
import Background from '../../../../Assets/Background.svg';
import { defaultTheme } from "../../../../styles/themes/default";

export const BannerContainer = styled.div`

@media (min-width:1800px) {
    padding: 6rem 7rem;
    display:flex;
    gap:8rem;
    background-image: url(${Background});

    #Content{
      width: 52rem;
      height: 10rem;

      h1{
          font-family: 'Baloo 2', sans-serif;
          font-weight:800;
          color: ${(props) => props.theme['gray-900']};
          font-size: 2.8rem;
          line-height: 130%;
          margin-bottom:1rem;
      }

      #subtitle{
          font-size: 20px;
          font-weight: 400;
          line-height: 130%;
          color: ${(props) => props.theme['gray-400']};
          font-stretch: 100;
      }
    }

    img{
      width:476px;
    }
  }
 
  @media (max-width:1800px) {
  padding: 6rem 7rem;
  display:flex;
  gap:1rem;
  background-image: url(${Background});

  #Content{
    width: 37rem;
    height: 7.75rem;

    h1{
        font-family: 'Baloo 2', sans-serif;
        font-weight:800;
        color: ${(props) => props.theme['gray-900']};
        font-size: 2.8rem;
        line-height: 130%;
        margin-bottom:1rem;
    }

    #subtitle{
        font-size: 20px;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['gray-400']};
        font-stretch: 100;
    }
  }

  img{
    width:476px;
  }
}
`;

export const TagsContainer = styled.div`
  display:flex;
  flex-direction:column;
  row-gap:1.3rem;
  margin-top:4.4rem;
`;

export const TagAreaContainer = styled.div`
  display:flex;
  gap:2.5rem;
`;

interface TagProps{
  background:keyof typeof defaultTheme;
}

export const TagContainer = styled.div<TagProps>`
    gap:0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;


    #icon{
        padding:0.5rem;
        border-radius:50%;
        background-color:${(props) => props.theme[props.background]};
        color: ${(props) => props.theme['white']};
    }

    span{
        font-size:1rem;
        color: ${(props) => props.theme['gray-300']};
    }
`;