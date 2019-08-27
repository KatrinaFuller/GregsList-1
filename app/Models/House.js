
export default class House {
  constructor(data) {
    this._id = data._id
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.year = data.year
    this.levels = data.levels
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.description = data.description
  }

  get Template() {
    return `
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="House imgage">
          <div class="card-body">
            <h5 class="card-title">Price:${this.price} <br>Year: ${this.year}</h5>
            <h6 class="card-text">Levels: ${this.levels} Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</h6>
            <p>${this.description}</p>
            <button class="btn btn-info" onclick="app.controllers.houseController.bid('${this._id}')">Place Bid</button>
            <button class="btn btn-danger" onclick="app.controllers.houseController.delete('${this._id}')">Delete House</button>
          </div>
        </div>
      </div>
    `
  }
}