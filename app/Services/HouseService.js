import House from "../Models/House.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/houses"
})

//Private
let _state = {
  houses: []
}

//NOTE methods to run when a given property in state changes
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
    return _state.houses.map(h => new House(h))
  }

  getApiHouses() {
    _houseApi.get()
      .then(res => {
        let housesData = res.data.data.map(h => new House(h))
        _setState('houses', housesData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHouse(data) {
    _houseApi.post('', data)
      .then(res => {
        _state.houses.push(res.data.data)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })
  }
}