import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Files() {
  return (
    <div>
      <UserButton afterSignOutUrl='/sign-in'/>
    </div>
  )
} 

export default Files