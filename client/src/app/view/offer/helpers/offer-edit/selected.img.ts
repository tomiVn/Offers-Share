
export function selectedImgFn(this: any, img: any){
    
    this.uploadButtonVisibility   = false;
    this.uploadImage              = img;

    let button = this.ref.nativeElement.querySelector('#upload');

    if(button){

        button.classList.add('red');
    }
    
}