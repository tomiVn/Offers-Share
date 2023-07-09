import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { checkWatchListFn } from '../../helpers/offer-details/watch-list.offer';
import { addUserToWatchListFn } from '../../helpers/offer-details/add.user';
import { removeUserFromWatchListFn } from '../../helpers/offer-details/remove.user';
import { deleteOfferFn } from '../../helpers/offer-details/delete.offer';
import { useAuthFn } from 'src/app/view/auth/config/use.auth';
import { useOfferFn } from '../../config/use.offer';
import { isOwner } from '../../helpers/offer-details/owner.offer';
import { currentOfferFn } from '../../helpers/offer-details/current.offer';
import { loadUserFn } from '../../helpers/offer-details/load.user';
import { useUserFn } from 'src/app/view/user/config/use.user';

@Component({
    selector: 'app-offer-details',
    templateUrl: './offer-details.component.html',
    styleUrls: ['./offer-details.component.css']
})

export class OfferDetailsComponent implements OnInit, OnDestroy {

    route                          = inject(ActivatedRoute);
    router                         = inject(Router);

    useAuth                        = useAuthFn();
    collectionAuthService          = this.useAuth.serviceCollection;

    useUser                        = useUserFn();
    userEntityService              = this.useUser.serviceEntity;

    useOffer                       = useOfferFn();
    offerEntityService             = this.useOffer.serviceEntity;
    collectionOfferService         = this.useOffer.serviceCollection;
    toastr                         = this.useOffer.toastr; 
    isAlive                        = true; 
    
    currentOffer:  any;
    isUser:        boolean         | undefined;
    currentUser:   any;

    ngOnInit(): void {
        
        currentOfferFn.call(this);
        
        loadUserFn.call(this);
    }

    addToList      = (...rest: any[]) => addUserToWatchListFn.call(this, ...rest as [any, any]);
        
    removeFromList = (...rest: any[]) => removeUserFromWatchListFn.call(this, ...rest as [any, any]);

    del            = (offer: any)     => deleteOfferFn.call(this, offer);

    checkList      = (...rest: any[]) => checkWatchListFn(...rest as [any, any]);

    owner          = (creator: any)   => isOwner(creator, this?.currentUser);

    ngOnDestroy() {
        this.isAlive = false;
    }
}