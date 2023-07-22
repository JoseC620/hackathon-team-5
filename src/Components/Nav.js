import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Nav() {
  return(
    <Navbar bg='primary' expand='lg' varient='light'>
        <Link style={{color: "Black"}}>Hello</Link>
    </Navbar>
  )
}