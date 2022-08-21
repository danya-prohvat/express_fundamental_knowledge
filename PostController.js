import PostService from "./PostService.js"

class PostController {
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const posts = await PostService.getOne(req.params.id)
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const newPost = await PostService.create({author, title, content, picture})
            res.json(newPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const newPost = await PostService.update(req.params.id, {author, title, content, picture})
            res.json(newPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const posts = await PostService.delete(req.params.id)
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()