import JobService from "../Services/JobService.js";

//Private
let _jobService = new JobService()

function _draw() {
  let jobs = _jobService.Jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobs-cards').innerHTML = template
}

//Public
export default class JobController {
  constructor() {
    //NOTE Register all subscribers
    _jobService.addSubscriber('jobs', _draw)

    //NOTE Retrieve data
    _jobService.getApiJobs();
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target
    let data = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _jobService.addJob(data)
    form.reset()
  }

  delete(id) {
    console.log("made it here")

    if (window.confirm('Are you sure?')) {
      _jobService.deleteJob(id)
    }
  }

  bid(id) {
    _jobService.bid(id)
  }
}