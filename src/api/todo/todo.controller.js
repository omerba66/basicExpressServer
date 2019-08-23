import Todo from './todo.model'
import User from '../user/user.model';

export const getAll = async() => await Todo.find({})  

export const get = async ({ params: { id } },res) => {
    try {
       return await Todo.findById(id) 
    } catch (error) {
        return todoNotFound(res)
    } 
}
export const create = async ({ body }, res) => {

    const user = await User.findById(body.user)

    if(!user){
        return res.status(404).send('user not exist')
    }
    const todo = await Todo.create({body})
  
    if (!todo) {
        res.status(409).send('already exist')
    }
  
    res.status(201);
  
    return todo;
  }

export const update = async ({params: { id },body}) => await Todo.findByIdAndUpdate(id, { $set: body })

  export const remove = async ({params: { id }},res) => {

    const todo = await Todo.findOneAndRemove({ _id: id})
  
    if (!todo) {
        todoNotFound(res)
    } else {
        res.status(200).send('DELETED')
    }
  }

const todoNotFound = (res) =>{
    return res.status(404).send('todo not found')
}
  
  
