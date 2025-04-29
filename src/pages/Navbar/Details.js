import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ReactTooltip from "react-tooltip";
import './Details.css'



function Details() {
 return(
    <div>
<div className='containerDetails'>
<div className='containerDetailsLeft'>
<p>Left</p>
</div>
<div className='containerDetailsMiddle'>
<p>Middle</p>
</div>
<div className='containerDetailsRight'>
<p>Right</p>
</div>

</div>
<div className="ToolbarWidget">
    
      <i className="fa fa-search-plus" aria-hidden="true"></i>
      <span className="tooltip-text">Yaklaş</span>
      <i className="fa fa-search-minus" aria-hidden="true"style={{ marginLeft: '8px' }}></i>
      <span className="tooltip-text">Uzaklaş</span>
    </div>
      
  

  
</div>
 );
} 
export default Details