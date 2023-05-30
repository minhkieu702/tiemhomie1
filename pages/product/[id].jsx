import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {

    const router = useRouter();

  return (
    <div>ProductDetail : {router.query.id}</div>
  )
}

export default ProductDetail