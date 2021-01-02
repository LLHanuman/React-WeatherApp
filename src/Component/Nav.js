import { Navbar  } from 'react-bootstrap'


function Header() {
  return (

    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <div
        alt="Meteor"
        width="40"
        height="40"
        className="fas fa-meteor"
      />
      This weeks forecast:  
    </Navbar.Brand>
  </Navbar>

  );
}

export default Header;