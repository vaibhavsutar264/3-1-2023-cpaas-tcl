import React from 'react';
import { Link } from "react-router-dom";

// const ProductCard = ({product}) => {
//     const options = {
//         size:"small",
//         value: product.ratings,
//         readOnly: true,
//         precision: 0.5,
//       };
//     return (
//         <Link className="productCard" to={`/Invoices/${invoices._id}`}>
//         <p>{invoices.PO_number}</p>
//         </Link>
//     )
// }

// export default ProductCard

const invoice = (TableData: any) => {
    const { data, columns, tableName } = TableData
  return (
    <div>invoice</div>
  )
}

export default invoice
