import { Schema } from 'mongoose'
import { createSeedModel } from 'mongoose-plugin-seed'
import seed from './todo.seed'

const TodoSchema = new Schema({

    title: {
      type: String,
      required: true,
      unique: true
    },
    content: {
        type: String,
        required: true,
        unique: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }    
  });
  
  export default createSeedModel('Todo', TodoSchema, seed)
