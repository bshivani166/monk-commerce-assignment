import React, { useState } from "react";
import { useDrag } from "react-dnd";

import "./App.css";
import "./index.css";

function DragIcon() {
  return (
    <div style={{ padding: "5px" }}>
      <svg
        width="7"
        height="14"
        viewBox="0 0 7 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1" cy="7" r="1" fill="black" fillOpacity="0.5" />
        <circle cx="6" cy="7" r="1" fill="black" fillOpacity="0.5" />
        <circle cx="1" cy="1" r="1" fill="black" fillOpacity="0.5" />
        <circle cx="6" cy="1" r="1" fill="black" fillOpacity="0.5" />
        <circle cx="1" cy="13" r="1" fill="black" fillOpacity="0.5" />
        <circle cx="6" cy="13" r="1" fill="black" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function PickerIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.509 0.643184L12.4018 0.750381L15.4569 3.80551L15.5641 3.69831C16.4217 2.84073 16.4217 1.50076 15.5641 0.643184C14.7066 -0.214395 13.3666 -0.214395 12.509 0.643184Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M1.62312 11.5273L0.229555 15.4936C0.175956 15.8152 0.443949 16.0832 0.711943 15.976L4.62464 14.5824L14.4332 4.77387L11.3781 1.71875L1.62312 11.5273Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7927 15.9665L11.4582 10.6212C12.7324 9.11518 13.266 7.13661 12.8511 5.09882C12.7029 4.39001 12.4362 3.71083 12.0508 3.09077C9.73922 -0.571206 4.8196 -0.98465 1.91525 1.87992C-0.633468 4.39022 -0.633468 8.49502 1.88569 11.0347C3.10083 12.2751 4.73088 12.9542 6.47936 12.9542H6.50892C8.05006 12.9542 9.47255 12.4227 10.6579 11.4776L15.9924 16.8228C16.1109 16.9409 16.2591 17 16.4073 17C16.5555 17 16.7038 16.9409 16.8222 16.8228C16.9407 16.7048 17 16.5571 17 16.4094C16.9409 16.232 16.8815 16.0845 16.7927 15.9663L16.7927 15.9665ZM2.71548 10.2078C0.640997 8.14064 0.670528 4.77397 2.74504 2.70676C3.78242 1.67304 5.14553 1.17106 6.47916 1.17106C7.84253 1.17106 9.2057 1.70252 10.243 2.73623C11.2506 3.74026 11.7842 5.06913 11.7842 6.48681C11.7842 7.90428 11.221 9.23315 10.2134 10.2374C8.13895 12.3043 4.76036 12.2749 2.71546 10.2077L2.71548 10.2078Z"
        fill="black"
        fillOpacity="0.4"
      />
    </svg>
  );
}

