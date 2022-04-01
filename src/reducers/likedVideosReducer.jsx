function LikedVideosReducer(state, action){
    
    switch(action.type){
        case 'LIKE_TOGGLE':{
            if (state.filter(item => item._id==action.payload._id).length <= 0){
                return [...state, action.payload]
            }else{
                return [...state.filter(item => item._id!=action.payload._id)]
            }
        }
    }
}

export { LikedVideosReducer }