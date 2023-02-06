import  Router from 'next/router'
import { NextResponse } from 'next/server'
const chat = ({data}) => {
    return (
        <h1 >
            {data}
        </h1>
     );
}
export async function getServerSideProps(context){
    if(context.req.isAuthenticated())
        return {
            props:{
                isAuthenticated:context.req.isAuthenticated(),
                data:context.req.session.passport.user
            }
        }
    else {
        Router.push('/signin');
        return {props:{}}
    }

}
export default chat;