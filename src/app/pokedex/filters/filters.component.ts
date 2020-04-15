import { Component, OnInit, Input } from '@angular/core';
import { TypeDetails } from '../pokemon.models';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() type: TypeDetails;
  typeName: string;

  constructor() { }

  ngOnInit(): void {
    this.typeName = this.type.name[0].toUpperCase() + this.type.name.slice(1);
  }

}
