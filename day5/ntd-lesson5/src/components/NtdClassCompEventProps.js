import React, { Component } from 'react';

class NtdClassCompEventProps extends Component {

    // Hàm xử lý sự kiện
    ntdEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.ntdRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.ntdEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default NtdClassCompEventProps;