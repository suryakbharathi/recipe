import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {
  recipeData: any;
  recipeList: any;
  constructor(public router: Router ,public actrouter: ActivatedRoute) {
    this.recipeList = JSON.parse(localStorage.getItem('recipes'));
    console.log(this.recipeList)
     this.actrouter.queryParams.subscribe((input: any) => {
       console.log(input);
      this.recipeData = this.recipeList.filter((data) => data.id == input.id);
      console.log(this.recipeData);
     });
   }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigateByUrl('/receipes');
  }

}
