import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types/types";
import { addOffer, categoryList, claimOffer, getOfferDetails, getRedeemOffers, login, registration } from "./actions";

const initialState: State = {
   // nav
    logoutPopup : false,
  // login state
    login : true,
    userDetails : null,
    msg : {status : "", content : ""},
    coords : {lat : 0,lon : 0},
    btnLoader : false,
    popOverId : "",
  // dashboard
  pageId : "dashboard",
  header : "Dashboard",
  subHeader : "Home",
  startDate : null,
  imgLoader : false,
   // addOffers
  //  editOffer : null,
   param : null,
   inputError : false,
   noOffer : false,
   // offerDetails
   viewData : false,
   viewInfo : null,
   // redeem offers
   confirmClaim : false,
   claimInfo : null
};

export const loginState = createSlice({
  name: "State",
  initialState,
  reducers: {
  //  setMsg: (state, action) => { state.msg = action.payload; },
   setBtnLoader: (state, action) => { state.btnLoader = action.payload;},
   toggleLogin : (state, action) => { state.login = action.payload},
   setPopoverId : (state, action) => { state.popOverId = action.payload},
   getCoord : (state, action) => { state.coords = action.payload},
   setInputError : (state, action) => { state.inputError = action.payload},
  //  removeUserDetails : (state, action) => { state.userDetails = action.payload}
  },

//   extraReducers: (builder) => {
// // fullfilled
//     builder.addCase(categoryList.fulfilled, (state, action) => {
        
//     });

//     builder.addCase(registration.fulfilled, (state, action) => {
//       state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
//   });

//   builder.addCase(login.fulfilled, (state, action) => {
//     state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
//     state.userDetails = action.payload.data
// });


// // Rejected
//   builder.addCase(categoryList.rejected, (state, action : any) => {
//     state.msg = {status : "error" , content : action.payload.message}
// });

// builder.addCase(registration.rejected, (state, action : any) => {
//   state.msg = {status : "error" , content : action.payload.message}
// });

// builder.addCase(login.rejected, (state, action : any) => {
//   state.msg = {status : "error" , content : action.payload.message}
// });

//   }
});

export const dataState = createSlice({
  name: "State",
  initialState,
  reducers: {
   setHeader : (state, action) => { state.header = action.payload},
   setSubHeader : (state, action) => { state.subHeader = action.payload},
   setStartDate : (state, action) => { state.startDate = action.payload},
  //  setEditOffer : (state, action) => { state.editOffer = action.payload},
   setParam : (state, action) => { state.param = action.payload},
   setPageId : (state, action) => { state.pageId = action.payload},
   setImgLoading : (state, action) => { state.imgLoader = action.payload},
   setNoOffer : (state, action) => { state.noOffer = action.payload},
   setViewData : (state, action) => { state.viewData = action.payload},
   getViewInfo : (state, action) => { state.viewInfo = action.payload},
   setConfirmClaim : (state, action) => { state.confirmClaim = action.payload},
   getClaimInfo : (state, action) => { state.claimInfo = action.payload},
   setLogoutPopup : (state, action) => { state.logoutPopup = action.payload},
  },
  // extraReducers: (builder) => {
  //   // fullfilled
  //   builder.addCase(addOffer.fulfilled, (state, action) => {
  //     state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
  //   });

  //   // Rejected
  //     builder.addCase(addOffer.rejected, (state, action : any) => {
  //       state.msg = {status : "error" , content : action.payload.message}
  //   });  

  //   builder.addCase(getOfferDetails.rejected, (state, action : any) => {
  //     state.msg = {status : "error" , content : action.payload.message}
  // });  
  // }
});

export const apiState = createSlice({
  name: "State",
  initialState,
  reducers: {
    setMsg: (state, action) => { state.msg = action.payload; },
    removeUserDetails : (state, action) => { state.userDetails = action.payload}
  },
  extraReducers: (builder) => {
    // fullfilled
    builder.addCase(claimOffer.fulfilled, (state, action) => {
      state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
    });
    builder.addCase(categoryList.fulfilled, (state, action) => {
        
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
  });

  builder.addCase(login.fulfilled, (state, action) => {
    state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
    if(action.payload.status !== "Error") state.userDetails = action.payload.data
});

    builder.addCase(addOffer.fulfilled, (state, action) => {
      state.msg = {status : action.payload.status === "Error" ? "error" : "success", content : action.payload.message}
    });

    // Rejected
      builder.addCase(addOffer.rejected, (state, action : any) => {
        state.msg = {status : "error" , content : action.payload.message}
    });  

    builder.addCase(getOfferDetails.rejected, (state, action : any) => {
      state.msg = {status : "error" , content : action.payload.message}
  });  

  builder.addCase(categoryList.rejected, (state, action : any) => {
    state.msg = {status : "error" , content : action.payload.message}
});

builder.addCase(registration.rejected, (state, action : any) => {
  state.msg = {status : "error" , content : action.payload.message}
});

builder.addCase(login.rejected, (state, action : any) => {
  state.msg = {status : "error" , content : action.payload.message}
});
  }
});

export const {
  // setMsg,
  toggleLogin,
  setBtnLoader,
  getCoord,
  setPopoverId,
  setInputError
  } = loginState.actions;

  export const {
    // nav
    setLogoutPopup,
    setHeader,
    setSubHeader,
    setStartDate,
    setImgLoading,
    // setEditOffer,
    setParam,
    setPageId,
    setNoOffer,
    setViewData,
    getViewInfo,
    setConfirmClaim,
    getClaimInfo,
    } = dataState.actions;

    export const {
      setMsg,
      removeUserDetails,
      } = apiState.actions;