export const AddUser = (x) => {
    console.log(x)
    return {
        type: 'ADD_USER',
        payload: x
    }
}