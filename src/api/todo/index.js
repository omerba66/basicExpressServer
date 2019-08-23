import { AsyncRouter } from 'express-async-router'
import * as controller from './todo.controller'

const router = new AsyncRouter();

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.put('/:id', controller.update)
router.post('/', controller.create)
router.delete('/:id', controller.remove)

export default router
