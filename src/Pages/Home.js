import React from 'react';
import RegistrationPage from '../Components/HomePage/RegistrationPage';
import SuperApp from '../Components/HomePage/superApp';

export default function Home() {
    return (
        <div style={{ display: 'flex' }}>
          <SuperApp />
          <RegistrationPage />
        </div>
    );
}

