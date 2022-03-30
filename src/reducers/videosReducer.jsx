export function VideosReducer(state, action){
    switch(action.type){
        case 'GET_VIDEOS':
            return {...state, videos: action.payload}
        case 'GET_CATEGORIES':
            return {...state, categories: action.payload }
        case 'SET_CATEGORY_FILTER':
            return {...state, categoryFilter: state.categoryFilter===action.payload ? 'All': action.payload}
    }
}