import signup from "../service/signup.service.js";
const createUser = async(req , res) => {
    try {
        const body = req.body;
        body.telephone_number = parseInt(body.telephone_number)
        console.log(body)
        const created = await signup.createUser(body)
        console.log(created)
        res.status(201).send(created)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
}

export default {createUser}
