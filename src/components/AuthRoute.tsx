import { onAuthStateChanged } from 'firebase/auth';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/config';

const AuthRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log('Unauthorized');
        navigate('/login');
      }
    });

    // Limpia la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthRoute;
