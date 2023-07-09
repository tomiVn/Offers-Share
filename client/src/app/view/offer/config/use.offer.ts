import { inject } from "@angular/core";
import { OfferEntityService } from "../services/offer-entity.service";
import { createCollectionServiceFn } from "src/app/utils/service/collection.service";
import { ToastrService } from "ngx-toastr";
import { OfferFormService } from "../services/offer-form.service";

export const useOfferFn = () => {
      
    const offerEntityService     = inject(OfferEntityService);
    const offerCollectionService = createCollectionServiceFn('Offer');
    const offerFormService       = inject(OfferFormService);
    const toastr                 = inject(ToastrService);
    
    return {

        serviceEntity:            offerEntityService,
        serviceCollection:        offerCollectionService,
        serviceForm:              offerFormService,
        toastr:                   toastr
    }
    
}