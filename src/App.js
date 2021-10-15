import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <div className="navbar bg-dark text-light shadow">
        <h1 className="navbar-brand ms-3 display-1">
          &#128203; Welcome, comienza a planear.
        </h1>
      </div>
      <main className="container w-50 mt-3">
        <TodoList />
      </main>
      <footer className="fixed-bottom py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyrightless &copy; </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
