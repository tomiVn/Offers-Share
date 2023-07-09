
export const response = {

    success: function (toastr: any, aditionalMessage: any, optionalMessage: any = '') {

        toastr.success(optionalMessage, aditionalMessage);
    },

    error: function (toastr: any, err: any, aditionalMessage: any, optionalMessage: any = '') {

        const errors = err?.error?.error?.payload?.data || [err?.message];

        if (errors?.length > 0) {

            errors.forEach((error: any) => {

                toastr.error(`${error}`, aditionalMessage);
            });

        } else {

            toastr.error(optionalMessage, aditionalMessage);
        }
    },

    warning: function (toastr: any, aditionalMessage: any, optionalMessage: any = ''){
        
        toastr.warning(optionalMessage, aditionalMessage)
    },

    info: function (toastr: any, aditionalMessage: any, optionalMessage: any = ''){
        
        toastr.warning(optionalMessage, aditionalMessage)
    },

    


}
