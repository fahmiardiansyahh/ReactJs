import React, { Component } from 'react';
import MenuUtama from './Page/MenuUtama';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';

const Header = () => {

   return (

    <h1> Ini Halaman Untuk Header </h1>

    );


}

const Footer = () => {

   return (
    
    <h1> Ini Halaman Untuk Footer </h1>
  
   );


}


class App extends Component {

  render() {

        return (

        <div>
            
            <Header />
            
            <MenuUtama />
            <MenuProduct />
            <MenuKontak />
            <MenuTentangKami />


            <Footer />


        </div>

        );


  }


}


export default App;
