import {Schema, SchemaTypes} from 'mongoose';
import 'mongoose-type-email'
import { createSeedModel } from 'mongoose-plugin-seed'
import seed from './user.seed'

const UserSchema = new Schema({
    name: {
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      }
    },
    email: {
       type: SchemaTypes.Email,
      required: true,
      unique: true,
      immutable: true
    }
  });
  
  export default createSeedModel('User', UserSchema, seed)
