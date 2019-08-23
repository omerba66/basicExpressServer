import userRoute from '../../api/user'
import todoRoute from '../../api/todo'

export default app => {
  
    app.use('/api/users', userRoute);

    app.use('/api/todos', todoRoute);

    app.route('/*').get((_req, res) => {

    res.status(404).send('404 bro');
  });

}