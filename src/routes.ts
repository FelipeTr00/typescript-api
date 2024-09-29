import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello, World');
});

routes.get('/users', UserController.index)

export default routes
