import 'bootswatch/dist/cyborg/bootstrap.min.css';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  return (
<Container>
  <Component {...pageProps} />
</Container>

  )
}