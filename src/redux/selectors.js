import { createSelector } from "@reduxjs/toolkit";
export const getContacts = ({ contacts: { contacts } }) => contacts;

export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
   

    switch (filter) {
      case !filter:
        return contacts;
      case filter:
        const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
      default:
        return contacts;
    }
  }
);