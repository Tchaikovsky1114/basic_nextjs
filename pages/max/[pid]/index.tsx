import fs from 'fs/promises'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import path from 'path'
import React from 'react'

interface Props {
    product: any
}

export default function ProductDetailPage({product}: Props) {

    // if(!product) {
    //     return <p>Loading...</p>
    // }
  return (
    <>
    <h1>Product name: {product.name}</h1>
    <p>Product Price: {product.price}</p>
    </>
  )
}

export const getStaticProps = async (context:GetStaticPropsContext) => {
    const { params } = context;
    const filePath = path.join(process.cwd(), 'dummy_backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const productId = params?.pid;
    const product = data.products.find((product:any) => product.id == productId);

    return {
        props: {
           product
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        // SSG로 미리 생성할 페이지의 경로를 지정한다.
        paths: [
            { params: { pid: '1' }},
            { params: { pid: '2' }},
            { params: { pid: '3' }},
        ],
        // 수백만개의 페이지가 있을 때, 모든 페이지를 미리 생성하는 것은 비효율적이다.
        // fallback: true로 설정하면, 미리 생성하지 않은 페이지는 요청이 들어올 때 생성한다.
        // 링크를 클릭하지 않고 URL에 직접 입력하면 페이지에 새 요청을 보낼 수 있게되고 오류가 발생하는데,
        // SSG가 생성되기 위해서 미리 생성된 페이지가 있어야 하기 때문이다.
        // 
        // fallback: false
        fallback:'blocking'
    }
}
