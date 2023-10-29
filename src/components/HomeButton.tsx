'use client'

import { useRouter } from "next/navigation"

const HomeButton = () => {
    const router = useRouter()
    const handleClick = () => {
      router.push('/')
    }
  return (
    <button onClick={handleClick}>Home</button>
  )
}

export default HomeButton