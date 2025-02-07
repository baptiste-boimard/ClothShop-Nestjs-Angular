export interface Product {
    saled: number;
    selectedQuantity: any;
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    urlimage: string;
    editMode?: boolean;
  }