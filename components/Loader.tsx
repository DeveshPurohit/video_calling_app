import Image from 'next/image'
import React from 'react'
import LoaderIcon from '@/public/icons/loading-circle.svg'

const Loader = () => {
  return (
    <div className='flex-center w-full h-screen'>
        <Image src={LoaderIcon} alt='Loading' height={50} width={50}/>
    </div>
  )
}

export default Loader