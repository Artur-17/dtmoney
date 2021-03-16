import Modal from 'react-modal'
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
     <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 

      <GlobalStyle />

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        >
        <h1>Cadastrar nova transação</h1>
            
      </ Modal> 

      <Dashboard />
     </>
    </div>
  );
}
