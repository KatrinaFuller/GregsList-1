import JobService from "../Services/JobService.js";

//Private
let _jobService = new JobService()


//Public
export default class JobController {
  constructor() {
    console.log("hello from job controller")
  }
}