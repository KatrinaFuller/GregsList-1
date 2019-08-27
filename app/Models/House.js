
export default class House {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.year = data.year
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.description = data.description
  }
}