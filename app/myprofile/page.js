'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const MyProfile = () => {

  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session == null) router.push("/")
  }, [session])


  return (
    <div>My Profile</div>
  )
}

export default MyProfile