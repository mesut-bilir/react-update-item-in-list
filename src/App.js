import './App.css';
import List from './components/list';
import Edit from './components/edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <BrowserRouter>
          <h2 className="main-header">React Edit Data</h2>

          <div style={{ marginTop: 20 }}>
            <Routes>
              <Route index spath="/" element={<List />} />
              <Route path="edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Provider>


  );
}

export default App;
