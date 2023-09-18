"use client"

import React from 'react'
import { SignInButton } from "@clerk/clerk-react";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
        <SignInButton mode='modal' redirectUrl='/inpaint' />
    </div>
  )
}

export default Hero