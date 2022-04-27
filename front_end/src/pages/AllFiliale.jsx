import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_FILIALES = gql`
query Filiales {
  Filiales {
    id
    name
    description
    image {
      filename
      mimetype
      encoding
    }
  }
}`
export const AllFiliale = () => {
  const { loading, error, data} = useQuery(GET_FILIALES);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {data && data.Filiales.map(filiale => (
        <div key={filiale.id} className="shadow-sm bg-white rounded-md p-4 flex flex-col">
          <h1 className='text-sky-600'>{filiale.name}</h1>
          <p className='text-sm'>{filiale.description}</p>
          <img src={
            `http://localhost:4000/images/${filiale.image.filename}`
          }
           alt=""
           className='my-4 h-56'/>
           <button className='self-end block bg-red-600 rounded-md p-2 text-white text-sm'>Delete</button>
        </div>
      ))}
    </div>
  )
}
