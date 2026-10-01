import { useFetch } from "./hooks/useFetch.js";
import DepartmentForm from "./components/DepartmentForm.jsx";
import DepartmentList from "./components/DepartmentList.jsx";
import CherryBlossoms from "./components/CherryBlossoms.jsx";
import OfficeCat from "./components/Officecat.jsx"; // Importação restaurada aqui!
import "./App.css";

const url = "http://localhost:3000/departments";

function App() {
  const { data: departments, setData: setDepartments, loading } = useFetch(url);

  const handleCadastrar = async (novoDepto) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoDepto),
      });

      const deptoSalvo = await res.json();
      setDepartments((prev) => [...prev, deptoSalvo]);
    } catch (error) {
      console.error("Erro ao realizar o POST:", error);
    }
  };

  return (
    <div className="app-container">
      <CherryBlossoms />

      <header className="app-topo">
        <span className="jp">部署管理</span>
        <OfficeCat />
        <h1>Gerenciamento de Departamentos</h1>
        <p className="app-subtitulo">
          Cadastre e acompanhe os departamentos da empresa num cantinho arrumadinho.
        </p>
      </header>

      <DepartmentForm onCadastrar={handleCadastrar} departments={departments} />

      {loading && <p className="loading-message">Carregando departamentos...</p>}

      {!loading && <DepartmentList departments={departments} />}
    </div>
  );
}

export default App;
