import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  profileForm:FormGroup;
loading:Boolean;

@ViewChild('fileInput') fileInput: ElementRef;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profileForm.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value:reader.result.toString().split(',')[1]
        })
      };
    }
  }
  clearFile(){

  }
  onSubmit(){
    const formModel = this.profileForm.value;
    console.log(formModel);
    this.loading = true;
  }
  createForm(){
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

}
