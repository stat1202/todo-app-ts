import React from 'react'
import TodoInput from '../components/TodoInput';
import Todo from '../components/Todo';
import {useRecoilState} from "recoil"
import { todosState } from '../recoil/todo';

export type TodoContent = {
  id: string;
  // date: string;
  title: string;
  description: string;
}

function DailyTodo() {
  const day_arr = ['일', '월', '화', '수', '목', '금', '토']
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = day_arr[now.getDay()];

  const [todos, setTodos] = useRecoilState<TodoContent[]>(todosState)
  const name = localStorage.getItem('name')

  return (
    <div className='flex flex-col items mx-auto w-11/12 max-w-md'>
      <div className='pt-10'>
        <h1 className='font-sans-kr font-extrabold text-6xl text-zep my-3'>{`${name}'s TODO`}</h1>
        <span className='ml-3 font-sans-kr font-semibold text-zep text-lg'>{`TODAY - ${year}.${month}.${date} ${day}`}</span>
      </div>
      <main className='flex flex-col h-fit mt-10 gap-2'>
        <TodoInput setTodos={setTodos}/>
        {
          todos.map( todo => <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>)
        }
        
      </main>
    </div>
  )
}

export default DailyTodo