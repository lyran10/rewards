import React from 'react'

export const useColors = () => {
    
 const bgColors = {
    darkBlue : "bg-[#0369a1]",
    white_smoke : "bg-[#f5f5f5]",
    white : "bg-[#fff]",
    slate900 : "bg-[#343b4d]",
    grey300 : "bg-[#d1d5db]",
    purple : "bg-[#8b5bf3]",
    purple100 : "bg-[#ede9fe]",
    blue : "bg-[rgb(10,162,219)]",
    red : "bg-[#dc2626]",
    green : "bg-[#16a34a]"
 } 

 const textColors = {
    white_smoke : "text-[#f5f5f5]",
    cyan950 : "text-[#083344]",
    grey200 : "text-[#e5e7eb]",
    slate800 : "text-[#1e293b]",
    purple : "text-[#8b5bf3]",
    grayish_blue : "text-[#94a3b8]",
    blue : "text-[rgb(10,162,219)]",
    red : "text-[#dc2626]",
    green : "text-[#16a34a]",
    orange : "text-[#d97706]"
 } 

 const hoverColors = {
   buttonHover : "hover:bg-[#8b5bf3]",
   textHover : "hover:text-[#f5f5f5]",
   grey200 : "text-[#e5e7eb]",
   slate800 : "text-[#1e293b]",
   purple : "text-[#8b5bf3]",
} 

  return { bgColors, textColors, hoverColors }
}
