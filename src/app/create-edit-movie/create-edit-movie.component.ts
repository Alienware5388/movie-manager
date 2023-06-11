import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-edit-movie',
  templateUrl: './create-edit-movie.component.html',
  styleUrls: ['./create-edit-movie.component.css']
})
export class CreateEditMovieComponent {

  movieFormGroup: FormGroup = new FormGroup({
    titleFormControl : new FormControl('aaa', [Validators.required]),
    directorFormControl : new FormControl('',[Validators.required]),
    yearFormControl : new FormControl('',[Validators.required]),
    descriptionFormControl : new FormControl('',[Validators.required]),
  })

  public onSave():void
  {
   /*   let title= this.titleFormControl.getRawValue()!; // ! - reprezinta faptul ca valoarea este diferita de null,
                                                             //      adica ii spune compilatorului ca metoda *.getRawValue() va returna o valoare

      let director=this.directorFormControl.getRawValue()!;

      let year=this.yearFormControl.getRawValue()!;

      let description = this.descriptionFormControl.getRawValue()!;*/



    /**
     * let, var, const --- se folosesc pentru a defini variabile in interiorul metodelor
     *
     * const --- ne ajuta sa definim o variabila cu valoare fixa, valoarea nu se poate schimba
     * let   --- ne ajuta sa definim o variabila intr-un bloc de cod (for sau while loops)
     * var   --- ne ajuta sa definim o variabila la nivel global in metode, putem avea aceeasi variabila definita si de 2 ori
     *
     *
          var age = 20;
          var age= 30;

          let data= "11-06-2023";
          data = "10-06-2023";
     */

    console.log(this.movieFormGroup.value);

  }
}
