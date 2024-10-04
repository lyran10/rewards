import React from 'react';
import { useColors } from '../../customHooks/useColors'
import { Avatar } from '../../commonComponents/avatar'
import { FaEye, FaEyeSlash, FaArrowRightLong, FaUserPlus, FaLocationDot } from "react-icons/fa6";
import { useRedux } from '../../customHooks/useRedux';
import { Button } from '../button';
import { getCoord, setImgLoading, setInputError, toggleLogin } from '../../store/reducer';
import { Form } from '../form';
import { UseInput } from '../../customHooks/useInput';
import { useCheckLimitAndLettersValidation } from '../../customHooks/useCheckLimitAndLettersValidation';
import { usePassMatch } from '../../customHooks/usePassMatch';
import { useMinimumPassLength } from '../../customHooks/useMinPassLength';
import { MSG } from '../../types/constants';
import { useCurrentLocation } from '../../customHooks/useCurrentLocation';
import { MapComponent } from '../../map/map';
import { PopOver } from '../../commonComponents/popOver';
import { usePopOver } from '../../customHooks/usePopOver';
import { useGetCoords } from '../../customHooks/useGetCoords';
import { useShowConfirmed } from '../../customHooks/useShowConfirmed';
import { useClick } from '../../customHooks/useClick';
import { InputTypes } from '../../types/types';
import { useResetData } from '../../customHooks/useResetData';
import { UploadedFileName } from '../uploadedFileName';
import { ClosePopOverButton } from '../closePopOverButton';
import { useConvertFileToImage } from '../../customHooks/useConvertFileToImage';
import { ViewImage } from './viewImage';
import { useLists } from '../../customHooks/useLists';

