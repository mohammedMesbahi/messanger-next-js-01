import { Html, Head, Main, NextScript } from 'next/document'
import { getServerSideToken,getUserScript } from '@/lib/auth';

export default function Document(props) {
  const {user ={}} = props;

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <script dangerouslySetInnerHTML={{__html:getUserScript(user)}} ></script>
        <NextScript />
      </body>
    </Html>
  )
}
export async function getStaticProps(context){
  const props = await document.getStaticProps(context)
  const userData = getServerSideToken(context.req)
  return{ ...props,...userData}
}