import React from 'react';
import Button from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

function GoogleLoginButton() {
  return (
    <Button>
      <span>
        <FcGoogle />
      </span>
      <span>Continue with Google</span>
    </Button>
  );
}

export default GoogleLoginButton;
