import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { testID } from "../helpers/url-id.helper";
import { ToastrService } from "ngx-toastr";

export const urlIdGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
    const toastr = inject(ToastrService);
    let id       = route.paramMap.get('id');

    let idTest   = testID(id, toastr, router);

        if(!idTest){
            
            router.navigate(['/not-found']);
            return false;
        }

    return true;
};