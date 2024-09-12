import { model, Schema } from "mongoose";
const userDetails = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegex.test(email);
      return valid;
    },
  },
  telephone_number : {
    type: Number,
    required: true,
    unique: true,
    validate: (telephone_number) => {
      const telephone_numberRegex = /^[+234|0][0-9]{10}/;
      const valid = telephone_numberRegex.test(telephone_number);
      console.log(valid);
      return valid;
    },
  }
});

export default model("user_detail", userDetails);
