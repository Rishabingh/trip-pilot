import mongoose from "mongoose";
import bcrypt from 'bcrypt'

interface IUser extends mongoose.Document {
  email: string;
  password: string;
  verifyPassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  }
},
{timestamps: true}
)

userSchema.pre('save', async function() {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
})

userSchema.methods.verifyPassword = async function(this: IUser, password: string) {
  return await bcrypt.compare(password, this.password)
}

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);