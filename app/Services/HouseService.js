import House from "../Models/House.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/houses"
})

//Private
let _state = {
  houses: []
}


//Public
export default class HouseService {
  constructor() {
    // console.log("Hello from House Service")
  }

  get Houses() {
    return _state.houses.map(h => new House(h))
  }
}