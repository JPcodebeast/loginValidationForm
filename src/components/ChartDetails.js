import React from 'react';
import ChartDemo from './ChartTest';


const ChartDetails = ({handlePrivacy, comTrayProduct, comOtherProducts, nextStep, prevStep}) => {
 
  return (<>

      <div>
        <h3 className="aligncenter privacy">Chart & Analysis</h3>
        <button id='btn-back' onClick={prevStep}>Back</button>
      </div>
      <div className='chart'>
      <ChartDemo />
      </div> 
  
  </>
                 
)};

export default ChartDetails;
