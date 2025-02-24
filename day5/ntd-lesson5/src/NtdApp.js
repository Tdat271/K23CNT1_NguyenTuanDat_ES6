import React, { Component } from 'react';
import NtdFuncCompEvent1 from './components/NtdFuncCompEvent1';
import NtdClassCompEvent1 from './components/NtdClassCompEvent1';
import NtdFuncCompEventProps from './components/TvcFuncCompEventProps';
import NtdClassCompEventProps from './components/NtdClassCompEventProps';
import NtdClassCompEventState from './components/NtdClassCompEventState';
import NtdClassCompEventPostData from './components/NtdClassCompEventPostData';

class NtdApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            ntdNoiDung:"Chưa có gì",
        }
    }
    // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
    ntdHandleDataToApp = (content)=>{
        alert(content);
        this.setState({
            ntdNoiDung:content,
        })
    }
    render() {
        return (
            <div className='container border mt-3'>
                <h1 className='text-center alert alert-info my-2'>K23CNT1 - Nguyen Tuan Dat - Event and Form</h1>
                <hr/>
                <div>
                    <h2>Function Component  - Event</h2>
                    <NtdFuncCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event</h2>
                    <NtdClassCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Function Component - Event; props</h2>
                    <NtdFuncCompEventProps ntdRenderName="Tuan Dat" />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event; props</h2>
                    <NtdClassCompEventProps ntdRenderTitle = "Welcome to Tuan Dat"/>
                </div>

                <div>
                    <h2>Class Component - Event; state</h2>
                    <NtdClassCompEventState />
                </div>
                <div>
                    <h1>{this.state.tvcNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <NtdClassCompEventPostData onNtdDataToApp={this.ntdHandleDataToApp} />
                </div>
            </div>
        );
    }
}

export default NtdApp;