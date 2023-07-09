import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {

    Auth: {

        selectId: (u) => u._id,

        entityName: 'Auth',

        entityDispatcherOptions: {
            //optimisticAdd: true
        }
    }
};

const pluralNames = {

    Auth: 'Auth'
};

export const authEntityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};

