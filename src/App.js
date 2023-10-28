import Base from './layouts/base';
import Main from './page/main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Main />} />
        </Route>
        {/* <Route path="/" element={<ProtectedRoutes />}>
        <Route element={<Base />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
