import HouseService from "../Services/HouseService.js";

//Private
let _houseService = new HouseService()

function _draw() {
  let houses = _houseService.Houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('houses-cards').innerHTML = template
}

//Public
export default class HouseController {
  constructor() {
    // console.log("hello from house controller")

    //register add subscribers
    _houseService.addSubscriber('houses', _draw)

    //retrieve data
    _houseService.getApiHouses()
  }

  addHouse(e) {
    e.preventDefault()
    let form = e.target
    let data = {
      imgUrl: form.imgUrl.value,
      price: form.price.value,
      year: form.year.value,
      levels: form.levels.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      description: form.description.value
    }
    _houseService.addHouse(data)
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _houseService.deleteHouse(id)
    }
  }

  bid(id) {
    _houseService.bid(id)
  }
}