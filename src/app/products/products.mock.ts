export const productsList: Product[] = [
  {
    id: 1,
    name: 'Broom',
    price: 10,
    description: 'A great broom for sweeping',
  },
  {
    id: 2,
    name: 'Mop',
    price: 15,
    description: 'A great mop for mopping',
  },
  {
    id: 3,
    name: 'Duster',
    price: 5,
    description: 'A great duster for dusting',
  },
  {
    id: 4,
    name: 'Sponge',
    price: 2,
    description: 'A great sponge for sponging',
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
