import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { IOffer } from '../interfaces/offer.interface';

const entityMetadata: EntityMetadataMap = {

    Offer: {

        selectId: (e) => e._id,

        entityName: 'Offer',

        entityDispatcherOptions: {

            optimisticAdd: false,
            optimisticDelete: true,
            //optimisticUpdate: true
        },

        sortComparer: sortByTitle,

        filterFn: (data: IOffer[], argObj) => {
            
            const { date, filter, sort } = argObj;
            const lowercaseFilter = filter ? filter.toLowerCase() : '';

            let filteredData = data.filter((offer) => {
                let datePass = true;

                if (date) {
                    const fromDate = new Date(offer.fromDate);
                    const untilDate = new Date(offer.untilDate);
                    const targetDate = new Date(date);

                    datePass = fromDate <= targetDate && targetDate <= untilDate;
                }

                let filterPass = true;

                if (filter) {
                    const lowercaseTitle = offer.title.toLowerCase();
                    const lowercaseDescription = offer.description.toLowerCase();

                    filterPass = (/[0-9]/.test(filter) && offer.price <= filter) || lowercaseTitle.includes(lowercaseFilter) || lowercaseDescription.includes(lowercaseFilter);
                }

                return datePass && filterPass;
            });

            if (sort === 'price') {

                filteredData = filteredData.sort((a, b) => a.price - b.price);
            }

            return filteredData;
        }
    }
};

const pluralNames = {

    Offer: 'Offer'
};

export const offerEntityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};

export function sortByTitle(a: { title: string }, b: { title: string }): number {
    return a.title.localeCompare(b.title);
}
