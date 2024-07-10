import  { useState, useEffect } from 'react';

export const ErrorBoundary = (prop) => {
  const { children } = prop;
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  // This hook handles errors when they occur
  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setError(error);
      setErrorInfo(errorInfo);
      setHasError(true);
      // You can also log the error to an error reporting service
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
    };

    // Attach window event listener for unhandled errors
    window.addEventListener('error', handleError);

    return () => {
      // Clean up by removing the event listener when component unmounts
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Reset error boundary state and render fallback UI
  const handleReset = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  if (hasError) {
    // Render the fallback UI when an error occurs
    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo && errorInfo.componentStack}
        </details>
        <button onClick={handleReset}>Try again</button>
      </div>
    );
  }

  // Render children if there's no error
  return children;
};