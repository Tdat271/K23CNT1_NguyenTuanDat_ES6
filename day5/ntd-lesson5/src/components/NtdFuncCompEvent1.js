import React from 'react'

export default function NtdFuncEvent1() {

    //Ham xu ly su kien
    const ntdEventButton1Click = ()=>{
        alert("Button 1 - Cliked");
    };

    const ntdEventButton2Click = ()=>{
        alert("Button 2 - Clicked");
    };

    const ntdEventButton3Click = (name)=>{
        alert("Name:" + name)
    };
  return (
    <div className='alert alert-info'>
        {/*}<button className='btn btn-primary' onClick={ntdEventButton1Click()}>
            Button 1
        </button> */}
        <button className='btn btn-primary mx-1' onClick={ntdEventButton2Click()}>
            Button 2
        </button>
        {/*<button className='btn btn-success' onClick={ntdEventButton3Click("Tuan Dat")}>
            Button 3
        </button> */}
        <button className='btn btn-success mx-1' onClick={()=>ntdEventButton3Click("Tuan Dat")}>
            Button 4
        </button>
    </div>
  );
}
