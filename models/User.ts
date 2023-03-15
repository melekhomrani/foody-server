import mongoose from "mongoose";
import IUser from "../interfaces/User";
import validator from 'validator';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

    minlength: 3
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 6,
    lowercase: true,
    validate: validator.isEmail
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

UserSchema.pre('save', async function (next: any) {
  const user = this;
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

export default mongoose.model<IUser>('user', UserSchema);