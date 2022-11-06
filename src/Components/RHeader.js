import React from 'react'

export const RHeader = () => {
  return (
    <div>
        <nav className = 'navbar navbar-light bg-light'>
            <a className='navbar-brand'>Restaurant</a>
            <button className='btn btn-primary'>
                Orders <span className = 'badge bg-secondary'>0</span>  
            </button>
        </nav>
    </div>
  )
}
export default RHeader