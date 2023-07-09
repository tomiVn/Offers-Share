export interface IOffer {
    
    _id:          string,
    title:        string,
    image:        string,
    description:  string,
    price:        number,
    fromDate:     Date,
    untilDate:    Date,
    creator:      any,
    watchedList:  Array<string> 
}