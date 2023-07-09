
export function cancelImgFn(this: any){

    let avatarElement     = this.ref.nativeElement.querySelector('.avatar');
    avatarElement.src     = this.user?.avatar;
    this.showUpdateButton = false;
    
}