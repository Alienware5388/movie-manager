import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  movieList: Array<any> = [];
  constructor()  {
    let movie1= {
      title: "Game of Thrones",
      description : "A song of fire and ice",
      year: "2014",
      director: "Popescu"
    };
    this.movieList.push(movie1);

    let movie2= {
      title: "Lord of the Rings",
      description : "White mage",
      year: "2011",
      director: "ABC"
    };
    this.movieList.push(movie2);
    console.log(this.movieList);
  }

  refreshList():void{
    alert("S-a produs o schimbare in movie preview!");
  }
}
