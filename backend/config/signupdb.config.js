import mongoose from "mongoose";
import "dotenv/config";
const uri = process.env.URI;
const signupConnection = async() => {
    try {
        await mongoose.connect(`${uri}/signup`)
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Unable to Connect" , error.message)
    }
};

export const disconnect = async() => {
    try {
        await mongoose.disconnect();
        console.log("Disconnected Successfully")
    } catch (error) {
        console.log("Unable to Disconnect" , error.message)
        process.exit(1)
    }
}
export default signupConnection;
