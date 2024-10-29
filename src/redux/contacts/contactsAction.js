import { createAction } from '@reduxjs/toolkit';

// Definicje akcji
export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const setFilter = createAction('contacts/setFilter');
