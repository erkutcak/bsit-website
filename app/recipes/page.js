'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Recipes = () => {

  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session == null) router.push("/")
  }, [session])


  return (
    <div>Recipes</div>
  )
}

export default Recipes