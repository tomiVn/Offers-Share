import { inject } from "@angular/core";
import { UserEntityService } from "../services/user-entity.service";
import { createCollectionServiceFn } from "src/app/utils/service/collection.service";
import { ToastrService } from "ngx-toastr";
import { UserFormService } from "../services/user-form.service";

export const useUserFn = () => {

    const userEntityService     = inject(UserEntityService);
    const userCollectionService = createCollectionServiceFn('User');
    const userFormService       = inject(UserFormService);
    const toastr                = inject(ToastrService);
    
    return {

        serviceEntity:            userEntityService,
        serviceCollection:        userCollectionService,
        serviceForm:              userFormService,
        toastr:                   toastr
    }
}