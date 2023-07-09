
export function sideNavInit(observer: any, sideNav: any, cdr: any) {

    observer
        .observe(['(max-width:787px)'])
        
        .subscribe((res: any) => {

            if (res?.matches) {

                sideNav.mode = 'over';
                sideNav.close();
            } else {

                sideNav.mode = 'side';
                sideNav.open();
            }

        });

    cdr.detectChanges();
}