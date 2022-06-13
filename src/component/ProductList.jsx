const ProductList=()=>{
    return
    <div>
      {
        data.map((item)=>{
            return <div>
                <img src={item.image} />
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <p>{item.category}</p>
            </div>
        })
      } 
    </div>
}
export default ProductList