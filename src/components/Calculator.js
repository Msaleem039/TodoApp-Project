import React, { useState } from 'react'

const Calculator = () => {
    const [weight , setWeight]=useState(0);
    const [height , setHeight]=useState(0);
    const [bmi , setBMI]=useState(0);
    const [message , setMessage]=useState(0);

    const calculateBMI = (e) => {
        e.preventDefault();
        if(weight && height){
            const calculatedBMI = (weight / Math.pow(height/100 , 2)).toFixed(2);
            setBMI(calculatedBMI);
            if(calculatedBMI < 18.5){
                setMessage('Underweight');
            }else if(calculatedBMI >= 18.5 && calculatedBMI <= 24.9){
                setMessage('Normal Weight');
            }else if(calculatedBMI >= 25 && calculatedBMI <= 29.9){
                setMessage('Overweight');
            }else{
                setMessage('Obese');
            }
        }else{
            setMessage('Please enter weight and height');
        }
    }
  return (
    <div className='container'>

    <h2 className='text-center py-3'>Calculator</h2>
    <div className=''>

<form>
<label>Enter Weight :</label>
<input type='number' placeholder='weight' onChange={(e)=>setWeight(e.target.value)} className='form-control m-2'/>

<label>Enter Height :</label>
<input type='number' placeholder='height' onChange={(e)=>setHeight(e.target.value)} className='form-control m-2'/>

<button className='btn btn-primary m-2' onClick={calculateBMI}>Calculate</button>
<h3>Ibm value {bmi}</h3>
    <h4>Message: {message}</h4>
</form>
    
    </div>
    </div>
  )
}

export default Calculator