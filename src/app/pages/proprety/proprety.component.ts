import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proprety',
  templateUrl: './proprety.component.html',
  styles: [],
})
export class PropretyComponent implements OnInit {
  data: any = {
    id: '',
  };
  property: any = {
    image:
      'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
  };

  constructor(private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.activatedroute.queryParams.subscribe((params) => {
      this.data = params;
    });
  }
}
