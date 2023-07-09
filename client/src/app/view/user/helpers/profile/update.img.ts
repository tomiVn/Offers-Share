import { FormDataAppend } from "src/app/templates/form/helpers/form-data-append";
import { catchError, of, take, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function updateImgFn(this: any) {

    const data = FormDataAppend(this.form.value);
    const _id  = this.user._id;
    
    this.userEntityService.updateOne(_id, data)

        .pipe(

            take(1),

            tap((res: any) => {

                if(res){

                    this.user             = res[0];

                    this.showUpdateButton = false;

                    response.success(this.toastr, 'Successfull request', 'Avatar is updated.');
                }
                else{

                    throw new Error('We have receive Error! Please excuse us, your request is not successfull!')
                }
                
            }),
            catchError((err) =>{

                response.error(this.toastr, err, 'We have reseive error! Please try again!')
                
                return of([]);

            })).subscribe();
}