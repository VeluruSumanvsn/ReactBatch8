import React from 'react'

export const RTable = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const inActiveBtn ='btn btn-outline-primary m-2';
    const activeBtn ='btn btn-outline-primary m-2';
    const [number, setNumber] = React.useState(null);
  return (
    <div>
        <center className="mt-2">
            <h4> Please Select Table Number :</h4>
            {numbers.map((num,index) =>
            <div style = {{display:'inline'}} key = {index} >
                <button className={number ===num? activeBtn: inActiveBtn} onClick={()=> setNumber}>
                    {num}
                </button>
            </div>
            )
            }
        </center>
    </div>
  )
}
export default RTable
