import { Injectable, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { buildFormFunction } from "src/app/templates/form/helpers/build-form";
import { DateModel, FromDateModel, UntilDateModel, greaterDateValidation } from "src/app/templates/form/model/date.model";
import { DescriptionModel } from "src/app/templates/form/model/desc.model";
import { ImgModel } from "src/app/templates/form/model/img.model";
import { PriceModel } from "src/app/templates/form/model/price.model";
import { TitleModel } from "src/app/templates/form/model/title.model";

@Injectable({
    providedIn: 'root'
})
export class OfferFormService {

    fb = inject(FormBuilder);  

    createDatePicker() {

        let ModelsContainer = {
            DateModel
        }

        return {
            models: ModelsContainer,
            form: this.fb.group(buildFormFunction(ModelsContainer))
        }
    }

    createOffer() {

        let ModelsData = {
            TitleModel,
            ImgModel,
            DescriptionModel,
            PriceModel,
            FromDateModel,
            UntilDateModel
        }

        return {
            models: ModelsData,
            form: this.fb.group(buildFormFunction(ModelsData),
                {
                    validators: greaterDateValidation(FromDateModel.elementName, UntilDateModel.elementName)
                }),
        }
    }
}