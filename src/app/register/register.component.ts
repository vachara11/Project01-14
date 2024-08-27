import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    //FormsGroup
    registerForm!: FormGroup;
    //สร้างตัวแปรไว้เช็คว่า Submit form หรือยัง
    submitted = false;
    //ตัวสำหรับผูกกับฟอร์ม
    userRegister ={
      "fullname":"",
      "email": "",
      "moblie": "",
      "password": "",
    }

    constructor(private formBuilder: FormBuilder) {

     }

     ngOnInit(){
       this.registerForm = this.formBuilder.group({
          fullname:['',[Validators.required]],
          email:['',[Validators.required, Validators.email]],
          mobile:['',[Validators.required]],
          password:['',[Validators.required, Validators.minLength(6)]],
       })
     }

     //ปุ่ม Register
     submitRegister(){
        this.submitted = true;
        // ถ้าฟอร์มไม่ถูกต้อง (Invalid)
        if(this.registerForm.invalid){
          return
        }else{
          this.userRegister.email = this.registerForm.value.email
          this.userRegister.password = this.registerForm.value.password
          if(this.userRegister.email == ""
            && this.userRegister.password == ""
            && this.userRegister.fullname ==""
            && this.userRegister.moblie == ""){
              alert("สมัครสมาชิกสำเร็จ")
          }else{
            alert("ไม่สมัครสมาชิกได้")
          }
        }
     }

     //ปุ่ม reset Form
     resetForm(){
       this.submitted = false;
       this.registerForm.reset();
     }
}
