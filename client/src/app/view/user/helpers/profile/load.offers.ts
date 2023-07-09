import { catchError, map, of, pipe, switchMap, tap } from "rxjs";
import { response } from "src/app/utils/methods/response";

export function loadUserOffers(this: any) {

    let watchedOffers = this.user?.watched_offers.length > 0 ? this.user?.watched_offers : [];

    let createdOffers = this.user?.created_offers.length > 0 ? this.user?.created_offers : [];

    if (watchedOffers.length > 0 || createdOffers.length > 0) {

        this.offerCollectionService.entities$

            .pipe(

                switchMap((offers: any) => {

                    if (offers.length === 0) {

                        return this.offerEntityService.getAll();
                    } else {
                        
                        return of(offers);
                    }
                }),

                tap((res: any) => {

                    if (watchedOffers.length > 0) {

                        res.forEach((r: any) => {

                            watchedOffers.forEach((w: any) => {

                                if (r?._id === w?._id || r?._id === w) {

                                    this.watchedOffers.push(r);
                                }
                            });
                        })
                    }

                    if (createdOffers.length > 0) {

                        res.forEach((r: any) => {

                            createdOffers.forEach((w: any) => {

                                if (r?._id === w?._id || r?._id === w) {

                                    this.createdOffers.push(r);
                                }
                            });
                        })
                    }
                }),
                catchError((err: any) => {
                    
                    response.error(this.toastr, err, 'We have reseive some error!', 
                        'Please excuse us. Will be helpfull for us if you send feedback.')

                    return of([])
                })
            )
            .subscribe()
    }


}