import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Hite Recipes Project!';
  recipe: FormGroup | any;
  displayVal = '';
  getValue(val : string) {
    this.displayVal = val;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recipe = this.fb.group({
      title: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Title: ', form.value.title);
    
    if (this.recipe.valid) {
      console.log("Form Submitted!");
      this.recipe.reset();
    }
  }

}
