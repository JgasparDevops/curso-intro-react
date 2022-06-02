import Home from './views/home'
import { TodoProvider } from './TodoContext'
function App() {

  
  return (
    <TodoProvider>
      <Home></Home>
    </TodoProvider>   
  );
}

export default App;