function Title() {
  return (
    <div className="nav">
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_5)">
          <path
            opacity="0.8"
            d="M29.1436 0H1.82261C0.816009 0 0 0.814302 0 1.81879V29.1474C0 30.1519 0.816009 30.9662 1.82261 30.9662H29.1436C30.1502 30.9662 30.9662 30.1519 30.9662 29.1474V1.81879C30.9662 0.814302 30.1502 0 29.1436 0Z"
            fill="url(#paint0_linear_2_5)"
          />
          <path
            d="M15.3546 27.0698C10.9838 27.0698 7.26868 23.8566 6.51566 19.4283C6.50251 19.349 6.46315 19.2765 6.40385 19.2221C6.34455 19.1678 6.26872 19.1349 6.18847 19.1286C4.7992 19.0227 3.71088 17.812 3.71088 16.3733C3.71088 15.0062 4.65996 13.8597 5.96869 13.646C6.05897 13.6313 6.14027 13.5828 6.19615 13.5106C6.25202 13.4383 6.27829 13.3475 6.26965 13.2566C6.2428 12.9831 6.23031 12.7307 6.23031 12.4846C6.23031 7.80645 10.3232 4 15.3546 4C20.386 4 24.4764 7.80769 24.4764 12.4858C24.4764 12.7351 24.4639 12.9843 24.437 13.2578C24.4284 13.3487 24.4547 13.4395 24.5105 13.5118C24.5664 13.5841 24.6477 13.6325 24.738 13.6473C26.0461 13.861 26.9958 15.0075 26.9958 16.3745C26.9958 17.8132 25.9075 19.0239 24.5182 19.1298C24.4381 19.1361 24.3624 19.1688 24.3032 19.2229C24.2439 19.277 24.2044 19.3493 24.191 19.4283C23.4405 23.8566 19.7235 27.0698 15.3546 27.0698Z"
            fill="#FFE888"
          />
          <path
            d="M15.3546 4.36176C20.1868 4.36176 24.1186 8.00682 24.1186 12.4868C24.1186 12.7217 24.1061 12.9629 24.0811 13.2239C24.0633 13.4058 24.1156 13.5876 24.2273 13.7323C24.339 13.8771 24.5017 13.974 24.6824 14.0034C25.8157 14.1903 26.638 15.1873 26.638 16.3755C26.638 17.6273 25.6958 18.6809 24.4932 18.7725C24.3328 18.7847 24.1812 18.8501 24.0624 18.9583C23.9436 19.0665 23.8644 19.2112 23.8376 19.3695C23.4957 21.3996 22.4646 23.2506 20.9173 24.6121C19.3823 25.9656 17.4045 26.7126 15.3561 26.7126C13.3077 26.7126 11.33 25.9656 9.79496 24.6121C8.24548 23.2512 7.21217 21.3999 6.86843 19.3688C6.84181 19.2106 6.76283 19.0658 6.64411 18.9576C6.52539 18.8494 6.37376 18.784 6.21344 18.7719C5.01335 18.6797 4.07114 17.6267 4.07114 16.3749C4.07114 15.1848 4.89346 14.1872 6.02674 14.0028C6.20745 13.9734 6.37018 13.8765 6.48186 13.7317C6.59354 13.5869 6.64581 13.4052 6.62803 13.2233C6.60243 12.9622 6.59057 12.7211 6.59057 12.4862C6.59057 8.0062 10.5243 4.36113 15.3546 4.36113V4.36176ZM15.3546 3.64209C10.1153 3.64209 5.86939 7.60181 5.86939 12.4862C5.86939 12.7585 5.885 13.027 5.9106 13.2962C4.46076 13.5324 3.35059 14.819 3.35059 16.378C3.35059 18.0255 4.59001 19.3719 6.16036 19.4934C6.92712 24.0046 10.7503 27.4347 15.3546 27.4347C19.9589 27.4347 23.7839 24.0046 24.5488 19.4934C26.1198 19.3732 27.3586 18.0267 27.3586 16.378C27.3586 14.8203 26.2484 13.5324 24.7985 13.2962C24.8241 13.0302 24.8391 12.7616 24.8391 12.4862C24.8391 7.60181 20.5932 3.64209 15.3546 3.64209Z"
            fill="white"
          />
          <path
            d="M15.2803 24.0101C13.4727 24.0101 12.0023 22.5004 12.0023 20.6454C12.0006 20.6129 12.0056 20.5804 12.0169 20.5499C12.0282 20.5194 12.0456 20.4915 12.0681 20.4679C12.0905 20.4444 12.1176 20.4256 12.1475 20.4128C12.1775 20.3999 12.2097 20.3933 12.2423 20.3933C12.2749 20.3933 12.3072 20.3999 12.3372 20.4128C12.3671 20.4256 12.3941 20.4444 12.4166 20.4679C12.4391 20.4915 12.4565 20.5194 12.4678 20.5499C12.4791 20.5804 12.4841 20.6129 12.4824 20.6454C12.4824 22.2368 13.7375 23.5316 15.2803 23.5316C16.8232 23.5316 18.0782 22.2368 18.0782 20.6454C18.0782 20.5818 18.1036 20.5208 18.1487 20.4758C18.1937 20.4308 18.2549 20.4055 18.3186 20.4055C18.3824 20.4055 18.4435 20.4308 18.4886 20.4758C18.5337 20.5208 18.559 20.5818 18.559 20.6454C18.559 22.5004 17.088 24.0101 15.2803 24.0101Z"
            fill="#FF404A"
          />
          <path
            d="M14.4768 7.27965C14.7371 7.27965 14.9482 7.06261 14.9482 6.79488C14.9482 6.52716 14.7371 6.31012 14.4768 6.31012C14.2164 6.31012 14.0054 6.52716 14.0054 6.79488C14.0054 7.06261 14.2164 7.27965 14.4768 7.27965Z"
            fill="#FF404A"
          />
          <path
            d="M14.4768 8.89561C14.7371 8.89561 14.9482 8.67857 14.9482 8.41085C14.9482 8.14312 14.7371 7.92609 14.4768 7.92609C14.2164 7.92609 14.0054 8.14312 14.0054 8.41085C14.0054 8.67857 14.2164 8.89561 14.4768 8.89561Z"
            fill="#FF404A"
          />
          <path
            d="M14.4768 10.5115C14.7371 10.5115 14.9482 10.2945 14.9482 10.0268C14.9482 9.75903 14.7371 9.54199 14.4768 9.54199C14.2164 9.54199 14.0054 9.75903 14.0054 10.0268C14.0054 10.2945 14.2164 10.5115 14.4768 10.5115Z"
            fill="#FF404A"
          />
          <path
            d="M16.3611 7.27965C16.6214 7.27965 16.8325 7.06261 16.8325 6.79488C16.8325 6.52716 16.6214 6.31012 16.3611 6.31012C16.1007 6.31012 15.8896 6.52716 15.8896 6.79488C15.8896 7.06261 16.1007 7.27965 16.3611 7.27965Z"
            fill="#FF404A"
          />
          <path
            d="M16.3611 8.89561C16.6214 8.89561 16.8325 8.67857 16.8325 8.41085C16.8325 8.14312 16.6214 7.92609 16.3611 7.92609C16.1007 7.92609 15.8896 8.14312 15.8896 8.41085C15.8896 8.67857 16.1007 8.89561 16.3611 8.89561Z"
            fill="#FF404A"
          />
          <path
            d="M16.3611 10.5115C16.6214 10.5115 16.8325 10.2945 16.8325 10.0268C16.8325 9.75903 16.6214 9.54199 16.3611 9.54199C16.1007 9.54199 15.8896 9.75903 15.8896 10.0268C15.8896 10.2945 16.1007 10.5115 16.3611 10.5115Z"
            fill="#FF404A"
          />
          <path
            d="M13.7991 15.0224C13.7611 15.0225 13.7236 15.0136 13.6897 14.9964C13.6558 14.9791 13.6265 14.9541 13.6043 14.9234C13.0461 14.1582 12.4179 13.7563 11.7367 13.7302C10.4785 13.6834 9.39585 14.9252 9.38523 14.9377C9.36473 14.9617 9.3397 14.9815 9.31155 14.9958C9.2834 15.0102 9.25269 15.0189 9.22118 15.0214C9.18967 15.0239 9.15797 15.0202 9.12789 15.0105C9.09781 15.0008 9.06994 14.9853 9.04587 14.9648C9.02181 14.9443 9.00202 14.9194 8.98763 14.8913C8.97324 14.8632 8.96453 14.8325 8.96201 14.8011C8.95692 14.7376 8.97731 14.6747 9.01871 14.6262C9.06867 14.5676 10.2569 13.1931 11.7529 13.2498C12.5896 13.2809 13.3433 13.7482 13.9926 14.6405C14.0186 14.6762 14.0342 14.7184 14.0377 14.7624C14.0412 14.8064 14.0324 14.8505 14.0124 14.8898C13.9924 14.9292 13.9619 14.9623 13.9243 14.9855C13.8866 15.0086 13.8433 15.021 13.7991 15.0212V15.0224Z"
            fill="#FF404A"
          />
          <path
            d="M21.5791 15.0224C21.5412 15.0225 21.5038 15.0136 21.47 14.9963C21.4362 14.9791 21.407 14.9541 21.3849 14.9234C20.8267 14.1582 20.1986 13.7563 19.5173 13.7302C18.2554 13.6834 17.1765 14.9252 17.1659 14.9377C17.1454 14.9617 17.1203 14.9815 17.0922 14.9958C17.064 15.0102 17.0333 15.0189 17.0018 15.0214C16.9703 15.0239 16.9386 15.0202 16.9085 15.0105C16.8784 15.0008 16.8506 14.9853 16.8265 14.9648C16.8024 14.9443 16.7827 14.9194 16.7683 14.8913C16.7539 14.8632 16.7452 14.8325 16.7426 14.8011C16.7401 14.7696 16.7438 14.738 16.7536 14.708C16.7633 14.678 16.7789 14.6502 16.7994 14.6262C16.8493 14.5676 18.0369 13.1931 19.533 13.2498C20.3696 13.2809 21.1233 13.7482 21.7733 14.6405C21.7918 14.6659 21.8052 14.6948 21.8126 14.7254C21.82 14.7559 21.8212 14.7877 21.8163 14.8188C21.8114 14.8499 21.8003 14.8797 21.7839 14.9065C21.7674 14.9333 21.7457 14.9566 21.7202 14.9751C21.6795 15.0056 21.63 15.0222 21.5791 15.0224Z"
            fill="#FF404A"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2_5"
            x1="0"
            y1="15.4831"
            x2="30.9662"
            y2="15.4831"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF1500" />
            <stop offset="1" stopColor="#FF404A" />
          </linearGradient>
          <clipPath id="clip0_2_5">
            <rect width="30.9662" height="30.9662" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>Monk Upsell & Cross-sell</div>
    </div>
  );
}

