import React from 'react'
import { useShowAndHidePass } from '../customHooks/useShowAndHidePass'
import { useColors } from '../customHooks/useColors'
import { InputValidator } from './registration/inputValidator'
import { InputTypes } from '../types/types'
import { UploadButton } from './uploadButton'
import { DragUpload } from './dragUpload'
import { GenerateCoupon } from './generateCoupon'
import { Select } from './select'
import { useRedux } from '../customHooks/useRedux'
import { Radio } from './radio'
import { useLocation } from 'react-router-dom'

export type InputType = {
    text? : string,
    type : string,
    name : string,
    placeholder : string,
    icon? : string | JSX.Element,
    showIcon? : JSX.Element,
    hideIcon? : JSX.Element,
    value? :string | undefined,
    label? : string ,
    span? : string,
    valid? : boolean,
    validMsg? : string,
    invalidMsg? : string,
    locationButton? : JSX.Element,
    viewButton? : JSX.Element,
    textArea? : JSX.Element,
    selectData? : any[],
    radioInputs : any[],
    content? :string,
    itemId : string
}

 type Props = {
    inputs : InputType[],
    handleChange : (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    width : string,
    py : string,
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>,
    handleClick? : () => void
}

export const Inputs = ({ inputs, handleChange, width, py, data, setData  } : Props) => {
  const location = useLocation()
  const {selector} = useRedux()
  const {startDate} = selector(state => state.data)
  const {inputError} = selector(state => state.loginData)
  const {show, showPass, id ,showMsg, removeMsg, clickShow} = useShowAndHidePass()
  const {textColors} = useColors()
  const date = new Date

  const starDateEnable = (start_date : string) => {
    let date  = new Date
    let startDate = new Date(start_date)

    if(startDate < date) return true
    return false
  }

      const showPassword = (name : string, hideIcon : JSX.Element | undefined, showIcon : JSX.Element | undefined) => {
        return(
               <>
                  {
                name === "password" || name === "confirmPassword"
                ?
                <>
                {/* border border-t-[#d9dad8] border-b-[#d9dad8] border-l-[#f1f1f1] border-r-[#f1f1f1] */}
                  <div onMouseOver={() => showMsg(name)} onMouseLeave={removeMsg} onClick={() => clickShow(name) } className='flex justify-center items-center absolute p-1 w-[10%] h-full right-1 top-0 duration-300 cursor-pointer'>
                  {!show[name]? hideIcon : showIcon}
                  </div>
                  <div className={`flex justify-center font-bold items-center absolute px-2 py-0 rounded-md h-full right-1 bottom-[100%] text-[10px] bg-[#f1f1f1] duration-300 shadow-chart ${showPass && id === name ? "opacity-[1] z-[999]" : "opacity-[0] z-[-1]"}`}>
                  {!show[name] ? "Show Password" : "Hide Password"}
                  </div>
                </>
                :
                null
              }
               </>
        )
      }
      
    return (
    <>
          {

          inputs.map(({ icon, type, placeholder, name, showIcon, hideIcon, value, label, span, valid, validMsg, invalidMsg, locationButton, selectData, viewButton, textArea, radioInputs,content, itemId}, index) => {
            return (
              
           <label key={index} className={`relative ${width} group ${span}`}>
            {/* ${textColors.purple} */}
            { label 
            ? 
            <div className={`font-semibold text-[13px] absolute ${type === "textarea" ? "bottom-[100%]" : "bottom-[115%]"} flex gap-1`}>
               <span>{label}</span>
               {inputError ? <span className={`text-[12px] text-[#dc2626]`}>*</span> : null}
            </div>
            : 
            null
            }

            {
              type
               ?
              type === "textarea"
               ?
              //  (e) => setData({...data, [name] : e.target.value.trim()})
              textArea
              // <textarea value={data[name as keyof InputTypes]} onChange={handleChange} className={`${inputError && data[name as keyof InputTypes] === "" ? "border-[#dc2626]" : "border-[#ddd6fe]"} border outline-none text-[13px] w-full p-2 ${textColors.grayish_blue}`} rows={1} name={name} id={name}></textarea>
               :
               type === "select"
               ?
               <Select setData={setData} data={data} id={itemId} content={content || ""} name={name} value={value || ""} selectData={selectData || []} width='w-full' handleChange={handleChange}/>
               :
               type === "radio"
               ?
               <Radio setData={setData} radioInputs={radioInputs} handleChange={handleChange} data={data} type={type}/>
               :
               name === "end_Date"
               ?
               <input value={value} className={`${textColors.grayish_blue} ${py} bg-transparent w-full border-b ${inputError && data[name as keyof InputTypes] === "" ? "border-[#dc2626]" : "border-[#ddd6fe]"} outline-none text-[13px]`} onChange={handleChange} type={!show[name as keyof {password :  boolean, confirmPassword : boolean}] ? type : "text"} name={name} placeholder={placeholder} min={startDate ? new Date(startDate).toISOString().split('T')[0] :date.toISOString().split('T')[0]} accept='.png, .jpg,'/>
               :
               <input 
               disabled={name === "start_Date" && location.pathname.split("/")[3] === "addOffers" ? starDateEnable(data.start_Date) : false}
               value={value} 
               className={`${textColors.grayish_blue} ${py} bg-transparent w-full border-b ${inputError && data[name as keyof InputTypes] === "" ? "border-[#dc2626]" : "border-[#ddd6fe]"} outline-none text-[13px]`} 
               onChange={handleChange}
               type={!show[name as keyof {password :  boolean, confirmPassword : boolean}] ? type : "text"} 
               name={name} placeholder={placeholder} 
               min={location.pathname.split("/")[3] === "redeemOffers" || location.pathname.split("/")[3] === "claimOffers" || location.pathname.split("/")[3] === "offerDetails" ? "" : date.toISOString().split('T')[0]}  
               accept='.png, .jpg,'/>
               :
              null
            }

            {
              icon ? icon : null
            }
           
            {
              (name === "password" || name === "confirmPassword" || name === "userName") && data
              ?
              <InputValidator  data={data as InputTypes} key2={name} valid={valid} validMessage={validMsg || ""} inValidMessage={invalidMsg || ""}/>
              :
              null
            }

            {
              (name === "CouponCode")
              ?
             <GenerateCoupon data={data} setData={setData}/>
              :
              null
            }

            { hideIcon && showIcon ?  showPassword(name, hideIcon, showIcon) :null }

            {
             name === "longitude"
             ?
             locationButton
             :
             null 
            }

            {
             name === "logo"
             ?
             <div className='relative flex justify-center items-center flex-col gap-2'>
             <UploadButton/>
             {viewButton}
             </div>
             :
             null 
            }

           {
             name === "draggedImage"
             ?
             <div className='relative flex justify-center items-center flex-col gap-2 w-full'>
             <DragUpload data={data} setData={setData}/>
             {viewButton}
             </div>
             :
             null 
            }
          </label>
            )
          })
        }
    </>
  )
}