import React, { useState } from 'react';
import './selectProduct.css'

export default function SelectProduct() {
  // Define the initial product list
  const initialProducts = [
    { id: 1, name: 'Long Socks - Made with natural materials', variant: 'S/ White / Cotton', available: 99, price: 3.99, selected: false },
    { id: 2, name: 'Long Socks - Made with natural materials', variant: 'M/ White / Cotton', available: 99, price: 3.99, selected: false },
    { id: 3, name: 'Long Socks - Made with natural materials', variant: 'L/ White / Cotton', available: 99, price: 3.99, selected: false },
    { id: 4, name: 'Long Socks - Made with natural materials', variant: 'S/ White / Cotton', available: 99, price: 3.99, selected: false },
    { id: 5, name: 'Long Socks - Made with natural materials', variant: 'M/ White / Cotton', available: 60, price: 3.99, selected: false },
    // { id: 6, name: 'Printed T-shirt', variant: 'S/ White / Cotton', available: 75, price: 8.99, selected: false },
  ];

  // State for product selection
  const [products, setProducts] = useState(initialProducts);

  // Function to toggle product selection
  const handleSelectProduct = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, selected: !product.selected } : product
    ));
  };

  // Function to handle add button (you can implement your logic for adding selected products)
  const handleAdd = () => {
    const selectedProducts = products.filter(product => product.selected);
    console.log('Selected Products:', selectedProducts);
    // Perform an action such as adding selected products to cart or another process
  };

  return (
    <div className="select-product-container" style={{width: '663px', backgroundColor: '#ffffff'}}>
      <h2 style={{fontSize: '18px', fontWeight: '500', textAlign: 'left', margin: '0'}}>Select Products</h2>
      <div className='searchProduct' style={{borderTop: '1px solid rgba(0, 0, 0, 0.07)', borderBottom: '1px solid rgba(0, 0, 0, 0.07)'}}>
        <input type="search" name="search-input" placeholder='Search Product' style={{border: '1px solid rgba(0, 0, 0, 0.07)', padding: '8px 19px', width: '100%' }}/>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className='productName'>
                <input
                htmlFor="name"
                type="checkbox"
                checked={product.selected}
                onChange={() => handleSelectProduct(product.id)}
                />
                <label id='name'>{product.name}</label>
            </div>
            <div className='productSize'>
                <input
                type="checkbox"
                checked={product.selected}
                onChange={() => handleSelectProduct(product.id)}
                />
                <div className='size'>
                    <span>{product.variant}</span>
                    <span>{product.available} available</span>
                    <span>${product.price.toFixed(2)}</span>

                </div>

            </div>
           
          </div>
        ))}
      </div>
      <div className='addProduct'>
        <p><span>1</span> product selected</p>
        <div className='buttons'>
        <button onClick={handleAdd} style={{backgroundColor: '#008060',padding:'5px 12px'}}>Add</button>
        <button onClick={() => console.log('Cancel')} style={{color: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(0, 0, 0, 0.6)', backgroundColor: 'transparent',padding: '5px 12px'}}>Cancel</button>
        </div>
      </div>
      
    </div>
  );
}

