import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';


test('tests that First Name, Last Name, Email, and Message labels exist', async () => {
    const { getByLabelText, findByTestId, queryByTestId, to } = render(<ContactForm />)
    const fName = getByLabelText(/first name/i);
    const lName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);


    fireEvent.change(fName, { target: { value: 'First Name' } });
    fireEvent.change(lName, { target: { value: 'Last Name' } })
    fireEvent.change(email, { target: { value: 'Email' } });
    fireEvent.change(message, { target: { value: 'Message Example' } });


    expect(fName.value).toBe('First Name');
    expect(lName.value).toBe('Last Name');
    expect(email.value).toBe('Email');
    expect(message.value).toBe('Message Example');

    await act(async () => {
        const submit = await findByTestId(/submit/i)
        fireEvent.click(submit);
    })

    await waitForElement(async () => {
        expect(queryByTestId(/pre submit/i))
    })
})






