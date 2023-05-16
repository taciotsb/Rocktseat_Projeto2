import { Container,TagContainer,InfoContainer } from "./styles";
import { MapPin,CurrencyDollar,Timer} from 'phosphor-react';
import Illustration from './Assets/Illustration.svg';
import { useLocation } from 'react-router-dom';
import { FormProps } from '../ShoppingCart';

export function FinishPage(){
    const location = useLocation();
    const { dadosnovos } = location.state;

    return(
      <Container>
            <div id='mensagem'>
                <h1>Uhu! Pedido Confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </div>
            <div id='content'>
                <InfoContainer>
                    <TagContainer>
                            <MapPin id='icon1' weight="fill" size={32}/>
                        <div>
                            <h1> Entrega em <strong>{dadosnovos.Rua}</strong></h1>
                            <span>{dadosnovos.Bairro} - {dadosnovos.Cidade}, {dadosnovos.UF}</span>
                        </div>
                    </TagContainer>
                    <TagContainer>
                            <Timer id='icon2' weight="fill" size={32}/>
                        <div>
                            <h1> Previsão de entrega</h1>
                            <span><strong>20 min - 30 min</strong></span>
                        </div>
                    </TagContainer>
                    <TagContainer>
                            <CurrencyDollar id='icon3' weight="fill"size={32}/>
                        <div>
                            <h1> Pagamento na entrega</h1>
                            <span><strong>{dadosnovos.payment}</strong></span>
                        </div>
                    </TagContainer>
                </InfoContainer>
                <img src={Illustration}/>
            </div>
      </Container>  
    );
}