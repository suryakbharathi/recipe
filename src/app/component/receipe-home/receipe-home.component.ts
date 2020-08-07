import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceipeService } from '../../services/receipe.service';

@Component({
  selector: 'app-receipe-home',
  templateUrl: './receipe-home.component.html',
  styleUrls: ['./receipe-home.component.css']
})
export class ReceipeHomeComponent implements OnInit {
  recipeList: any = [];
  originalList: any = [];
  searchData: any = '';
  suggestedList: any;
  constructor(public router: Router, public receipe: ReceipeService) {
    this.receipe.getReceipeList().subscribe(response => {
      this.recipeList = response;
      this.originalList = response;
      localStorage.setItem('recipes', JSON.stringify(response));
    });
   }

  ngOnInit(): void {
    // this.router.navigateByUrl('/details');
  }
  searchRecipe() {
      if (this.searchData) {
        this.recipeList = this.originalList.filter((data) => data.name.toLowerCase().includes(this.searchData.toLowerCase()));
      } else {
        this.recipeList = this.originalList;
      }
      this.suggestedList = this.recipeList.map((data) => data.name);
  }

  onSearchback(event) {
    this.searchRecipe();
  }

  goToDetails(receipe) {
    this.router.navigate(['details'], { queryParams: { id: receipe.id } })
  }

}
