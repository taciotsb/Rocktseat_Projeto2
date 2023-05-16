import {Container, FormContainer, PaymentContainer,LeftContainer,RightContainer,ProductsContainer,InfoResumedContainer,ButtonSend} from './styles';
import { MapPin, CurrencyDollar,CreditCard,Bank,Money} from 'phosphor-react';
import { Coffetag } from './Components/CoffeTag';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { coffeProps } from '../Home/components/Products/CoffeeList';
import {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

interface MyListState {
    listItems: coffeProps[];
  }

export interface FormProps {
    CEP:string,
    Rua:string,
    Numero:string,
    Complemento:string,
    Bairro:string,
    Cidade:string,
    UF:string,
    payment:string
}

const coffeeSchema = zod.object({
    CEP:zod.string().length(8,'Informe um CEP com 8 caracteres'),
    Rua:zod.string().min(3,'Informe uma rua válida'),
    Numero:zod.string().min(1,'Informe um número valido'),
    Bairro:zod.string().min(3,'Informe um bairro válido'),
    Cidade:zod.string().min(3,'Informe uma cidade válida'),
    UF:zod.string().length(2,'UF precisa conter dois caracteres'),
})

export function ShoppingCart() {
    const navigate = useNavigate();
    const dados = useSelector((state:MyListState) => state.listItems);
    const [total, setTotal] = useState(0);
    const [payment, setPayment] = useState('');
    const [erroPayment, setErroPayment] = useState(false);

    const {register, handleSubmit, reset, watch, formState:{errors}} = useForm<FormProps>({
        resolver: zodResolver(coffeeSchema),
        defaultValues:{
            CEP:'',
            Rua:'',
            Numero:'',
            Complemento:'',
            Bairro:'',
            Cidade:'',
            UF:''
        }
    });

    const hanflePaymentMetod = (type:string)=> {
        setPayment(type);
        setErroPayment(false);
    } 

    const handleTotal = ()=> {
        let i = 0;
        dados.map((item) => {
           i = i + item.quantity * item.price;
           setTotal(i);      
        })
    } 

    useEffect(() => {
        handleTotal();
      },[dados]);

    function handleCreate(data:FormProps){
        if(payment===''){
            setErroPayment(true)
        }
        else{
            const dadosnovos:FormProps = {
                CEP:data.CEP,
                Rua:data.Rua,
                Numero:data.Numero,
                Complemento:data.Complemento,
                Bairro:data.Bairro,
                Cidade:data.Cidade,
                UF:data.UF,
                payment:payment
            }

            navigate('/finishPage', {state:{dadosnovos}});
        }
    }

    return(
        <Container onSubmit={handleSubmit(handleCreate)}>
                <LeftContainer>
                <h1>Complete seu pedido</h1>
                <FormContainer>
                    <header>
                            <MapPin id='icon' size={22}/>
                        <div>
                            <h1>Endereço de Entrega</h1>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </header>
                    <div>
                        {errors && <span>Revise as informações!!</span>} 
                        <input type="text" id='CEP' placeholder='CEP' {...register('CEP')}/>
                        <input type="text" id='Rua' placeholder='Rua' {...register('Rua')}/>
                        <input type="text" id='Numero' placeholder='Número' {...register('Numero')}/>
                        <input type="text" id='Complemento' placeholder='Complemento' {...register('Complemento')}/>
                        <input type="text" id='Bairro' placeholder='Bairro' {...register('Bairro')}/>
                        <input type="text" id='Cidade' placeholder='Cidade' {...register('Cidade')}/>
                        <input type="text" id='UF' placeholder='UF' {...register('UF')}/>
                    </div>
                </FormContainer>
                <PaymentContainer>
                    <header id=''>
                            <CurrencyDollar id='icon' size={22}/>
                        <div>
                            <h1>Pagamento</h1>
                            <span>O pagamento é feito na entrega.Escolha a forma que deseja pagar</span>
                            {erroPayment && <span style={{color:'red'}}>Selecione uma forma de pagamento!</span>}
                        </div>
                    </header>
                    <div>
                        <button onClick={() => hanflePaymentMetod('Crédito')} type='button'>
                            <CreditCard id='icon' size={12}/>
                            CARTÃO DE CRÉDITO
                        </button>
                        <button onClick={() => hanflePaymentMetod('Débito')} type='button'>
                            <Bank id='icon' size={12}/>
                            CARTÃO DE DÉBITO
                        </button >
                        <button onClick={() => hanflePaymentMetod('Dinheiro')} type='button'>
                            <Money id='icon' size={12}/>
                            DINHEIRO
                        </button>
                    </div>
                </PaymentContainer>
                </LeftContainer>
                <RightContainer>
                    <h1>Complete seu pedido</h1>
                    <ProductsContainer>
                        {dados.filter(coffee => coffee.quantity!==0).map((item) => 
                            <Coffetag {...item}/>
                        )}
                            <InfoResumedContainer>
                                <div>
                                    <h1>Total de Itens</h1>
                                    <h2>R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</h2>
                                </div>
                                <div>
                                    <h1>Entrega</h1>
                                    <h2>R$ 3,50</h2>
                                </div>
                                <div id='Total'>
                                    <h1>Total</h1>
                                    <h2>R$ {(total + 3.50).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</h2>
                                </div>
                        </InfoResumedContainer>
                        <ButtonSend type="submit">CONFIRMAR PEDIDO</ButtonSend>
                    </ProductsContainer>
                </RightContainer>
        </Container>
    );

}