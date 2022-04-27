import React from 'react'
import {useState} from "react"
import { Input, TextArea } from "../components"
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom"
import { useFileUpload } from 'use-file-upload'
import { gql, useMutation } from '@apollo/client';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;


export const AddFiliale = () => {

  const [file, selectFile] = useFileUpload()
  const [name, setName] = useState(true)
  const [filialeName, setFilialeName] = useState("")
  const [filialeDescription, setFilialeDescription] = useState("")
  const navigate = useNavigate()

  
  const ADD_FILIALE = gql
  `mutation addFiliale($file : Upload!, $name : String!, $description : String!) {
    addFiliale(input: {
      name:$name
      description: $description
      image: $file
    }){
       name
       description
       image {
         filename
         mimetype
         encoding
       }
     }
   }
   `

  const [newFiliale, { data }] = useMutation(ADD_FILIALE, {
    onCompleted: () => {
      setName(true)
      navigate("/Filiales")
    }
  });
  const addFiliale = async () => {
    setName(false)
    newFiliale({ variables: { name: filialeName, description: filialeDescription, image: file.file  }})
    };
  return (
    <div className="w-full flex flex-col rounded-lg py-8 items-center shadow bg-white">
      <div className="flex flex-col gap-3 w-[50%] h-[70%]  ">
        <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Filiale" />
        <TextArea setFilialeDescription={setFilialeDescription} filialeDescription={filialeDescription} />
        
        <button
        onClick={() => {
          selectFile()
          // console.log(file);
        }}
        className="w-full h-16 text-zinc-400 rounded text-2xl border-dashed border-2 border-zinc-400"
      >
        Add Image
      </button>
      {file ? (
        <div>
          <img src={file.source} alt='preview' />
        </div>
      ) : (
        <span className='text-zinc-400 text-xs'>No file selected</span>
      )}
        {name ?
          <button
            onClick={() => addFiliale()}
            type="button"
            className="text-white outline-none focus:border-0 bg-sky-600 hover:bg-sky-700 rounded text-center mr-2 mb-2 p-2"
          >
            Add
          </button>
          :
          <div
            className="bg-sky-600  font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"

          >
            <ClipLoader css={override} size={33} />
          </div>
        }
      </div>
    </div> 
  )
}
