import React from 'react';
import { Dropdown } from 'rsuite';

function SignIn() {
    return (
        <Dropdown title="Sign Up/ Login">
            <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                <p>Signed in as</p>
                <strong>foobar</strong>
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item>Your profile</Dropdown.Item>
            <Dropdown.Item>Your stars</Dropdown.Item>
            <Dropdown.Item>Your Gists</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}

export default SignIn;