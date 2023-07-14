import { atom } from "recoil";
import { TodoContent } from "../pages/DailyTodo";
import uuid from "react-uuid";

const now = new Date()

export const isOpenState = atom<boolean>({
  key: "isOpenState",
  default: false
})

export const todosState = atom<TodoContent[]>({
  key: "todosState",
  default: [{
    id: uuid(),
    // date: `${now.getFullYear()}-${now.getMonth() >=10  ? now.getMonth() : '0' + now.getMonth()}-${now.getDate()}`,
    title: "sample",
    description: "description sample"
  }]
})

export const clickIdState = atom<string>({
  key: "clickIdState",
  default: ""
})