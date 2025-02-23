import React, { Component } from 'react';

class NTDClassComp extends Component {
    constructor(props){
        super(props);
            //
        this.state ={
            fullname:"Nguyen Tuan Dat",
            age:"20",
            phone:"0867490225"
        } 
    }

    changeInfo = (ev)=>{
        this.setState({
            fullname:"Nguyen Tuan Dat"
        });
    }

    render() {
        let users = this.props.renderUsers;
        console.log('=======================');
        console.log(users);
        console.log('=======================');
        return (
            <div className='alret alre3t-suuces'>
                <h2>Trình bày dữ liệu từ state</h2>
                <p>info state (fullname): {this.state.fullname} </p>
                <p>info state (age): {this.state.age} </p>
                <p>info state (phone): {this.state.phone} </p>

                <hr/>
                <button className='btn btn-primary' onClick={this.changeInfo}>changeInfo</button>
                <hr/>
                <p>Lấy dữ liệu từ Props</p>
                <p>Name: {this.props.renderName}</p>

                <p>FullName: {this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
                <p>Age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
            </div>
        );
    }
}

export default NTDClassComp;