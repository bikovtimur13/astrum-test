import './App.scss';
import { Layout } from "./layouts/Layout";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Main/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
