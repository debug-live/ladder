import React from 'react';
import { Form, Text } from 'react-form';


class FormComp extends React.Component {
    render() {
        return (
            <Form>
                { formApi => (
                    <form onSubmit={formApi.submitForm} id="form1">
                        <label htmlFor="hello">Hello World</label>
                        <Text field="hello" id="hello" />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Form>
        );
    }
}

export default FormComp;