// export type LoginInputTypes = {
//     userName : string,
//     password : string
// }

export type RegistrationTypes = {
    Name : string,
    Username : string,
    Password : string,
    Contact_No : string,
    Address : string,
    PinCode : string | number,
    Lat : string | number,
    Long : string | number,
    CatId : string,
    ShopLogoImg : any,
    stateid : string,
    divid : string,
    disid : string,
    appid : string,

}

export type AddOfferTypes = {
userDetails : {
    Subcatid : number;
    OfferTitle : string;
    OfferDiscount : string;
    Start_Datetime : string;
    End_Datetime : string;
    Offer_Desc : string;
    Offer_terms : string;
    Req_Coins : string;
    IsActive : string;
    OfferImg : string;
    CouponCode : string
},
offerId : number

}

export type InputTypes = {
    // LoginInputTypes? : LoginInputTypes,
    // RegistrationInputTypes? : RegistrationInputTypes

    // login and registration
    name : string,
    userName : string,
    password : string,
    confirmPassword : string,
    mobileNo : string,
    address : string,
    pinCode : string,
    latitude : number,
    longitude : number,
    catId : string,
    logo : any,
    stateid : string,
    divid : string,
    disid : string,
    appid : string,

    // add offers
    OfferTitle : string,
    OfferDiscount : string,
    start_Date : string,
    end_Date : string,
    start_Time : number | string,
    end_Time : number | string,
    Offer_Desc : string,
    Offer_terms : string,
    Req_Coins : string,
    draggedImage : any,
    CouponCode : string,
    isActive : string

    // offer detail
    search : string
}

// offerDetails

export type Offer = {
    coupen_Code : string,
    offerDiscount : string
    offerId : number
    offerImgUrl : string
    offerTitle : string
    offer_EndTime : string
    offer_IsActive : boolean
    offer_StartTime : string,
    req_Points : number,
    offerDesc : string,
    offerTerms : string
}

// Redux

export type State = {
    // nav
    logoutPopup : boolean
    // login state
    login : boolean | null,
    userDetails : {id : number, name : string, contactNo : string, address :string, logo_Url : string} | null,
    msg : {status : string, content : string},
    coords : {lat : number,lon : number},
    btnLoader : boolean
    popOverId : string,
    // dashboard state
    pageId : string
    header : string,
    subHeader : string,
    startDate : Date | string | null
    imgLoader : boolean
    // add offers
    // editOffer : Offer | null
    param : string | null,
    inputError : boolean,
    noOffer : boolean
    // offer Details
    viewData : boolean,
    viewInfo : Offer | null
    //redeem Offer
    confirmClaim : boolean
    claimInfo : Offer | null
}