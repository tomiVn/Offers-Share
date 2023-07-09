import { Injectable, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { BornModel } from "src/app/templates/form/model/born.model";
import { GenderModel } from "src/app/templates/form/model/gender.model";
import { ImgModel } from "src/app/templates/form/model/img.model";
import { NameModel } from "src/app/templates/form/model/name.model";
import { DialCodeModel, PhoneModel } from "src/app/templates/form/model/phoneModel";
import { buildFormFunction } from '../../../templates/form/helpers/build-form';

@Injectable({ providedIn: 'root' })
export class UserFormService {

    fb = inject(FormBuilder);
  
    createUserDetailsForm() {
  
      let ModelsData = {
        NameModel,
        GenderModel,
        BornModel,
        DialCodeModel,
        PhoneModel,
      }
      
      return{
        models: ModelsData,
        form: this.fb.group( buildFormFunction( ModelsData ))    
      } 
    }
  
    createUserAvatarForm(){
  
      let ModelsData = {
        ImgModel,
      }
  
      return{
        models: ModelsData,
        form: this.fb.group( buildFormFunction( ModelsData ))     
      }
    }
  }