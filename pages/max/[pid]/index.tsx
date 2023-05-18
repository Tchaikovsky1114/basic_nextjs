import fs from 'fs/promises'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import path from 'path'
import React from 'react'

interface Props {
    product: any
}

export default function ProductDetailPage({product}: Props) {

    if(!product) {
        return <p>Loading...</p>
    }
  return (
    <>
    <h1>Product name: {product.name}</h1>
    <p>Product Price: {product.price}</p>
    </>
  )
}
const getProductPriceData = async() => {
    const filePath = path.join(process.cwd(), 'dummy_backend.json');
    const jsonData =  await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    return data
}

export const getStaticProps = async (context:GetStaticPropsContext) => {
    const { params } = context;
    const data = await getProductPriceData();
    const productId = params?.pid;
    const product = data.products.find((product:any) => product.id == productId);

    if(!product) {
        return {
            notFound: true
        }
    }
    return {
        props: {
           product
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getProductPriceData();

    const ids = data.products.map((product: any) => product.id);
    
    const params = ids.map((id: any) => ({ params : { pid: id+'' } }))

    return {
        // SSG로 미리 생성할 페이지의 경로를 지정한다.
        paths: params,
        // 수백만개의 페이지가 있을 때, 모든 페이지를 미리 생성하는 것은 비효율적이다.
        // fallback: true로 설정하면, 미리 생성하지 않은 페이지는 요청이 들어올 때 생성한다.
        // 링크를 클릭하지 않고 URL에 직접 입력하면 페이지에 새 요청을 보낼 수 있게되고 오류가 발생하는데,
        // SSG가 생성되기 위해서 미리 생성된 페이지가 있어야 하기 때문이다.

        // fallback에 blocking을 설정하면 해당 페이지가 완전히 생성될 때까지 기다렸다가 서비스를 제공한다.
        
        fallback: true
    }
}
