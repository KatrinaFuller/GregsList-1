
export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get Template() {
    return `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.company} <br>Job Title: ${this.jobTitle}</h5>
                    <p class="card-text">Hours: ${this.hours} Rate: ${this.rate}</p>
                    <p><sm>Description: ${this.description}</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.jobController.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.jobController.delete('${this._id}')">Delete Job</button>
                </div >
            </div >
        </div >
            `
  }
}