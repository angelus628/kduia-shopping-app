import React, { createContext, useReducer } from 'react';

//5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity = expense.quantity + action.payload.queatity;
                    updatedqty = true;
                }
            });
    }
};
