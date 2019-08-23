import { AsyncRouter } from 'express-async-router';
import * as controller from './user.controller'

const router = new AsyncRouter();

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/', controller.create)


export default router