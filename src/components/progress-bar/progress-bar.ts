import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress;
  public color:string = 'red';

  constructor() {
    console.log('Hello ProgressBarComponent Component', this.progress);
  }

  ngOnInit() {
    console.log("se setea progreso", this.progress);
    if(this.progress > 0 && this.progress <= 50) {
      this.color = "progress-success";
    } else if(this.progress > 50 && this.progress <= 75) {
      this.color = "progress-info";
    } else if(this.progress > 75 && this.progress < 90) {
      this.color = 'progress-warning';
    } else if(this.progress > 90) {
      this.color = "progress-danger";
    }
  }

}
