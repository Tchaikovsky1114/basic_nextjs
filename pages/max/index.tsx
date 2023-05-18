import React from 'react'
import classes from './PreRendering.module.css'
import { GetStaticPropsContext, Redirect } from 'next';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

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
            <Link href={`/max/${product.id}`} key={product.id}>
              <p>{product.name}</p>
            </Link>
          ))
        }
      </ul>
      
    </div>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log('(PreRendering) getStaticProps');
  // CWD means current work directory
  const filePath = path.join(process.cwd(), 'dummy_backend.json'); 
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  
  if(!data) {
    return {
    redirect: {
      destination: '/no-data'
      }
    }
  }
  if(data.products.length === 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      products: data.products
    },
    revalidate: 10,
    
  };
}