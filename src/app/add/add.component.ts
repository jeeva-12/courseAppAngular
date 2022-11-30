import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

constructor(private api:ApiService){}
readValue=()=>
{
let data:any=
{
  "courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDescription,"courseDate":this.courseDate, "courseVenue":this.courseVenue}
console.log(data)

this.api.addCourse(data).subscribe(
  (response)=>
  {
    console.log(response)
  }
)
}


  
  

}
