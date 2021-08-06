const initialState = {
    data: [{
        id: 1,
        name: "Papaya",
        price: 100,
        description: "Papayas maduras, origen: La Serena",
        color: "Amarillo"
      },
      {
        id: 2,
        name: "Pera",
        price: 50,
        description: "Peras de agua, jugosas.",
        color: "Verde amarillento"
      },],
}

const reducerList = (prevState = initialState, action: { payload: any, type: string }) => {
    switch (action.type) {
        case 'PRODUCT_CREATE':
            return {
                data: [...prevState.data, action.payload]
            }
        case 'PRODUCT_DELETE':
            return {
                data: prevState.data.filter((prod: any)=> prod.id !== action.payload),
            }
        case 'PRODUCT_UPDATE':
            return {
                data: prevState.data.map((prod: any)=> {
                    if (prod.id === action.payload.id) return action.payload
                    return prod
                }),
            }
        default:
            return prevState
    }
}

export default reducerList