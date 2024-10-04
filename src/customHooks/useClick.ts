import { FormEvent } from 'react'
import { InputTypes, Offer } from '../types/types'
import { useRedux } from './useRedux'
import { addOffer, claimOffer, login, registration } from '../store/actions'
import { useValidation } from './useValidation'
import { getClaimInfo, getViewInfo, setBtnLoader, setConfirmClaim, setInputError, setLogoutPopup, setMsg, setNoOffer, setViewData } from '../store/reducer'
import { ERRORS, URL } from '../types/constants'
import { useSession } from './useSession'
import { useNavigate,useLocation } from 'react-router-dom'
import { isActive } from '../dashComponents/offerDetails/offerDetails'

export const useClick = () => {
const location = useLocation().pathname.split("/")[1]

const {storeEditOffer} = useSession()
const navigate = useNavigate()
const {getValue, getOfferValues, removeSession } = useSession()
const {dispatch} = useRedux()
const {loginValidation, registrationValidation, addOffersValidation, dateFilterValidation} = useValidation()

// login
const handleLogin = async(e : FormEvent, data : InputTypes) => {
e.preventDefault()
dispatch(setBtnLoader(true))

if(!loginValidation(data)){
  dispatch(setMsg({status : "error", content : ERRORS.FIELD_REQIURED}))
  dispatch(setInputError(true))
  dispatch(setBtnLoader(false))
  return
}

if(loginValidation(data) === "less then min"){
  dispatch(setMsg({status : "error", content : ERRORS.PASSWORD_LENGTH}))
  dispatch(setBtnLoader(false))
  return
}

if(location.toLowerCase() === "admin") await dispatch(login({loginData : data as InputTypes, url : URL.ADMIN_LOGIN}))
else await dispatch(login({loginData : data as InputTypes, url : URL.SHOP_LOGIN}))

dispatch(setBtnLoader(false))
}

// registration
const handleRegistration = async(e : FormEvent,data : InputTypes) => {
    e.preventDefault()
    dispatch(setBtnLoader(true))
    
    if(!registrationValidation(data)){
      dispatch(setMsg({status : "error", content : ERRORS.FIELD_REQIURED}))
      dispatch(setInputError(true))
      dispatch(setBtnLoader(false))
      return
    }

    if(registrationValidation(data) === "noMatch"){
      dispatch(setMsg({status : "error", content : ERRORS.NO_MATCH}))
      dispatch(setBtnLoader(false))
      return
    }

    let formData = new FormData();

    let instance = formData
    console.log(data)
    // Append each property manually
    instance.append('Name', data.name);
    instance.append('Username', data.userName);
    instance.append('Password', data.password);
    instance.append('Contact_No', data.mobileNo);
    instance.append('Address', data.address);
    instance.append('PinCode', `${data.pinCode}`);
    instance.append('Lat', `${data.latitude}`);
    instance.append('Long', `${data.longitude}`);
    instance.append('CatId', `${data.catId}`);
    instance.append('ShopLogoImg', data.logo ? data.logo : data.draggedImage);
    instance.append('stateid', `${data.stateid}`);
    instance.append('divid', `${data.divid}`);
    instance.append('disid', `${data.disid}`);
    instance.append('appid', `${data.appid}`);

    await dispatch(registration(instance as any))
    dispatch(setBtnLoader(false))
    }

// add offers
const handleAddOffers = async(e : FormEvent,data : InputTypes) => {
e.preventDefault()
dispatch(setBtnLoader(true))

if(!addOffersValidation(data)){
  dispatch(setMsg({status : "error", content : ERRORS.FIELD_REQIURED}))
  dispatch(setInputError(true))
  dispatch(setBtnLoader(false))
  return
}

const sendImage = (logo : any, dragged : any) => {

    if(dragged) return dragged
    if(logo && typeof(logo) === "string") return null
    return logo
}

let formData = new FormData();
let instance = formData

console.log(data)

// Append each property manually
instance.append('Subcatid', getValue().id);
instance.append('OfferTitle', data.OfferTitle);
instance.append('OfferDiscount', data.OfferDiscount);
instance.append('Start_Datetime', `${data.start_Date} ${data.start_Time}${getOfferValues() ? "" : ":00"}`);
instance.append('End_Datetime', `${data.end_Date} ${data.end_Time}${getOfferValues() ? "" : ":00"}`);
instance.append('Offer_Desc', data.Offer_Desc);
instance.append('Offer_terms', `${data.Offer_terms}`);
instance.append('Req_Coins', `${data.Req_Coins}`);
instance.append('IsActive', `${data.isActive}`);
instance.append('OfferImg', sendImage(data.logo, data.draggedImage));
instance.append('CouponCode', `${data.CouponCode}`);
instance.append('updateImg', `${!getOfferValues()  ? false : getOfferValues() && (data.logo && typeof(data.logo) === "string") ? false : true}`);

await dispatch(addOffer({userDetails :instance as any, offerId : getOfferValues() ? getOfferValues().offerId : 0}))
dispatch(setBtnLoader(false))
}

const generateCoupon = (e : FormEvent, data : InputTypes, setData : React.Dispatch<React.SetStateAction<InputTypes>>) => {
  e.preventDefault()
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let coupon = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    coupon += characters[randomIndex];
  }

  setData({...data, CouponCode : coupon})
}

// offer details
const navigateToEdit = (data : Offer) => {
  if(!isActive(data.offer_IsActive, data.offer_EndTime)) return dispatch(setNoOffer(true))
    storeEditOffer(data)
    navigate("/cms/offers/addOffers")
}

const navigateToview = (data : Offer) => {
  dispatch(setViewData(true))
  dispatch(getViewInfo(data))
}

// redeemOffer
const confirmClaim = (claim : Offer) => {
dispatch(setConfirmClaim(true))
dispatch(getClaimInfo(claim))
}

const claim = async(claim : any) => {
  dispatch(setBtnLoader(true))
  await dispatch(claimOffer({WalletId : claim.walletId, SubCatId : getValue().id,  offerid : claim.offerid,}))
  dispatch(setBtnLoader(false))
  dispatch(setConfirmClaim(false))
  }


//nav
const logout = () => {
  removeSession()
  if(location.toLowerCase() === "admin") navigate("/admin")
  else navigate("/")
  dispatch(setMsg({status : "success", content : "Logged out Successfully."}))
  dispatch(setLogoutPopup(false))
}

  return {
     handleLogin,
     handleRegistration,
     handleAddOffers,
     generateCoupon,
     navigateToEdit,
     navigateToview,
     confirmClaim,
     claim,
     logout
    }
}

// const urlToFile = async(url : string, filename : string) => {
//   const response = await axios.get(url, { responseType: 'arraybuffer' });
//   const mimeType = response.headers['content-type'] || (url.endsWith('.png') ? 'image/png' : 'image/jpeg');
  
//   const blob = new Blob([response.data], { type: mimeType });
//   return new File([blob], filename, { type: mimeType });
// }
