import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskID: string,
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string, todolistId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    id: string, isDone: boolean, todolistId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    id: string, title: string, todolistId: string
}
type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType | AddTodolistActionType | RemoveTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskID)
            return copyState
        }
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]
                ]
            }
        case 'CHANGE-TASK-STATUS': {
            let stateCopy = {...state};

            let todolistTasks = stateCopy[action.todolistId];
            // найдём нужную таску:
            let task = todolistTasks.find(t => t.id === action.id);
            //изменим таску, если она нашлась
            if (task) {
                task.isDone = action.isDone;
            }
            return stateCopy;
        }
        case 'CHANGE-TASK-TITLE':{
            let stateCopy = {...state};
            //достанем нужный массив по todolistId:
            let todolistTasks = stateCopy[action.todolistId];
            // найдём нужную таску:
            let task = todolistTasks.find(t => t.id === action.id);
            //изменим таску, если она нашлась
            if (task) {
                task.title = action.title;
            }
                return stateCopy;}
        case "ADD-TODOLIST":
            let stateCopy={...state};

            stateCopy[action.todolistId]= [];

            return stateCopy;
        case "REMOVE-TODOLIST":{
            let stateCopy={...state};

          delete  stateCopy[action.id];

            return stateCopy;
        }
        default:
            throw new Error("I don't want understand this type")
    }
}

export const removeTaskAC = (taskID: string, todolistId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK', taskID: taskID,
        todolistId
    }
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', id, isDone, todolistId}
}
export const changeTaskTitleAC = (id: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', id, title, todolistId}
}