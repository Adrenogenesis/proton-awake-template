import { getMixins } from './mixins'

class Post {
  constructor(axios) {
    this.slug = 'post'
    this.slugPlural = 'posts'
    this.pretty = 'Post'
    this.plural = 'Posts'
    this.axios = axios
    this.editUrl = '/admin/#/prestations/posts/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Post.prototype, getMixins)

export default Post
