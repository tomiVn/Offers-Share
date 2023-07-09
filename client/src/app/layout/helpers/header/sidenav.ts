
export function sideNavInitFn(this: any) {

    this.router.events.subscribe(() => {

        this.observer.observe(['(max-width:787px)'])

            .subscribe((res: any) => {

                if (res?.matches) {

                    this.sideNav.mode = 'over';
                    this.sideNav.close();
                } else {

                    this.sideNav.mode = 'side';
                    this.sideNav.open();
                }

            });

        this.cdr.detectChanges();
    });
}