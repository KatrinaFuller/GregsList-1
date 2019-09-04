import House from "../Models/House.js";

// @ts-ignore
//putting the house API and using axios to get the http
let _houseApi = axios.create({
  // baseURL: "http://bcw-sandbox.herokuapp.com/api/houses" //the url for the server the houses is on
  baseURL: "//localhost:3000/api/houses"
})

//Private
let _state = {
  houses: []
}

//NOTE methods to run when a given property in state changes
// subscribers need to match what is in the state
let _subscribers = {
  houses: []
}

function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}


//Public
export default class HouseService {
  constructor() {
    // console.log("Hello from House Service")
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    // making a whole new copy of the houses that we can change 
    return _state.houses.map(h => new House(h))
  }

  getApiHouses() {
    _houseApi.get()
      .then(res => {
        let housesData = res.data.map(h => new House(h))
        _setState('houses', housesData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHouse(data) {
    _houseApi.post('', data)
      .then(res => {
        _state.houses.push(res.data)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteHouse(id) {
    _houseApi.delete(id)
      .then(res => {
        let index = _state.houses.findIndex(house => house._id == id)
        _state.houses.splice(index, 1)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })
  }

  bid(id) {
    let house = _state.houses.find(h => h._id == id)
    house.price++

    _houseApi.put(id, { price: house.price })
      .then(res => {
        _setState('houses', _state.houses)
      })
  }
}