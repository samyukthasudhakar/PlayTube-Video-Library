export default function checkIfPresent (id, state){
    return state.some((item) => item._id == id)
}