export const Registration = () => {
  const {bgColors , textColors} = useColors()
  const { selector, dispatch } = useRedux()
  const { location } = useCurrentLocation()
  const { handleRegistration } = useClick()
  const { handleChange, data, setData } = UseInput()
  const {catList, sList, divList, disList, ulbList} = useLists({data : data})
  const {imagePreview, handleImageChange} = useConvertFileToImage({file : data.logo !== "" ? data.logo : data.draggedImage})
  const {show, handlePopOverShow, handlePopOverClose} = usePopOver()
  const {confirmed, handleRemoveConfirmed, handleShowConfirmed} = useShowConfirmed()
  const {coordinates, handleCoords } = useGetCoords({location : location})
  const { Validation } = useCheckLimitAndLettersValidation({handleChange, data, setData})
  const { length } = useMinimumPassLength({value : data && data.password})
  const { match } = usePassMatch({ data })
  const { login, coords, popOverId } = selector(state => state.loginData)
  useResetData({setData, data})

  const inputs = [
    {
      type : "text",
      name : "name",
      label : "Name",
      placeholder : "Enter name here",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      value : data.name,
    },
    {
      type : "text",
      name : "userName",
      label : "User Name",
      placeholder : "Enter user name here",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      value : data.userName
    },
    {
      type : "password",
      name : "password",
      label : "Password",
      placeholder : "Enter password here",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      showIcon : <FaEye className='text-[#a1a1aa] duration-300' size={15}/>,
      hideIcon : <FaEyeSlash className='text-[#a1a1aa] duration-300' size={15}/>,
      value : data.password,
      valid : length,
      validMsg : MSG.MEETS_PASS_LENGTH,
      invalidMsg : MSG.NOT_MEETS_PASS_LENGTH
    },
    {
      type : "password",
      name : "confirmPassword",
      label : "Confirm Password",
      placeholder : "Enter confirm password here",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      showIcon : <FaEye className='text-[#a1a1aa] duration-300' size={15}/>,
      hideIcon : <FaEyeSlash className='text-[#a1a1aa] duration-300' size={15}/>,
      value : data.confirmPassword,
      valid : match,
      validMsg : MSG.PASSWORD_MATCH,
      invalidMsg : MSG.NO_MATCH
    },
    {
      type : "text",
      name : "address",
      label : "Address",
      placeholder : "Enter address here",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      value : data.address
    },
    {
      type : "number",
      name : "mobileNo",
      label : "Mobile No",
      placeholder : "Enter mobile no here",
      span : "col-span-8 md:col-span-12 lg:col-span-1",
      value : data.mobileNo
    },
    {
      type : "number",
      name : "pinCode",
      label : "Pin Code",
      placeholder : "Enter pin code here",
      span : "col-span-8 md:col-span-12 lg:col-span-1",
      value : data.pinCode
    },
    {
      type : "number",
      name : "latitude",
      label : "Latitude",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-1",
      value : coords.lat
    },
    {
      type : "number",
      name : "longitude",
      label : "Longitude",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-1",
      value : coords.lon,
      // ${bgColors.white_smoke} hover:${bgColors.purple}
      locationButton :  <Button id="chooseLocation" loaderClasses='' classes={`font-semibold absolute top-[110%] right-0 text-[10px] md:text-[12px] lg:text-[12px] ${textColors.white_smoke} ${bgColors.blue} py-2 px-4`} handleClick={handleGeolocation} icon={<FaLocationDot />}  content={"Choose Location"}/>
    },
    {
      type : "select",
      name : "catName",
      itemId : "catId",
      label : "Select Category",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      selectData : catList,
      value : data.catId,
      content : "Categories"
    },
    {
      type : "select",
      name : "stateName",
      itemId : "stateid",
      label : "Select State",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      selectData : sList && sList.stateList,
      value : data.stateid,
      content : "States"
    },
    {
      type : "select",
      name : "divisionName",
      itemId : "divid",
      label : "Select Division",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      selectData : sList && sList.stateList ? divList && divList.divisionList : []
      ,
      value : data.divid,
      content : "Divisions"
    },
    {
      type : "select",
      name : "districtName",
      itemId : "disid",
      label : "Select District",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      selectData : divList && divList.divisionList  ? disList && disList.districtList : [],
      value : data.disid,
      content : "Districts"
    },
    {
      type : "select",
      name : "ulbName",
      itemId : "appid",
      label : "Select ULB",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-2",
      selectData : disList && disList.districtList ? ulbList && ulbList.ulbList : [],
      value : data.appid,
      content : "ULB's"
    },
    {
      type : "",
      name : "draggedImage",
      label : "Upload offer image",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-1 mt-0 md:mt-5 lg:mt-5",
      value : data.draggedImage,
      viewButton : <UploadedFileName data={data.draggedImage} handleClick={handleViewImage}/>
    },
    {
      type : "file",
      name : "logo",
      label : "",
      placeholder : "",
      span : "col-span-8 md:col-span-12 lg:col-span-1 mt-0 md:mt-5 lg:mt-5",
      // value : data.logo,
      viewButton : <UploadedFileName data={data.logo} handleClick={handleViewImage}/>
    },
  ]

  function handleGeolocation(e : React.FormEvent) {
    e.preventDefault()
    handlePopOverShow("map")
  }

  function handleViewImage(e : React.FormEvent) {
    e.preventDefault()
    dispatch(setImgLoading(true))
    handleImageChange()
    handlePopOverShow("viewImage")
  }
  
  const handleCoordinates = () => {
    dispatch(getCoord(coordinates))
    handleShowConfirmed()

    setTimeout(() => {
      handleRemoveConfirmed()
    }, 3000)
  }

  const handleToggle = () => {
    setData({name : "", userName : "",password : "", confirmPassword : "", address : "", mobileNo : "", pinCode : "", catId : "", logo : "", latitude : data.latitude, longitude : data.longitude  } as InputTypes)
    dispatch(toggleLogin(true))
    dispatch(setInputError(false))
  }

// ${popOverId ? "" : "overflow-y-scroll"}
  return (
    <section className={`rounded-md overflow-y-scroll justify-start items-center flex-col gap-10 p-3 absolute flex duration-500 ${login ? "translate-x-[500px] scale-0" : "translate-x-0 scale-100"} w-[80%] md:w-[80%] lg:w-[80%] h-[90%] ${bgColors.white} shadow-chart `}>
      <div className={`flex gap-2 self-start`}>
      <Button id='backToLogin' loaderClasses='' handleClick={handleToggle} icon={<FaArrowRightLong />} classes={`rotate-180 self-center text-[10px] md:text-[13px] lg:text-[15px] ${bgColors.white_smoke} ${textColors.blue} self-end py-2 px-4`} content={""}/>
        <div className={`flex gap-2 justify-start items-center text-[15px] ${textColors.purple} font-semibold self-start`}>
          <Avatar text='text-[#94a3b8]' bg="" position="" width="w-9" height="h-9" icon={<FaUserPlus/>} shadow='shadow-chart'/>
          <header>SIGN UP</header>
        </div>
      </div>
      {
        !popOverId 
        ?
        <Form
        inputs={inputs}
        classes='grid grid-cols-1 w-full md:grid-cols-4 lg:grid-cols-4 gap-12 relative'
        handleChange={(e) => Validation(e)}
        children={
          <>
          <div className='col-span-8 md:col-span-12 lg:col-span-2 flex gap-2 justify-center items-center w-full flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
            <Button id='reg' loaderClasses='w-5 h-5 before:w-6 before:h-6'  classes={`${textColors.white_smoke} ${bgColors.blue} h-[35px] sticky w-full md:w-full lg:w-auto xl:w-auto 2xl:w-auto md:sticky lg:absolute top-0 md:top-0 lg:top-[105%] right-0 text-[10px] md:text-[13px] lg:text-[15px] py-2 px-4`} handleClick={() => {}} icon={<FaArrowRightLong />}  content={"Save"}/>
          </div>
          </>
  
      }
        handleClick={handleRegistration}
        data={data}
        setData={setData}
        />
        :
        <Form
        inputs={inputs.slice(0,14)}
        classes='grid grid-cols-1 w-full md:grid-cols-4 lg:grid-cols-4 gap-12 relative'
        handleChange={(e) => Validation(e)}
        children={ <> </> }
        handleClick={handleRegistration}
        data={data}
        setData={setData}
        />
      }
  

  {
    show && popOverId && popOverId === "map"
    ?
    <PopOver width='w-full' bg='bg-white'>
        <div className='w-full h-full flex justify-center items-center flex-col gap-2 relative'>
          <MapComponent height='h-full' width='w-full' handleCoords={handleCoords}/>
          <Button id='confirmLocation' loaderClasses='' classes={`absolute bottom-2 font-semibold text-[10px] self-center md:text-[13px] lg:text-[15px] ${textColors.white_smoke} ${bgColors.blue} py-2 px-3`} handleClick={handleCoordinates} icon={<FaArrowRightLong />}  content={"Confirm Location"}/>
          <span className={`bg-black text-white text-[11px] font-semibold px-2 py-1 absolute ${confirmed ? "bottom-[90%] opacity-[1]" : "bottom-[100%] opacity-0"} duration-300`}>Confirmed</span>
          <ClosePopOverButton handlePopOverClose={handlePopOverClose} />
      </div>
    </PopOver>
    :
    null
  }   

{
    show && popOverId && popOverId === "viewImage"
    ?
    <PopOver width='w-full' bg='bg-transparent'>
      <div className="w-[60%] h-[80%] bg-[rgba(0,0,0,.6)]">
       <ViewImage classes='w-[60%] h-[60%]' handleClick={handlePopOverClose} image={imagePreview}/>
      </div>
    </PopOver>
    :
    null
  }  
</section>
  )
}