import { Injectable, inject } from '@angular/core';
import { EmailModel } from '../../../templates/form/model/email.model';
import { PasswordModel, RepeatPasswordModel, isPasswordsMatch } from '../../../templates/form/model/password.model';
import { FormBuilder } from '@angular/forms';
import { buildFormFunction } from '../../../templates/form/helpers/build-form';
import { NameModel } from '../../../templates/form/model/name.model';

@Injectable({ providedIn: 'root' })
export class AuthFormService {

  fb = inject(FormBuilder);

  createLogInForm() {

    let ModelsData = {
      EmailModel,
      PasswordModel
    }

    return {
      models: ModelsData,
      form: this.fb.group(buildFormFunction(ModelsData)),
    }
  }

  createRegisterForm() {

    let ModelsData = {
      NameModel,
      EmailModel,
      PasswordModel,
      RepeatPasswordModel,
    }

    return {
      models: ModelsData,
      form: this.fb.group(buildFormFunction(ModelsData),
      { 
        validators: isPasswordsMatch( PasswordModel.elementName, RepeatPasswordModel.elementName )
      }),
    }
  }
}