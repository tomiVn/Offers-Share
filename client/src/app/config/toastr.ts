import { ToastrModule } from "ngx-toastr";

export const toastr =
    ToastrModule.forRoot({
        positionClass: "toast-bottom-center",
        preventDuplicates: true
    })
