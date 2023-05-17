import React from 'react'
import classes from './PreRendering.module.css'
import { GetStaticProps } from 'next';
import fs from 'fs/promises';
import path from 'path';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface Props {
  products: Product[]
}

export default function PreRendering(props: Props) {
  const { products } = props;
  
  return (
    <div className={classes.container}>
      <h1>Pre Rendering Page</h1>
      <ul>
        {
          products.map((product: Product) => (
            <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}원</p>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // CWD means current work directory
  const filePath = path.join(process.cwd(), 'dummy_backend.json'); 
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  console.log(data);
  return {
    props: {
      products: data.products
    }
  };
}