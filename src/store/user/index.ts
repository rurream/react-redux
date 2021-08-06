const initialState = {
    data: false
}

const reducerList = (prevState = initialState, action: { payload: any, type: string }) => {
    switch (action.type) {
        case 'USER_LOG':
            return {
                data: action.payload
            }
        
        default:
            return prevState
    }
}

export default reducerList