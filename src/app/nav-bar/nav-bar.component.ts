import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public pokemonSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  public isMenuCollapsed = true;

  ngOnInit(): void {
    this.pokemonSearchForm = this.formBuilder.group({
      query: ['']
    });
  }

  sendToAPIXU(formValues) {
    const query = formValues.query.toLowerCase();
    console.log(query);
    this.router.navigate(['pokedex/' + query]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err); // when there's an error
    });
  }
}
