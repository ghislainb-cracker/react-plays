import React from 'react';
import ReactDOM from 'react-dom/client';
import Dark from './dark';
// import Good from './good';
// import Card from './app';
// import data from './data';
// import Click from './increment';
// import One from './random';
// import Demo from './demo';
// import Thing from './things';

export default function Hello() {
  // const Display = data.map((visit) => {

  //   return <Card 
  //      key = {visit.id}
  //      {...visit}
  //   />
  // })
  // return (
  //   <div>
  //      {Display}
  //      <Click/>
  //      <One/>
  //      <Demo/>
          //  
  //   </div>
  // )
  return(
    <>
    {/* <Good /> */}
    <Dark on={false}/>
    </>
  )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

// const Elements = Jokes.map((joke) => {
//   return <Card
//   key={joke.id}
//   {...joke}
//   // setup={joke.setup}
//   // punchline={joke.punchline}
//   // soldout={joke.open}
//   // location={joke.location}
//   />
// })

//   return (
//     <div>
//       {Elements}
//     </div>
    
//   )

// {/* <Card
//         setup ="Do you know me, if you do tell me who iam"
//         punchline= "lorem ipsum dor changid, diri mon kanio el gabriezus damn "
//       />
//       <Card
        
//         punchline= "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique laboriosam, consequatur repudiandae excepturi nisi accusantium vitae aspernatur. Eius, aperiam? Sapiente numquam eveniet, quam iusto sit vel debitis ipsam est?' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique laboriosam, consequatur repudiandae excepturi nisi accusantium vitae aspernatur. Eius, aperiam? Sapiente numquam eveniet, quam iusto sit vel debitis ipsam est ?"
//       />
//       <Card
//         setup ="Do you know me, if you do tell me who iam"
//         punchline= "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique laboriosam, consequatur repudiandae excepturi nisi accusantium vitae aspernatur. Eius, aperiam? Sapiente numquam eveniet, quam iusto sit vel debitis ipsam est?'"
//       /> */}