function Container({ children }) {
  return <div className="container">{...children}</div>;
}

function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      index: 0, // Product index
      showVariants: false, // If set true, the product is selected other wise show picker
      data: {},
      discount: {},
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [productIndex, setProductIndex] = useState();

  function addNewProduct() {
    setCount((count) => {
      setProducts([
        ...products,
        {
          index: count + 1, // Product index
          showVariants: false, // If set true, the product is selected other wise show picker
          data: {},
          discount: {},
        },
      ]);
      return count + 1;
    });
  }

  function removeProduct(index) {
    setProducts([
      ...products.filter((product) => {
        return product.index != index;
      }),
    ]);
  }

  function showAddProductModal(index) {
    setProductIndex((productIndex) => {
      setShowModal(true);
      return index;
    });
  }

  function AddProductModal() {
    // Define the initial product list
    const initialProducts = [
      {
        id: 1,
        name: "Long Socks - Made with natural materials",
        variants: [
          {
            id: 0,
            name: "S/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 1,
            name: "M/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 2,
            name: "L/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        id: 2,
        name: "T-Shirt - Made with natural materials",
        variants: [
          {
            id: 0,
            name: "S/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 1,
            name: "M/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 2,
            name: "L/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        id: 3,
        name: "Ankle Socks - Made with natural materials",
        variants: [
          {
            id: 0,
            name: "S/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 1,
            name: "M/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 2,
            name: "L/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
        ],
        selected: false,
      },
      {
        id: 4,
        name: "Shorts - Made with natural materials",
        variants: [
          {
            id: 0,
            name: "S/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 1,
            name: "M/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
          {
            id: 2,
            name: "L/ White / Cotton",
            available: 99,
            price: 3.99,
            selected: false,
          },
        ],
        selected: false,
      },
      // { id: 6, name: 'Printed T-shirt', variant: 'S/ White / Cotton', available: 75, price: 8.99, selected: false },
    ];

    // State for product selection
    const [productSelection, setProductSelection] = useState([]);
    const [productCatalog, setProductCatalog] = useState(initialProducts);
    const [productDisplay, setProductDisplay] = useState(
      productCatalog.map((product) => product.id)
    );

    const handleSelectProduct = (productId) => {
      setProductCatalog(
        productCatalog.map((product) => {
          if (product.id !== productId) return product;
          product.selected = !product.selected;
          product.variants = product.variants.map((variant) => {
            return { ...variant, selected: product.selected };
          });
          return product;
        })
      );
    };

    // Function to toggle product selection

    
    const handleSelectProductVariant = (productId, variantId) => {
      setProductCatalog(
        productCatalog.map((product) => {
          if (product.id !== productId) return product;
          product.variants = product.variants.map((_variant) => {
            if (_variant.id !== variantId) return _variant;
            _variant.selected = !_variant.selected;
            return _variant;
          });
          product.selected =
            product.variants.filter((_variant) => _variant.selected).length > 0;
          return product;
        })
      );
    };

    const filterProductCatalog = (name) => {
      if (name === "") {
        setProductDisplay(productCatalog.map((_product) => _product.id));
      } else {
        setProductDisplay(
          productCatalog
            .filter((_product) =>
              _product.name
                .toLocaleLowerCase()
                .includes(name.toLocaleLowerCase())
            )
            .map((_product) => _product.id)
        );
      }
    };

    const handleAddProduct = (e) => {
      setShowModal(false);
      let [product] = productCatalog.filter((_product) => _product.selected);
      setProducts((_products) =>
        _products.map((_product) => {
          if (_product.index !== productIndex) return _product;
          _product.data.name = product.name;
          _product.data.variants = product.variants;
          return _product;
        })
      );
    };

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: 9999,
          background: "rgba(32, 32, 32, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "0",
          left: "0",
        }}
      >
        <div
          style={{
            width: "43vw",
            background: "white",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 28px",
              borderBottom: "1px solid rgba(224, 224, 224, 0.9)",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "500" }}>
              Select Products
            </div>
            <div style={{ cursor: "pointer" }}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => setShowModal(false)}
              >
                <path
                  d="M9.85859 8.85355L16.2929 15.2879L15.2879 16.2929L8.85355 9.85859L8.5 9.50504L8.14645 9.85859L1.71214 16.2929L0.707107 15.2879L7.14141 8.85355L7.49496 8.5L7.14141 8.14645L0.707107 1.71214L1.71214 0.707107L8.14645 7.14141L8.5 7.49496L8.85355 7.14141L15.2879 0.707107L16.2929 1.71214L9.85859 8.14645L9.50504 8.5L9.85859 8.85355Z"
                  fill="black"
                  fillOpacity="0.8"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div
            className="searchProduct"
            style={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.07)",
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "3px 7px",
                borderRadius: "5px",
              }}
            >
              <SearchIcon />
              <input
                type="search"
                name="search-input"
                placeholder="Search Product"
                style={{
                  padding: "8px 19px",
                  width: "100%",
                  background: "white",
                  border: "none",
                  color: "#333",
                }}
                onKeyUp={(e) => filterProductCatalog(e.target.value)}
              />
            </div>
          </div>
          <div
            className="product-list"
            style={{ height: "435px", overflowY: "scroll" }}
          >
            {productCatalog.map((product) => {
              if (!productDisplay.includes(product.id)) return;
              return (
                <div key={product.id} className="product-item">
                  <div className="productName">
                    <input
                      htmlFor="name"
                      type="checkbox"
                      checked={product.selected}
                      onChange={() => handleSelectProduct(product.id)}
                    />
                    <label id="name">{product.name}</label>
                  </div>
                  {product.variants.map((variant, vidx) => {
                    return (
                      <div className="productSize" key={vidx}>
                        <input
                          type="checkbox"
                          checked={variant.selected}
                          onChange={() =>
                            handleSelectProductVariant(product.id, variant.id)
                          }
                        />
                        <div
                          className="size"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <span>{variant.name}</span>
                          <span>{variant.available} available</span>
                          <span>${variant.price.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="addProduct">
            <p>
              <span>
                {productCatalog.filter((_product) => _product.selected).length}
              </span>{" "}
              product selected
            </p>
            <div className="buttons">
              <button
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(0, 0, 0, 0.6)",
                  backgroundColor: "transparent",
                  padding: "5px 12px",
                  height: "100%",
                  width: "92px",
                }}
                onClick={(e) => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                disabled={
                  productCatalog.filter((_product) => _product.selected)
                    .length === 0
                }
                style={
                  productCatalog.filter((_product) => _product.selected)
                    .length > 0
                    ? {
                        border: "1px solid #008060",
                        backgroundColor: "#008060",
                        padding: "5px 12px",
                        height: "100%",
                        width: "92px",
                      }
                    : {
                        color: "grey",
                        border: "1px solid #008060",
                        backgroundColor: "white",
                        padding: "5px 12px",
                        height: "100%",
                        width: "92px",
                      }
                }
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ProductRow({ product }) {

    function enableDiscount(e){
      setProducts((_products) =>
        _products.map((_product) =>
          _product.index !== product.index
            ? _product
            : { ..._product, discount: { value: 10, type: "%off" } }
        )
      );
    }

    function DiscountView() {
      return product.discount.value === undefined ? (
        <button onClick={enableDiscount} className="discount-btn">
          Add Discount
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "3px",
            gap: "10px",
          }}
        >
          <input
            style={{
              background: "white",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
              borderRadius: "5px",
              color: "#333",
              border: "none",
              padding: "0px 10px",
            }}
            id={`discount-value-${product.index}`}
            value={product.discount.value}
            onChange={(e) => {
              setProducts((_products) =>
                _products.map((_product) => {
                  if (_product.index !== product.index) return _product;
                  _product.discount.value = e.target.value;
                  return _product;
                })
              );
            }}
          />

          <div
            style={{
              background: "white",
              height: "100%",
              width: "60%",
              borderRadius: "5px",
              padding: "0px 15px",
            }}
          >
            <select
              id={`discount-type-${product.index}`}
              value={product.discount.type}
              onChange={(e) => {
                setProducts((_products) =>
                  _products.map((_product) => {
                    if (_product.index !== product.index) return _product;
                    _product.discount.type = e.target.value;
                    return _product;
                  })
                );
              }}
              style={{
                background: "white",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
                border: "none",
                borderRadius: "5px",
              }}
            >
              <option value={"%off"}>% off</option>
              <option value={"flat"}>flat</option>
            </select>
          </div>
        </div>
      );
    }

    return (
      <div
        className="row"
        key={product.index}
        style={{ borderBottom: "2px solid #ccc" }}
      >
        <div className="product">
          <div className="column">
            <DragIcon />
            <div style={{ height: "100%", paddingTop: "5px" }}>
              {product.index + 1}.
            </div>
            <div className="product">
              <div
                style={{
                  background: "white",
                  height: "40px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
                onClick={(e) => showAddProductModal(product.index)}
              >
                <div>
                  {product.data.name ? product.data.name : "Select Product"}
                </div>
                <PickerIcon />
              </div>
            </div>
          </div>
          <div className="column">
            <DiscountView />
          </div>
          <div
            className="column"
            style={{ display: "flex", paddingTop: "5px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => removeProduct(product.index)}
            >
              <path
                d="M11.6667 1.175L10.4917 0L5.83333 4.65833L1.175 0L0 1.175L4.65833 5.83333L0 10.4917L1.175 11.6667L5.83333 7.00833L10.4917 11.6667L11.6667 10.4917L7.00833 5.83333L11.6667 1.175Z"
                fill="black"
                fillOpacity="0.4"
              />
            </svg>
          </div>
        </div>
        {product.data.variants ? (
          <div
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              width: "100%",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
            onClick={(e) => {
              if (!product.data.variants) return;
              setProducts((_products) =>
                _products.map((_product) =>
                  _product.index === product.index
                    ? { ..._product, showVariants: !_product.showVariants }
                    : _product
                )
              );
            }}
          >
            {product.showVariants ? "Hide Variants ▲" : "Show Variants ▼"}
          </div>
        ) : null}

        <div className="variants">
          {product.showVariants
            ? product.data.variants.map((variant, vidx) => {
                return (
                  <div className="row" key={vidx}>
                    <div className="column" style={{ paddingLeft: "50px" }}>
                      <div className="select-btn">
                        <DragIcon />
                        &nbsp; &nbsp;
                        <div
                          style={{
                            background: "white",
                            height: "40px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0px 10px",
                            borderRadius: "5px",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>{variant.name}</div>
                          <PickerIcon />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <DiscountView />
                    </div>
                    <div
                      className="column"
                      style={{ display: "flex", paddingTop: "5px" }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => removeProduct(product.index)}
                      >
                        <path
                          d="M11.6667 1.175L10.4917 0L5.83333 4.65833L1.175 0L0 1.175L4.65833 5.83333L0 10.4917L1.175 11.6667L5.83333 7.00833L10.4917 11.6667L11.6667 10.4917L7.00833 5.83333L11.6667 1.175Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="title">Add Products</div>
      <div className="table">
        <div className="row head">
          <div className="column">Product</div>
          <div className="column">Discount</div>
        </div>
        <div className="body">
          {products.map((product, idx) => {
            if (!product) return;
            return <ProductRow product={product} key={idx} />;
          })}
        </div>
      </div>
      <div className="add-product">
        <button onClick={addNewProduct}>Add Product</button>
      </div>
      {showModal ? <AddProductModal /> : null}
    </div>
  );
}

function App() {
  return (
    <Container>
      <Title />
      <Products />
    </Container>
  );
}

export default App;
