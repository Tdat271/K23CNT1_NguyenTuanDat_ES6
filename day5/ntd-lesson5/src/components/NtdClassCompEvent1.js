import React, { Component } from 'react';

class NtdClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    ntdEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    ntdEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.ntdEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.ntdEventHandleClick2("Tuan Dat")}>Button 2</button>
            </div>
        );
    }
}

export default NtdClassCompEvent1;