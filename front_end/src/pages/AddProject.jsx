import React from 'react'
import { useEffect, useState } from "react";
import { Input, MultiSelect } from "../components";
import useGeolocation from "react-navigator-geolocation";

export const AddProject = () => {
  const [filialeName, setFilialeName]= useState("")
  const { isEnabled, coords } = useGeolocation();
  return (
    <div className="w-full flex flex-col rounded-lg py-8 items-center shadow bg-white">
      <div className="flex flex-col gap-3 w-[50%] h-[70%]  ">
        <h1 className='text-sky-600 font-bold mb-4'>New Project:</h1>
        <div className="w-[80%]">
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Maitre d'ouvrage" />
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Lot" />
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Localisation" />
          
          <MultiSelect />
        </div>

      </div>
    </div>
  )
}
