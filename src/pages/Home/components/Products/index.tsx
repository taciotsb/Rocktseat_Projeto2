import { Title, Container, CoffeeContainer} from "./styles";
import { CoffeeBanner } from "./components";
import { CoffeeList } from './CoffeeList';
import {useEffect, useReducer} from 'react';
import {coffeProps} from './CoffeeList';
import { legacy_createStore as createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

interface AtualizacaoAction{
    type: 'ADD_NEW_BUY',
    payload: {
        coffetype: string;
        newQuantity: number;
      };
}

interface MyListState {
    listItems: coffeProps[];
  }


  type MyListAction = AtualizacaoAction;

  function myListReducer(state: MyListState ={listItems:CoffeeList}, action: MyListAction){
    switch (action.type) {
      case "ADD_NEW_BUY":{
        const updatedListItems = state.listItems.map((item) =>
          item.type === action.payload.coffetype
            ? { ...item, quantity: action.payload.newQuantity }
            : item);
        return { ...state, listItems: updatedListItems };
        }
      default:
        return state;
    }
  }

  
export const store = createStore(myListReducer);

export function Products() {

      const dispatch = useDispatch();

      const handleUpdate = (coffetype:string, newQuantity:number) => {
        dispatch({type: "ADD_NEW_BUY",payload: {coffetype, newQuantity}});
      };
    
    return(
        <Container>
            <Title>Nossos Cafés</Title>
            <CoffeeContainer>
            {
                CoffeeList.map((item) =>
                <CoffeeBanner img={item.img} tags={item.tags} type={item.type} description={item.description} price={item.price} quantity={item.quantity} handleUpdate={handleUpdate}/>
                )
            }
            </CoffeeContainer>
        </Container>
    );
}


