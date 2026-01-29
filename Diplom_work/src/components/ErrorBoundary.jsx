import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                            textAlign: 'center',
                        }}
                    >
                        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
                        <Typography variant="h4" component="h1" gutterBottom>
                            Oops! Something went wrong
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                            We're sorry for the inconvenience. Please try refreshing the page.
                        </Typography>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <Box
                                sx={{
                                    backgroundColor: '#f5f5f5',
                                    borderLeft: '4px solid #d32f2f',
                                    p: 2,
                                    borderRadius: 1,
                                    mb: 3,
                                    maxWidth: '100%',
                                    overflow: 'auto',
                                    textAlign: 'left',
                                }}
                            >
                                <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                    {this.state.error.toString()}
                                </Typography>
                                {this.state.errorInfo && (
                                    <Typography variant="body2" component="pre" sx={{ mt: 1, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.75rem' }}>
                                        {this.state.errorInfo.componentStack}
                                    </Typography>
                                )}
                            </Box>
                        )}
                        <Button variant="contained" onClick={this.handleReset} sx={{ mt: 2 }}>
                            Go to Home
                        </Button>
                    </Box>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
