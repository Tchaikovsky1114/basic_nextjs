import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default function UserIdPage(props: any) {
  return (
    <div>
        <p>
        {props.id}
        </p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
    const { params } = context;

    const userId = params?.uid;

    return {
        props: {
            id: 'user id-' + userId
        }
    };
}