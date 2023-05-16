import { Container,ImageContainer,InformativeTagContainer,DescriptionContainer,BuyContainer } from './styles';
import { ShoppingCart, Plus, Minus} from 'phosphor-react';
import {useState} from 'react';


export interface coffePropsBanner{
    img:string,
    tags: string[],
    type: string,
    description:string,
    price: number,
    quantity:number,
    handleUpdate: (coffeetype: string, newQuantity: number ) => void,
}

export function CoffeeBanner({img,tags,type,description,price,handleUpdate}:coffePropsBanner){
    const [quantity, setQuantity] = useState(0);

    const handleReducequantity  = () => {
        if(quantity===0){
          setQuantity(0);
        }
        else{
          setQuantity(quantity-1);
        }
    };

    const handleAddquantity = () => {
        setQuantity(quantity+1);
    };

    const handleCoffeBuy = () => {
       handleUpdate(type,quantity);
    };

    return(
        <Container>
            <ImageContainer>
                 <img src={img} alt='Café do tipo 1'/>
            </ImageContainer>
            <InformativeTagContainer>
                {tags.map((item) => 
                        <span>{item}</span>  
                    )}
            </InformativeTagContainer>
            <DescriptionContainer>
                 <h1>{type}</h1>
                 <span>{description}</span>
            </DescriptionContainer>
            <BuyContainer>
                <div id='price'>
                    <span>R$</span>
                    <h1>{price.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</h1>
                </div> 
                <div id='car'>
                    <div>
                        <Minus onClick={handleReducequantity} id='button' size={16}/>
                        <span>{quantity}</span>
                        <Plus onClick={handleAddquantity} id='button' size={16}/>
                    </div>
                    <ShoppingCart onClick={handleCoffeBuy} id='icon' size={22} weight="fill"/>
                </div>
            </BuyContainer>
        </Container>
    );
}