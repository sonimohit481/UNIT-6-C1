
import ProductForm from "./ProductForm"
import ProductList from "./ProductList"
import React from "react";

const Product = () => {
    const [loading , setLoading] = React.useState(false);
     const [error , setError] = React.useState(false);
     const [product , setProduct] = React.useState([]);
    const [formData, setFormData] = React.useState({
        title: "",
        gender: "",
        category: "",
        price : "",
        image : ""
      });


      const getProduct = () => {
        setLoading(true);
       fetch(" http://localhost:3002/Product")
       .then((res) => res.json())
       .then((res) => {
           setProduct(res);
           //  setLoading(false);
       })
       .catch((err) => {
            setError(true);
            setProduct([]);
           //   setLoading(false);
       })
       .finally(() => {
           setLoading(false);
       })
   }

   React.useEffect(() => {
        getProduct()
   } , [])

  
   

       const handleChange = (e) => {
             let  {name , value } = e.target;


         setFormData({ ...formData, [name]: value });
       }

       const handleSubmit =(e) => {
          e.preventDefault();

          setLoading(true);
         
      
         fetch("http://localhost:3002/product" , {
              method : "POST",
              body : JSON.stringify(formData),
              headers : {
                  "content-type" : "application/json"
              }
          }).then((res) => res.json())
             .then((res) => {
               getProduct();
          })
            .catch((err) => {
               setError(true);
               setProduct([]);
            })
            .finally(() => {
                 setLoading(false);
            })
  
      
       }

     return loading ? (<h1>Loading...</h1>)
     : error ? (<h1>Error...</h1>)
     :(
          <>
             <ProductForm formData = {formData}
               handleChange = {handleChange}
               handleSubmit = {handleSubmit}/>
             <ProductList data = {product}/>    
          </>
     )
}

export default Product;