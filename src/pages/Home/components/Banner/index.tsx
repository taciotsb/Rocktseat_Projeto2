import { BannerContainer, TagContainer, TagAreaContainer,TagsContainer } from './styles';
import HomeBanner from '../../../../Assets/HomeBanner.svg';
import { ShoppingCart, Timer, Coffee, Cube} from 'phosphor-react';

export function Banner() {
    return(
        <BannerContainer>
            <div id='Content'>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span id='subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                <TagsContainer>
                    <TagAreaContainer>
                        <TagContainer background='yellow-dark'>
                            <ShoppingCart size={32} id='icon' />
                            <span>Compra simples e segura</span>
                        </TagContainer>
                        <TagContainer background='gray-300'>
                            <Cube size={32} id='icon' />
                            <span>Compra simples e segura</span>
                        </TagContainer>
                    </TagAreaContainer>
                    <TagAreaContainer>
                        <TagContainer background='yellow'>
                            <Timer size={32} id='icon' />
                            <span>Compra simples e segura</span>
                        </TagContainer>
                        <TagContainer background='purple'>
                            <Coffee size={32} id='icon' />
                            <span>Compra simples e segura</span>
                        </TagContainer>
                    </TagAreaContainer>
                </TagsContainer>
            </div>
            <img src={HomeBanner} />
        </BannerContainer>
    );
}