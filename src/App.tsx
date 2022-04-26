import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import FolderList from './components/FolderList';
import { getFolders } from './services/folders.service';
import FilesList from './components/FilesList';

function App() {
  const [folders, setFolders] = useState({})

  useEffect(()=>{
      getFolders().then((response)=>{
          console.log(response.data.files)
          setFolders(response.data.files)
      })
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/TestGetwin-file-system/' element={<FolderList folders={folders} />}/>
          <Route path='/TestGetwin-file-system/:folder' element={<FilesList folders={folders} />}/>
          <Route
              path="*"
              element={<Navigate to='/TestGetwin-file-system/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
