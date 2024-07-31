import React from 'react';
import Button from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';

function GithubLoginButton() {
  return (
    <Button>
      <span>
        <FaGithub />
      </span>
      <span>Continue with Github</span>
    </Button>
  );
}

export default GithubLoginButton;
