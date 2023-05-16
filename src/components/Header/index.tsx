import { HeaderContainer } from './styles';
import  Logo  from '../../Assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { coffeProps } from '../../pages/Home/components/Products/CoffeeList';

interface MyListState {
    listItems: coffeProps[];
  }

export function Header(){

    const dados = useSelector((state:MyListState) => state.listItems);

    const [qtd, setQtd] = useState(0);

    const quantidade = () => {
        let i=0;
        setQtd(0);
        dados.map(item => {
        if(item.quantity!==0){
            i = i + 1;
            setQtd(i);
        }
    })} 

    useEffect(() => {
        quantidade();
      },[dados]);

    return(
        <HeaderContainer>
             <img src={Logo} alt='Logomarca do estabelecimento'/>
             <nav>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>
                <NavLink to="/payment" title='Pagamento'>
                    <ShoppingCart size={22} weight="fill"/>
                </NavLink>
                <span id='quantity'>{qtd}</span>
             </nav>
        </HeaderContainer>
    );
}