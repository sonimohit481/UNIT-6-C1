
const ProductForm = ({formData , handleChange , handleSubmit}) => {
    const {title , category , gender , price , image } = formData

      return(
          <form onSubmit = {handleSubmit}>
                  <input
                     type = "text"
                     placeholder = "Title"
                     value = {title}
                     name = "title"
                     onChange = {handleChange}
                    /> <br />
                     <select name = {gender} onChange = {handleChange} value = {gender}>
                           <option value = "Male" >Male</option>
                            <option value = "Female">Female</option>
                     </select>
                     <br />
                     <input
                     type = "text"
                     placeholder = "Category"
                     value = {category}
                     name = "category"
                     onChange = {handleChange}
                    />
                    <br />
                     <input
                     type = "text"
                     placeholder = "Price"
                     value = {price}
                     name = "price"
                     onChange = {handleChange}
                    />
                    <br />
                     <input
                     type = "url"
                     placeholder = "https://picsum.photos/200"
                     value = {image}
                     name = "image"
                     onChange = {handleChange}
                    />
                    <br />
                    <input type="submit" value="SUBMIT" />
                  
          </form>
      )
}

export default ProductForm;