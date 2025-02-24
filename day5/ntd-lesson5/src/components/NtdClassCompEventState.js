import React, { Component } from 'react';

class NtdClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ntdFullName:"Nguyen Tuan Dat",
            ntdAge:20,
        }
    }

    // Hàm xử lý sự kiện
    ntdEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.ntdFullName + "\n Age:" + this.state.ntdAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.ntdEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default NtdClassCompEventState;