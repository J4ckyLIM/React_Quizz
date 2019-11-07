const initialState = { Score : 0}

function toggleScore(state = initialState, action) {
    let nextState
    switch (action.type){
        case 'Bonne réponse':
            nextState+= 1
            return nextState
        
        case 'Mauvaise reponse':
            return state
            
        default:
            return state
    }
}