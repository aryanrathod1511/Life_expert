import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

export default function Header({ user }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleSignUp = ()=>{
    navigate("/auth/signup");
  }

  const handleLogout = () => {
    //logout logic
    navigate("/");
  }


  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        {/* Brand name */}
        <Navbar.Brand href="/" className="fw-bold">
          Life Expert
        </Navbar.Brand>

        {/* Conditional rendering based on auth */}
       <div className="button-group">
              {user ? (
                <>
                  <span className="welcome-message">Hello, {user.name}</span>
                </>
              ) : (
                <>
                  <Button onClick={handleLogin}>Login</Button>
                  <Button onClick={handleSignUp} variant="light">Become an expert</Button>
                </>
              )}
            </div>
      </Container>
    </Navbar>
  );
}
