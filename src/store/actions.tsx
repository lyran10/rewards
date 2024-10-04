import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import { AddOfferTypes, InputTypes, RegistrationTypes } from "../types/types";
import { URL } from "../types/constants";

const headers = {
     "XApiKey": `${process.env.REACT_APP_API_KEY}`
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers
});
                
export const login = createAsyncThunk(
    "rewards/login",
    async({loginData ,url} : {loginData : InputTypes,url : string}, { rejectWithValue }) => {
        let obj = {}
        if(url === URL.ADMIN_LOGIN) obj = { AUsername : loginData.userName, APassword : loginData.password }
        else obj = { Username : loginData.userName, Password : loginData.password }

        try {
            const { data } = await axiosInstance.post(url, obj, {});
            return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const registration = createAsyncThunk(
    "rewards/registration",
    async(regData : RegistrationTypes, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post(URL.SHOP_REG, regData, {});
            return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const categoryList = createAsyncThunk(
    "rewards/categoryList",
    async(__, {rejectWithValue}) => {

        try {
            const { data : {catagoryLists} } = await axiosInstance.get(URL.CATEGORY_LIST,{});
            return catagoryLists
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const StateList = createAsyncThunk(
    "rewards/stateList",
    async(__, {rejectWithValue}) => {

        try {
            const { data } = await axiosInstance.get(URL.STATE_LIST,{});
            return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const DivisionList = createAsyncThunk(
    "rewards/divisionList",
    async(stateid : string, {rejectWithValue}) => {
        if(stateid){
            try {
                const { data } = await axiosInstance.get(URL.DIVISION_LIST,{
                    headers : {
                     stateid : parseInt(stateid)
                    }
                });
                return data
            } catch (error) {
                let axiosError = error as AxiosError
                return rejectWithValue(axiosError)
            }
        }
       
    }
)

export const DistrictList = createAsyncThunk(
    "rewards/districtList",
    async(divid : string, {rejectWithValue}) => {
        if(divid){
            try {
                const { data } = await axiosInstance.get(URL.DISTRICT_LIST,{
                    headers : {
                     divid : parseInt(divid)
                    }
                });
                return data
            } catch (error) {
                let axiosError = error as AxiosError
                return rejectWithValue(axiosError)
            }
        }
       
    }
)

export const ULBList = createAsyncThunk(
    "rewards/ULBList",
    async(disid : string, {rejectWithValue}) => {
        if(disid){
            try {
                const { data } = await axiosInstance.get(URL.ULB_LIST,{
                    headers : {
                     disid : parseInt(disid)
                    }
                });
                console.log(data)
                return data
            } catch (error) {
                let axiosError = error as AxiosError
                return rejectWithValue(axiosError)
            }
        }
       
    }
)

export const addOffer = createAsyncThunk(
    "rewards/addOffer",
    async({userDetails , offerId} : AddOfferTypes, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.post(URL.ADD_OFFER, userDetails, {
                headers: {
                    ...headers,
                    "offerId": offerId
                }
            });
          return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const getOfferDetails = createAsyncThunk(
    "rewards/getOfferDetails",
    async(id : number, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get(URL.GET_OFFER_DETAILS,{
                headers :  {
                    ...headers,
                    subctaid : id
                }, 
            });
          return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const getRedeemOffers = createAsyncThunk(
    "rewards/getRedeemOffers",
    async(id : number, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get(URL.GET_REDEEM_OFFERS,{
                headers :  {
                    ...headers,
                    subctaid : id
                }, 
            });
          return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const claimOffer = createAsyncThunk(
    "rewards/claimOffer",
    async(claim : {WalletId : string, SubCatId : number | string, offerid : number | string }, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.post(URL.CLAIM_OFFER,claim,{});
            return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const getClaimOffers = createAsyncThunk(
    "rewards/getClaimOffers",
    async(id : number, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get(URL.GET_CLAIM_OFFERS,{
                headers :  {
                    ...headers,
                    subctaid : id
                }, 
            });
          return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)

export const getDashboardDetails = createAsyncThunk(
    "rewards/getDashboardDetails",
    async(id : number, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get(URL.GET_DASHBOARD_DETAILS,{
                headers :  {
                    ...headers,
                    subctaid : id
                }, 
            });
          return data
        } catch (error) {
            let axiosError = error as AxiosError
            return rejectWithValue(axiosError)
        }
    }
)