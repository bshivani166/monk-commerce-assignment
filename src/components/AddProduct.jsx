import React,{ useState } from "react";

export default function AddProduct(){
    const [products, setProducts] = useState([{ product: '', discount: '' }]);

  const handleProductChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index][event.target.name] = event.target.value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { product: '', discount: '' }]);
  };
    return(
        <div style={{ display: 'flex', flexDirection: 'column'}}>
      <h3 style={{textAlign: 'left', fontSize: '16px' , marginTop: '0'}}>Add Products</h3>
      {products.map((item, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '21px', alignItems: 'center' }}>
          <div style={{ margin: '0 10px 6px 0 ', alignSelf: 'flex-end' }}>
            <p style={{margin: '0'}}>{index + 1}.</p>
          </div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor={`product-${index}`} style={{ display: 'block', margin: '0 0 16px 13px' , textAlign: 'left', fontSize: '16px', fontWeight: '500'}}>Product</label>
            <input
              type="text"
              id={`product-${index}`}
              name="product"
              placeholder="Select Product"
              value={item.product}
              onChange={(e) => handleProductChange(index, e)}
              style={{ padding: '7px', width: '200px' , border: '1px solid rgba(0, 0, 0, 0.07)' , boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          <div>
            <label htmlFor={`discount-${index}`} style={{ display: 'block', margin: '0 0 16px 13px', textAlign: 'left', fontSize: '16px' , fontWeight: '500'}}>Discount</label>
            {/* <input
              type="text"
              id={`discount-${index}`}
              name="discount"
              placeholder="Add Discount"
              value={item.discount}
              onChange={(e) => handleProductChange(index, e)}
              style={{ padding: '8px', width: '200px' }}
            /> */}
            <button
              onClick={() => handleAddDiscount(index)}
              style={{ padding: '5px 7px', width: '200px', backgroundColor: '#008060', color: 'white' , borderRadius: '4px', fontSize: '14px', maxWidth: '141px'}}
            >
              {item.discount ? `Discount: ${item.discount}` : 'Add Discount'}
            </button>
          </div>
        </div>
      ))}
      <button onClick={handleAddProduct} style={{ minWidth: '193px' , padding: '12px 20px', border: '2px solid #008060', color: '#008060' , borderRadius: '4px', alignSelf: 'flex-end', fontSize: '14px'}}>
        Add Product
      </button>
    </div>
    )
}