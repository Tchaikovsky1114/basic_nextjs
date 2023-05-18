import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react'

export default function UserProfilePage(props : any) {
    const { username } = props;
  return (
    <div>
        <p>UserProfilePage</p>
        <p>{username}</p>
    </div>
  )
}


// getServerSideProps는 클라이언트 요청이 있을 때마다 실행되기에, getStaticProps처럼 revalidate를 사용할 수 없다.
// getServerSideProps는 서버에서 실행되기 때문에, 클라이언트의 쿠키나 세션에 접근할 수 있다.
// (Static Site Generation) SSG처럼 빌드타임에 생성되는 것이 아님.
// getServerSideProps와 getStaticProps 데이터 패칭의 차이점은, 컨텍스트에 접근할 수 있는 속성의 종류와 언제 실행될지에 대한 타이밍이다.
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
    // context는 GetServerSidePropsContext 타입이다.
    // context는 params, req, res, query 등의 속성을 가지고 있다.
    // 즉 사용자의 요청 객체와 응답 객체를 가져올 수 있다.
    // 헤더에 추가 정보를 담아 보낼 수도 있다.

    // const { params, req, res } = context;
    
    return {
        props: {
            username: 'Emerson'
        }
    };
}