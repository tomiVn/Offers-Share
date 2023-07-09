import { inject } from "@angular/core";
import { AuthTokenService } from "../services/auth-token.service";
import { AuthEntityService } from "../services/auth-entity.service";
import { ToastrService } from "ngx-toastr";
import { createCollectionServiceFn } from "src/app/utils/service/collection.service";
import { AuthFormService } from "../services/auth-form.service";


export const useAuthFn = () => {
    
    const authTokenService      = inject(AuthTokenService);
    const authEntityService     = inject(AuthEntityService);
    const authCollectionService = createCollectionServiceFn('Auth');
    const authFormService       = inject(AuthFormService);
    const toastr                = inject(ToastrService);
    
    return {
        serviceToken:             authTokenService,
        serviceEntity:            authEntityService,
        serviceCollection:        authCollectionService,
        serviceForm:              authFormService,
        toastr:                   toastr
    }
    
}