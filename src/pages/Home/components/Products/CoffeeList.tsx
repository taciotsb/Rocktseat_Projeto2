import Coffee1 from './Assets/Coffee1.svg';
import Coffee2 from './Assets/Coffee2.svg';
import Coffee3 from './Assets/Coffee3.svg';
import Coffee4 from './Assets/Coffee4.svg';
import Coffee5 from './Assets/Coffee5.svg';
import Coffee6 from './Assets/Coffee6.svg';
import Coffee7 from './Assets/Coffee7.svg';
import Coffee8 from './Assets/Coffee8.svg';
import Coffee9 from './Assets/Coffee9.svg';
import Coffee10 from './Assets/Coffee10.svg';
import Coffee11 from './Assets/Coffee11.svg';
import Coffee12 from './Assets/Coffee12.svg';
import Coffee13 from './Assets/Coffee13.svg';
import Coffee14 from './Assets/Coffee14.svg';

export interface coffeProps{
    img:string,
    tags: string[],
    type: string,
    description:string,
    price: number,
    quantity:number}

export const CoffeeList: coffeProps[] =
    [{
        img: Coffee1,
        tags: ['TRADICIONAL'],
        type: 'Expresso Tradicional',
        description:'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee2,
        tags: ['TRADICIONAL'],
        type: 'Expresso Americano',
        description:'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee3,
        tags: ['TRADICIONAL'],
        type: 'Expresso Cremoso',
        description:'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee14,
        tags: ['TRADICIONAL','GELADO'],
        type: 'Expresso Gelado',
        description:'bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee4,
        tags: ['TRADICIONAL','COM LEITE'],
        type: 'Café com Leite',
        description:'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee5,
        tags: ['TRADICIONAL','COM LEITE'],
        type: 'Latte',
        description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee6,
        tags: ['TRADICIONAL','COM LEITE'],
        type: 'Capuccino',
        description:'bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee7,
        tags: ['TRADICIONAL','COM LEITE'],
        type: 'Macchiato',
        description:'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee8,
        tags: ['TRADICIONAL','COM LEITE'],
        type: 'Mocaccino',
        description:'café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee9,
        tags: ['ESPECIAL','COM LEITE'],
        type: 'Chocolate Quente',
        description:'bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee10,
        tags: ['ESPECIAL','ALCOÓLICO','GELADO'],
        type: 'Cubano',
        description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee11,
        tags: ['ESPECIAL'],
        type: 'Havaiano',
        description:'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee12,
        tags: ['ESPECIAL'],
        type: 'Árabe',
        description:'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        quantity:0
    },
    {
        img: Coffee13,
        tags: ['ESPECIAL', 'ALCOÓLICO'],
        type: 'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açucar e chantilly',
        price: 9.90,
        quantity:0
    },
    ]