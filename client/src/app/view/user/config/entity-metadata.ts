import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {

    User: {

        selectId: (e) => e._id,

        entityName: 'User',

        entityDispatcherOptions: {

            optimisticAdd: false,
            optimisticDelete: true,
            optimisticUpdate: false
        },
    }
};

const pluralNames = {

    User: 'User'
};

export const userEntityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};