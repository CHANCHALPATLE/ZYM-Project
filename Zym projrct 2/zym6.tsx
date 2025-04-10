// src/components/AuthForm.tsx
// Reusable form for login and signup
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (e: React.FormEvent, email: string, password: string, name?: string) => void;
  isLoading?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit, isLoading = false }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'signup') {
      onSubmit(e, email, password, name);
    } else {
      onSubmit(e, email, password);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {type === 'login' ? 'Login to your account' : 'Create an account'}
        </CardTitle>
        <CardDescription>
          {type === 'login' 
            ? 'Enter your email and password to login to your account' 
            : 'Enter your details to create a new account'}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {type === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {type === 'login' && (
                <Link to="/forgot-password" className="text-xs text-zym-blue hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder={type === 'login' ? 'Enter your password' : 'Create a password'} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              minLength={6}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            type="submit" 
            className="w-full bg-zym-blue hover:bg-zym-accent" 
            disabled={isLoading}
          >
            {isLoading 
              ? 'Processing...' 
              : type === 'login' ? 'Login' : 'Sign Up'
            }
          </Button>
          <div className="text-sm text-center text-muted-foreground">
            {type === 'login' ? (
              <>
                Don't have an account?{' '}
                <Link to="/signup" className="text-zym-blue hover:underline">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-zym-blue hover:underline">
                  Login
                </Link>
              </>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
