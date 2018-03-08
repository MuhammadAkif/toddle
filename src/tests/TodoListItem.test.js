/**
 * Created by akif.malhi on 3/7/2018.
 */
import React from 'react';
import {renderIntoDocument,findRenderedDOMComponentWithClass} from 'react-dom/test-utils';
import  TodoItem  from '../components/TodoItem.jsx';
import { expect } from 'chai';

describe('TodoItem Check',()=>{
    it('it should render a div with todo text',()=>{
        const component = renderIntoDocument(
            <TodoItem todoItem={{id:0,text:'alpha',done:false}} itemIndex={0} handleTodoDelete={()=>{}} handleTodoUpdate={()=>{}}/>
        );
        const todoListEle = findRenderedDOMComponentWithClass(component, 'todoListItem');
        expect(todoListEle).to.be.ok;

        const todoText = todoListEle.textContent;
        expect(todoText).to.equal('alpha');
    });
})
