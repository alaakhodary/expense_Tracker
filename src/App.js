import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import Container from "./global/Container";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  );
}

export default App;
