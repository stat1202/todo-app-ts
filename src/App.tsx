import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useRecoilValue} from "recoil";

import Login from './pages/Login';
import DailyTodo from './pages/DailyTodo';
import TodoDescription from './components/TodoDescription';
import { isOpenState } from './recoil/todo';

function App() {
  const isOpen = useRecoilValue<boolean>(isOpenState)
  return (
    <div className='w-full h-screen flex '>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="daily-todo" element={<DailyTodo/>}/>
      </Routes>
      {
        isOpen
        &&
        <TodoDescription/>
      }
      
    </div>
  );
}

export default App;
