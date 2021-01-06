import { Navbar } from 'react-bootstrap'
import styles from './index.css'


function Header() {
  return (
    <Navbar style={styles.Navbar} bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <div
        alt="Meteor"
        width="40"
        height="40"
        className="fas fa-meteor"
        
      />
      This weeks forecast:  
      
    </Navbar.Brand>
    <form class="d-flex">
        <input className="form-control me-2" id='search' type="search" placeholder="Enter City" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </Navbar>

  );
}

export default Header;