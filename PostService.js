import Post from "./Post.js"

class PostService {
    async getAll() {
        const posts = await Post.find()
        return posts
    }
    async getOne(id) {
        const posts = await Post.findById(id)
        return posts
    }
    async create(data) {
        const newPost = await Post.create(data)
        return newPost
    }
    async update(id, data) {
        const updatedPost = await Post.findByIdAndUpdate(id, data)
        return updatedPost
    }
    async delete(id) {
        const posts = await Post.deleteOne({"_id": id})
        return posts
    }
}

export default new PostService()