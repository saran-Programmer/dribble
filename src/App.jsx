import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPages from './components/pages/MainPage';

const App = () => {
  return(
    <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<MainPages isAdmin={false}/>}/>
          <Route path='admin' element={<MainPages isAdmin={true}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App