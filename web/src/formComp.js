import Reat from 'react';
import Checkbox from './checkbox';
import axios from 'axios';

const items = {aa: "11",bb: "22",cc: "33"};
class FormComp extends Reat.Component {
    componentWillMount () {
        //const items = this.handleFetchData();
        this.selectedCheckboxes = new Set();
    };

    toggleCheckbox(label) {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    };

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        //FIX: formdata?
        axios.post('/xx', JSON.parse(items))
            .then(function (res) {
                // output.className = 'container';
                // output.innerHTML = res.data;
            })
            .catch(function (err) {
                // output.className = 'container text-danger';
                // output.innerHTML = err.message;
            });
    };

    handleFetchData() {
        return axios.get('/list');
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            value={label}
        />
    );

    createCheckboxes = (items) => (
        items.map(this.createCheckbox)
    );

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes(items)}
                <button className="btn btn-default" type="submit">Save</button>
            </form>

        );
    }
}

export default FormComp;