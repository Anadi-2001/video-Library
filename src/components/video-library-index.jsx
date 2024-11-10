


// import { Link } from 'react-router-dom';
// import './video.css';

// export function VideoLibraryIndex() {
//     return (
//         <div className="d-flex justify-content-center align-items-center bg-image images" style={{ height: '100vh' }}>
//             <div>
//                 <Link to="/user-login" className="btn btn-primary">User Login</Link>
//                 <Link to="/admin-login" className="btn btn-warning mx-2">Admin Login</Link>
//             </div>
//         </div>
//     )
// }
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Container } from '@mui/material';
import './video.css';

export function VideoLibraryIndex() {
    return (
        <Container
            maxWidth="false"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(/path-to-your-image)`,
                backgroundSize: 'cover',
            }}
        >
            <Box>
                <Button 
                    component={RouterLink} 
                    to="/user-login" 
                    variant="contained" 
                    color="primary"
                    sx={{ marginRight: 2 }}
                >
                    User Login
                </Button>
                <Button 
                    component={RouterLink} 
                    to="/admin-login" 
                    variant="contained" 
                    color="warning"
                >
                    Admin Login
                </Button>
            </Box>
        </Container>
    );
}
