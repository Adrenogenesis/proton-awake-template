import { getMixins } from './mixins'

class Category {
  constructor(axios) {
    this.slug = 'category'
    this.slugPlural = 'prestations'
    this.pretty = 'Category'
    this.plural = 'prestations'
    this.axios = axios
  }
}

// Mixins
Object.assign(Category.prototype, getMixins)
export default Category
