import React from 'react'
import { checkUser } from '@/lib/checkUser'
import { redirect } from 'next/navigation'

const Layout = async ({children}) => {
  try {
    // This will create the user in the database if they don't exist
    const user = await checkUser()
    
    if (!user) {
      redirect('/sign-in')
    }
    
    return (
      <div className='container mx-auto'>
        {children}
      </div>
    )
  } catch (error) {
    console.error('Error in main layout:', error)
    redirect('/sign-in')
  }
}

export default Layout
