import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";


function Header() {


  return (
      // <Container maxWidth="xl">
      <div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHOE STORE
          </Typography>

          <Link to='/'>Home</Link> {"  "}
          <Link to='/products'>Products</Link>

          </div>

      // </Container>
  );
}
export default Header;