// src/pages/Login.tsx
// Login page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import { useToast } from '@/hooks/use-toast';

interface LoginProps {
  onLogin: (user: { email: string; name: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a mock authentication. In a real app, you would call an API.
    setTimeout(() => {
      // Mock successful login
      setIsLoading(false);
      onLogin({ email, name: email.split('@')[0] });
      
      toast({
        title: "Logged in successfully",
        description: "Welcome back to ZYM Sport Hub!",
      });
      
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zym-blue mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to access your ZYM account</p>
        </div>
        
        <AuthForm 
          type="login" 
          onSubmit={handleSubmit} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default Login;
