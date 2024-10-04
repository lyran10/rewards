// import React, {useState, useEffect} from "react"
// import { Offer } from "../types/types"
// const isBrowser = typeof window !== 'undefined';
// export const useSession = () => {

//     const handleSession = (userDetails : {id : number, name : string, contactNo : string, address :string, logo_Url : string} | {aId: number, aName:string, aType:string, citizenModule :boolean, empModule: boolean}) => {
//       if(!isBrowser){
//         if(!sessionStorage.getItem("user")){
//           sessionStorage.setItem("user", JSON.stringify(userDetails))
//         }
//       }
 
//     }

//     const storeEditOffer = (offer : Offer) => {
//       if(!isBrowser){
//         sessionStorage.setItem("offerEdit", JSON.stringify(offer))
//       }
        
//     }
  
//     const removeSession = () =>{
//       if(!isBrowser){
//         sessionStorage.removeItem("user")
//         sessionStorage.removeItem("offerEdit")
//       }
     
//     } 
    
//     const getValue = () => {
//       if(!isBrowser){
//         let values = sessionStorage.getItem("user")
//         if(values !== null) return JSON.parse(values)
//         return null
//       }

//     }

//     const getOfferValues = () => {
//       if(isBrowser){
//         let values = sessionStorage.getItem("offerEdit")
//         if(values !== null) return JSON.parse(values)
//         return null
//       }

//     }

//     const removeOfferValues = () => {
//       if(isBrowser) sessionStorage.removeItem("offerEdit")
//       // if(values !== null) return JSON.parse(values)
//       // return null
//     }
  
//     const storage = {
//       handleSession,
//       removeSession,
//       getValue,
//       storeEditOffer
//     }
  
//     return { handleSession, removeSession, getValue, storeEditOffer, getOfferValues, removeOfferValues }
//   }

import React from "react";
import { Offer } from "../types/types";

const isBrowser = typeof window !== 'undefined';

export const useSession = () => {
  // Handles saving user details in sessionStorage
  const handleSession = (userDetails: {id: number, name: string, contactNo: string, address: string, logo_Url: string} 
    | {aId: number, aName: string, aType: string, citizenModule: boolean, empModule: boolean}) => {
    if (isBrowser) { // Ensure this only runs on the browser
      if (!sessionStorage.getItem("user")) {
        sessionStorage.setItem("user", JSON.stringify(userDetails));
      }
    }
  };

  // Stores the offer in sessionStorage
  const storeEditOffer = (offer: Offer) => {
    if (isBrowser) {
      sessionStorage.setItem("offerEdit", JSON.stringify(offer));
    }
  };

  // Removes the user and offer data from sessionStorage
  const removeSession = () => {
    if (isBrowser) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("offerEdit");
    }
  };

  // Retrieves user data from sessionStorage
  const getValue = () => {
    if (isBrowser) {
      const values = sessionStorage.getItem("user");
      if (values !== null) return JSON.parse(values);
      return null;
    }
    return null; // Server-side, return null
  };

  // Retrieves offer data from sessionStorage
  const getOfferValues = () => {
    if (isBrowser) {
      const values = sessionStorage.getItem("offerEdit");
      if (values !== null) return JSON.parse(values);
      return null;
    }
    return null; // Server-side, return null
  };

  // Removes offer data from sessionStorage
  const removeOfferValues = () => {
    if (isBrowser) {
      sessionStorage.removeItem("offerEdit");
    }
  };

  // Expose the functions to components
  return {
    handleSession,
    removeSession,
    getValue,
    storeEditOffer,
    getOfferValues,
    removeOfferValues,
  };
};
