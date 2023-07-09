import { EmailValidator } from "@angular/forms";

export interface IRegister {
    
    name:       string;
    email:      EmailValidator;
    password:   string;
    repeatPass: string;
}