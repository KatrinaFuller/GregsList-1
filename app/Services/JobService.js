import Job from "../Models/Job.js";

let _jobApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/jobs"
})

//Private
let _state = {
  jobs: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}


//Public
export default class JobService {
  constructor() {
    console.log("hello from job service")
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }
}