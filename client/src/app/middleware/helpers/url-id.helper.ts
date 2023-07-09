
export function testID(id: any, toastr: any, router: any){

    const regex = new RegExp('^[0-9a-f]{24}$');
    
    if (!regex.test(id)) {

        toastr.error('URL Id is not valid!', '[Error ID!]');
        router.navigate(['/']);
        return false;
    }
    return true;
}