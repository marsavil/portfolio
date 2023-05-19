import 'bootswatch/dist/cyborg/bootstrap.min.css'
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    
  }, [])
  return (
<Container>
  <Component {...pageProps} />
</Container>

  )
}