export function checkWatchListFn(currentUser: any, offer: any){
     
    if(offer.watchedList.length <= 0){
       
       return true;
    }
    
    return offer.watchedList.some((userId: any) => 
        currentUser._id.toString().localeCompare(userId.toString()));
}