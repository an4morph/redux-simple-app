const initialState = {
    isShow: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN_CONTENT':
            return {
                ...state,
                isShow: !state.isShow
            }
    default:
        return state
    }
}

export default reducer
