import React from 'react';
import 'react-day-picker/lib/style.css';

import { Container } from './styles';

import privacyPolicy from '../../assets/politica_de_privacidade.pdf';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div>
        <a href={privacyPolicy}>Política de privacidade</a>
      </div>
    </Container>
  );
};

export default Dashboard;
