import React, {useState} from 'react';

function Calculator() {

    const [userValues, setUserValues] = useState({
        amount: '',
        interest: '',
        years: '',
      });
      
   return (
       <div>
          <h1>Loan Calculator</h1>
       </div>
   )
}

export default Calculator;