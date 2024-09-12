import model from "../model/signup.model.js"
// Create User 
const createUser = async(userDetails) => {
    try {
        const createUser = await model.create(userDetails)
        return createUser 
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {createUser}
