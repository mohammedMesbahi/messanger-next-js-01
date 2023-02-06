import  Router from 'next/router'
import {authInitialProps} from 'lib/auth';
import { NextResponse } from 'next/server'
const chat = ({data}) => {
    return (
        <h1 >
            welcome to chat
        </h1>
     );
}
export  const getServerSideProps = authInitialProps(true);

export default chat;