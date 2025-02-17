import React from 'react';

export default function NtdJSxExpression() {
    //bien
    const name="Nguyen Tuan Dat";
    //bien doi tuong 
    const user= {
        firstname:"Tuan",
        lastname:"Dat"
    }
//ham 
const fullname=(user)=>{
    return user.firstname + '' + user.lastname;
}
//element
const element =(
    <div> 
        {/*bieu thuc jsx */}
        <h2>{fullname(user)} </h2>
        <hr/>
        <h3> Welcome to, {name}</h3>
    </div>
);
//Ham
const saywelcome = (name)=>{
    if(name){
        return <h3> Welcome to {name} </h3>
    }
    else {
        return <h3> Welcome to FIT-NTU -K23CNT1</h3>
    } 
}
return (
    <div>
        <h1> NTD- JSX Expression</h1>
        {/* su dung bien element */}
        {element}  {/* Đưa element vào JSX */}

        <hr/>
        {saywelcome()}
        <hr/>
        {saywelcome("Nguyen Tuan Dat")}
    </div>
)
}