interface ProductModel {
    name: string,
    price: number,
    description: string,
    id: number,
    color:string
}

export const productListSelector = (s: any) : ProductModel[] => {
    return s.products.data
}