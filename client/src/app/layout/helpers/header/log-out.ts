
export function logOutFn(this: any) {
    
        this.router.navigate(['/']);

        this.authTokenService.deleteCookieToken();
    
    if (!this.authTokenService.checkToken()) {

        this.collectionAuthService.clearCache();
        this.userCollectionService.clearCache();

        this.toastr.success(`Hope to see you again.`,
            'You have successfully been logged out.');
        
        return this.collectionAuthService.count$ === 0 && this.collectionUserService.count$ === 0;
      
    } else {

        console.log('[Log-Out]', 'Some error here');

        this.toastr.error('Something happen and request is not successfull!', '[Log-out Error]');
        
        return false;
    }
}