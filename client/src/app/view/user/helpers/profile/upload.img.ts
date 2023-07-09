import { response } from "src/app/utils/methods/response";

export function uploadImgFn(this: any){

    const filebutton = this.ref.nativeElement.querySelector('#upload');

    filebutton.click(); 

    response.info(this.toastr, 'Please select image with size not bigger than 1MB!',
        'Image types that we accept: JPEG, JPG, PNG.');
}