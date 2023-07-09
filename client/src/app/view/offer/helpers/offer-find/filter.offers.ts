import { isValidDate } from "./date.validation";

export function filterOfferFn(this: any) {

    this.route.queryParams.subscribe((params: any) => {

        const { date, filter } = params;

        if (date && !isValidDate(date)) {

            console.log('[ Date Error ] - Please write the date in the format YYYY-MM-DD.', date);

            this.toastr.error('Please write the date in the format YYYY-MM-DD.', '[ Date Error ]');

            return;
        }

        this.date = date ? new Date(date).toISOString().split('T')[0] : undefined;

        this.valueSearch = filter ? filter : null;

        const options = {

            date: date ? new Date(date).toISOString().split('T')[0] : undefined,

            filter: filter ? filter : undefined,

            sort: 'price'
        };

        console.log('[Filter Options]', options);

        this.offerEntityService.setFilter(options);

        this.offers$ = options.date || options.filter
            ? this.offerEntityService.filteredEntities$ : this.offerEntityService.entities$;

    });
}