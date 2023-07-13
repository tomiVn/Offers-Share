import { response } from "src/app/utils/methods/response";
import { isValidDate } from "./date.validation";

export function filterOfferFn(this: any) {

    this.route.queryParams.subscribe((params: any) => {

        const { date, filter } = params;

        if (date && !isValidDate(date)) {

            console.log('[ Date Error ] - Please write the date in the format YYYY-MM-DD.', date);

            this.router.navigate(['/offer']);
            
            return response.error(this.toastr, '', 
                'Please write the date again in format YYYY-MM-DD.', 'Date Error');
        }

        this.date = date ? new Date(date).toISOString().split('T')[0] : undefined;

        this.valueSearch = filter ? filter : null;

        const options = {

            date: this.date,

            filter: this.valueSearch,

            sort: 'price'
        };

        if(options.date || options.filter){

            console.log('[Filter Options]', options);

            this.offerEntityService.setFilter(options);

            this.offers$ = this.offerEntityService.filteredEntities$;
            
            return
        }
        
        this.offers$ = this.offerEntityService.entities$;
    },
    ((err: any) => {
        
        response.error(this.toastr, err, 'Filter Error');
    }));
}