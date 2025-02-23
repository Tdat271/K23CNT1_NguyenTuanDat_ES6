import logo from './logo.svg';
import './App.css';
import NTDFuncComp from './components/NTDFuncComp';
import NTDFuncComp1 from './components/NTDFuncComp1';
import NTDClassComp from './components/NTDClassComp';

function App() {
  //
  const users ={
    fullname:'Nguyen Tuan Dat',
    age:'20',
    phone:'30448214879'
  }

  return (
    <div className="App">
      <h1>Demo Componemt - Props - State</h1>
      <hr/>
      <div className='alret alret-danger'>
          <NTDFuncComp name="Tuan Dat" address="25 Vu Trong Phan" company = "Devmaster" />
          <hr/>
      </div>
      
      //
      <div className='alret alret-danger'>
        <NTDFuncComp1 renderInfo={users} />
        <hr/>

      </div>
      <div className='alret alret-danger'>
        <NTDClassComp />

      <hr/>
      </div>
      <div className='alret alret-danger'>
        <NTDClassComp renderName="K23CNT1" renderUsers={users} />
      </div>
    </div>
  )
}

export default App;