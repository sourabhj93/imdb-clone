import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex justify-center gap-4 bg-amber-600 p-3'>
      <NavBarItem title={'Trending'} param={'fetchTrending'} />
      <NavBarItem title={'TopRated'} param={'fetchTopRated'} />
    </div>
  )
}
