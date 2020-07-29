import React from 'react';
import Header from './components/Header';
import LogoMain from './components/LogoMain';
import ButtonMain from './components/ButtonMain';
import Footer from './components/Footer';
import Link from './components/Link';

function App() {
  return (
    <>
      <Header>
        <LogoMain />

        <ButtonMain>Novo Vídeo</ButtonMain>
      </Header>

      <Footer>
        <LogoMain />
        <span>
          Site feito na <strong>#ImersãoReact</strong> da <Link href="https://alura.com.br">Alura </Link>
        </span>
      </Footer>
    </>
  );
}

export default App;
