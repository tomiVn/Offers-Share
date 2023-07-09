import { findWithQuery } from "../helper/find-with-query.offer.js";

export function findOffer(offerService, errorMethodsObj, responseFn) {
//ToDo Error when user is logged in
    return async (req, res) => {
    
        console.log('[API Find Offers Req]');
        
        try {

            let _optionsObj = {

                _populate: {
                    path: 'creator',
                    select: ['name', 'created_offers'] 
                }
            }

            const arg = [req, res, _optionsObj, offerService, errorMethodsObj, responseFn];

            const _id = req?.params?.id;

            if (_id) {
               
               return offerService.findOne(_id, ...arg);
            }

            if (Object.keys(req.query).length > 0) {
              
              return  findWithQuery(...arg);
            }
 
            const _filter = {};

            let data = await offerService.find(_filter, _optionsObj);

            return res.status(200)
                .json(responseFn(data, '[Valid request!] - Offer/s found.'));

        } catch (error) {
            
            const errors = errorMethodsObj.parseErrorsFn(error);
            
            if(!res.headersSent){
                return res.status(400)
                .json(responseFn(errors, '[Invalid request!] - Offer/s not found!'))
            }           
        }
    }
}