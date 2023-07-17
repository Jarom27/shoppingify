import React from 'react'
import Advice from './Advice'

export default function ListView() {
  return (
    <aside className='h-screen w-1/2 flex flex-col'>
        <div className='bg-sand h-full py-10'>
           <Advice></Advice>
        </div>
        <div>
            
        </div>
    </aside>
  )
}
