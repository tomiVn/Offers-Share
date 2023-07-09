
export function uploadImgFn(this: any){
    
    console.log('[Edit Page Upload Image]');

    let filebutton = this.ref.nativeElement.querySelector('#upload');

    filebutton.click();
    
    this.toastr.info('Types JPEG / JPG / PNG | Limit 1MB!', 'Recommend image to be in quadratic form!');
}