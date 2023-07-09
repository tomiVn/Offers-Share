
export function selectedImgFn(this: any, img: any) {
    
    this.showUpdateButton = !!(this.form.valid && this.form.controls[this.FormModels['ImgModel'].elementName].value);

    if (img) {
        
        let avatarElement = this.ref.nativeElement.querySelector('.avatar');

        avatarElement.src = img;
    }
}