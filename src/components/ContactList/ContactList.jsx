import React from 'react';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
   <>
      {filteredContacts.length>0
        ? filteredContacts.map(({ id, name, number }) => (
          <ul className="contactList" key={id}>
            <li className="contactList__item"  key={id}>
              <div>
                {name}: <span className="contactList__number">{number}</span>
              </div>
              <button
                className="contactList__btn"
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
            </ul>
          ))
        : "contacts is none"}
    </>
  );
};

export default ContactList;