// // import Navbar from './components/Navbar.jsx'
// // import products from './components/utils/Product.jsx'

// // function App() {

// //   const styles = {
// //     container: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       justifyContent: "center",
// //       gap: "20px",
// //       padding: "20px",
// //       backgroundColor: "#f5f5f5"
// //     },

// //     card: {
// //       background: "white",
// //       padding: "15px",
// //       width: "220px",
// //       borderRadius: "10px",
// //       boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
// //       textAlign: "center",
// //       transition: "0.3s"
// //     },

// //     image: {
// //       width: "100%",
// //       height: "150px",
// //       objectFit: "cover",
// //       borderRadius: "10px"
// //     },

// //     title: {
// //       margin: "10px 0"
// //     },

// //     desc: {
// //       color: "gray",
// //       fontSize: "14px"
// //     },

// //     price: {
// //       color: "green"
// //     },

// //     button: {
// //       backgroundColor: "black",
// //       color: "white",
// //       border: "none",
// //       padding: "10px",
// //       marginTop: "10px",
// //       width: "100%",
// //       borderRadius: "5px",
// //       cursor: "pointer"
// //     }
// //   }

// //   return (
// //     <div>
// //       <Navbar />

// //       <div style={styles.container}>
// //         {products.map((product) => {
// //           return (
// //             <div style={styles.card} key={product.id}>
// //               <img style={styles.image} src={product.image} alt={product.title} />
// //               <h2 style={styles.title}>{product.title}</h2>
// //               <p style={styles.desc}>{product.Discription}</p>
// //               <h3 style={styles.price}>${product.Price}</h3>
// //               <button style={styles.button}>Add to Cart</button>
// //             </div>
// //           )
// //         })}
// //       </div>
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import Productcard from './components/Productcard'
// import products from './components/utils/Product.jsx'


// function App() {
//   return (
//     <div>

//       {
//         products.map((product) => {
//           return (
//             <div>
//               <Productcard 
//               key={product.id}
//                title={product.title} 
//                discription={product.Discription}
//                 price={product.Price} 
//                 image={product.image} />
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navigation from './route/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default App




