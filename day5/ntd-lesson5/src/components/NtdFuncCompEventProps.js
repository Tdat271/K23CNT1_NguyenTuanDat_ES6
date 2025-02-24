import React from 'react'

export default function NtdFuncCompEventProps(ntdProps) {
    // hàm xử lý sự kiện
    const ntdHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + ntdProps.ntdRenderName);
        console.log("Xin chao:",ntdProps.ntdRenderName);
    }

    const ntdHanldeButtonClick2 = (param)=>{
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + ntdProps.ntdRenderName);
        // Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:",param);
        console.log('====================================');
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
            onClick={ntdHanldeButtonClick1}>Button 1</button>

        <button className='btn btn-success mx-1'
            onClick={()=>ntdHanldeButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
