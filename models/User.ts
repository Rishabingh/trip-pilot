import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    require: true,
  }
},
{timestamps: true}
)

export default mongoose.models.User || mongoose.model('User', userSchema);