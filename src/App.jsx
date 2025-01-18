import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Titulo = ({ cor, texto ,children }) => {
  const active = false;
 return <div>
    <h1 style={{ color: cor}}>{texto}</h1>
    <h3>{children}</h3>
 </div>
};

const App = () => {
  return (
    <section>
      <Titulo cor="red" texto="Formulário de teste" >Preencha seus dados</Titulo>
      <Header />
      <Form />
      <Footer />
    </section>
  );
};

export default App;
