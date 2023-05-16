import { Plus, Minus, Trash} from 'phosphor-react';
import {useState} from 'react';
import {Container,Buttons} from './styles';
import { coffeProps } from '../../../pages/Home/components/Products/CoffeeList';
import { useDispatch } from 'react-redux';

export function Coffetag(info:coffeProps){

    const [quantity, setQuantity] = useState(info.quantity);
    const dispatch = useDispatch();

    const handleReducequantity  = (coffetype:string, newQuantity:number) => {
        if(quantity===0){
          setQuantity(0);
        }
        else{
          setQuantity(quantity-1);
          dispatch({type: "ADD_NEW_BUY",payload: {coffetype, newQuantity}});
        }
    };

    const handleAddquantity = (coffetype:string, newQuantity:number) => {
        setQuantity(quantity+1);
        dispatch({type: "ADD_NEW_BUY",payload: {coffetype, newQuantity}});
    };

    const handleRemove = (coffetype:string, newQuantity:number ) => {
        dispatch({type: "ADD_NEW_BUY",payload: {coffetype, newQuantity}});
    };
    
    return(
        <Container>
            <img src={info.img} alt='Café do tipo 1'/>
            <div id='content'>
                <div id='info'>
                    <h1>{info.type}</h1>
                    <span>R$ {(quantity * info.price).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</span>
                </div>
                <Buttons>
                    <div>
                        <Minus onClick={()=>handleReducequantity(info.type,(quantity-1))} id='button' size={16}/>
                        <span>{quantity}</span>
                        <Plus onClick={()=>handleAddquantity(info.type,(quantity+1))} id='button' size={16}/>
                    </div>
                    <button onClick={()=>handleRemove(info.type,0)}>
                        <Trash id='icon'/>
                        REMOVER
                    </button>
                </Buttons>
            </div>
        </Container>
    );
}