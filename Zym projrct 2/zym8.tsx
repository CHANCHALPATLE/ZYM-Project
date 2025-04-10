// src/pages/SignUp.tsx
// Signup page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import { useToast } from '@/hooks/use-toast';

interface SignUpProps {
  onSignUp: (user: { email: string; name: string }) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, email: string, password: string, name?: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a mock registration. In a real app, you would call an API.
    setTimeout(() => {
      // Mock successful registration
      setIsLoading(false);
      onSignUp({ email, name: name || email.split('@')[0] });
      
      toast({
        title: "Account created",
        description: "Welcome to ZYM Sport Hub!",
      });
      
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zym-blue mb-2">Join ZYM</h1>
          <p className="text-gray-600">Create an account to start your fitness journey</p>
        </div>
        
        <AuthForm 
          type="signup" 
          onSubmit={handleSubmit} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default SignUp;
