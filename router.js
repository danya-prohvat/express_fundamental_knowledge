import { Router } from "express"
import PostController from "./PostController.js"
import Post from "./Post.js"


const router = new Router()

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.post('/posts', PostController.create)
router.patch('/posts/:id', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router
