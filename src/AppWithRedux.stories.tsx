import React from 'react';
import {ComponentStory, ComponentMeta, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";



export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as unknown as Meta<typeof AppWithRedux>;


const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>;


export const AppWithReduxStories = Template.bind({});



