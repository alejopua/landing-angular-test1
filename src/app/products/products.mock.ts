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
  {
    id: 5,
    name: 'Vacuum',
    price: 100,
    description: 'A great vacuum for vacuuming',
  },
  {
    id: 6,
    name: 'Bucket',
    price: 8,
    description: 'A great bucket for bucketing',
  },
  {
    id: 7,
    name: 'Soap',
    price: 1,
    description: 'A great soap for soaping',
  },
  {
    id: 8,
    name: 'Bleach',
    price: 3,
    description: 'A great bleach for bleaching',
  },
  {
    id: 9,
    name: 'Gloves',
    price: 4,
    description: 'A great gloves for gloving',
  },
  {
    id: 10,
    name: 'chlorine',
    price: 3,
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}
