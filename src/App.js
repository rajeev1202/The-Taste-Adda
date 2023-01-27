import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';




// const SearchBar = (searchTxt, itemList) => {

//   return(
//     <div></div>
//   )
// }

const App = () => (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
)

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)