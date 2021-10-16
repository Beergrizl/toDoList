import React from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";


export default {
    title: 'Todolist/Task',
    component: Task,
    args:{
        changeTaskStatus: action('Status changed'),
        changeTaskTitle: action('Title changed'),
        removeTask: action('Status changed')
    }
} as Meta;

/*const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback = action('Title changed')
const removeTaskCallback = action('Status changed')*/

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});
TaskIsDoneStories.args = {
    task: {id: '1', isDone: true, title: "JS"},
    todolistId: 'todo1',
   };

export const TaskIsNotDoneStories = Template.bind({});
TaskIsNotDoneStories.args = {
    task: {id: '2', isDone: false, title: "CSS"},
    todolistId: 'todo2',
   };

