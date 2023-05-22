import { GetStaticPropsContext } from 'next';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

interface Sales {
    id: string;
    username: string;
    volume: number;
}


// throw new Error('Failed to fetch')를 사용하면, useSWR의 error 속성을 사용할 수 있다.
async function fetcher(url: string) {
    const response = await fetch(url);
    if(!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data;
}

export default function LastSalesPage({initialSales}: {initialSales: Sales[]}) {

    const [sales, setSales] = useState<Sales[]>(initialSales);

  const { data, error } = useSWR('https://nextjs-course-9b4a0-default-rtdb.firebaseio.com/sales.json', fetcher );
    // CSR
    useEffect(() => {
        if(data){
            const transformedSales = [];
            for(const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }
            setSales(transformedSales);
        }
    },[data])
    
    if(error) {
        return <p>Failed to load</p>
    }
    if(!data && !sales) {
        return <p>Loading...</p>
    }
    // 기본 스냅샷을 프리랜더링 한 이후 클라이언트에서 최신 데이터를 가져오는 패턴

  return (
    <div></div>
  )
}

export const getStaticProps = async (context:GetStaticPropsContext) => {

    try {
        const response = await fetch('https://nextjs-course-9b4a0-default-rtdb.firebaseio.com/sales.json');
        const data = await response.json();
        if(!data) {
            throw Error('Failed to fetch!')
        }

        const transformedSales = [];
        for(const key in data) {
        if(data[key].username !== undefined){
            transformedSales.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume
            })
        }
        return {
            props: {
                initialSales: transformedSales
            },
        }
        }
    } catch (error) {
        return {
            props: {
                initialSales: null
            }
        }
    }

}