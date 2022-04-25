import React from 'react'
import Lottie from 'lottie-react'
import * as anim from '../lotties/anim.json'

export const Welcome = () => {
  return (
    <div className="flex">
    <div>
    <h1>Hello hellooo</h1>
     <p>lorem ipsum lorem</p>
     </div>
    <Lottie animationData={anim} loop />
    </div>
  )
}
