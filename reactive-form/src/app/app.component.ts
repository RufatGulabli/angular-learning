import { RegisterService } from "./register.service";
import { Component, OnInit } from "@angular/core";
import {
  usernameValidator,
  usernameValidatorArray,
  passwordValidator
} from "./shared/custom.validator";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = this._formBuilder.group(
      {
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            // usernameValidator(/admin/)
            usernameValidatorArray([/password/, /admin/, /rufat/])
          ]
        ],
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
        email: [""],
        subscribe: [false],
        address: this._formBuilder.group({
          city: [""],
          street: [""],
          postalCode: [""]
        }),
        alternate_emails: this._formBuilder.array([])
      },
      { validator: passwordValidator }
    );
    this.registrationForm
      .get("subscribe")
      .valueChanges.subscribe(checkedValue => {
        const email = this.registrationForm.get("email");
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _registerService: RegisterService
  ) {}

  get userName() {
    return this.registrationForm.get("username");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get alternateEmails() {
    return this.registrationForm.get("alternate_emails") as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this._formBuilder.control(""));
  }

  // registrationForm = new FormGroup({
  //   username: new FormControl("RufatGulabli"),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     street: new FormControl(""),
  //     postalCode: new FormControl("")
  //   })
  // });

  loadApi() {
    // all input controls must filled in setValue method
    // this.registrationForm.setValue({
    //   username: "Rufat_Gulabli",
    //   password: "May281987",
    //   confirmPassword: "May281987",
    //   address: {
    //     city: "Baku",
    //     street: "Narimanov str",
    //     postalCode: "AZ1000"
    //   }
    // });
    // to set values only for some input controls, not all of them
    this.registrationForm.patchValue({
      username: "Rufat_Gulabli",
      password: "May281987",
      confirmPassword: "May281987"
    });
  }

  onSubmit() {
    this._registerService
      .register(this.registrationForm.value)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
