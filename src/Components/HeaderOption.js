import React from 'react'
import '../CSS/HeaderOption.css';

function HeaderOption({Icon, title}) { //THE REASON ICON IS CAPITALIZED IS BECAUSE IT IS A COMPONENT
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_Icon' />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
