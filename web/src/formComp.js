import Reat from 'react';

class FormComp extends Reat.Component {
    componentWillMount () {
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

        axios.post('/xx', JSON.parse(data))
            .then(function (res) {
                output.className = 'container';
                output.innerHTML = res.data;
            })
            .catch(function (err) {
                output.className = 'container text-danger';
                output.innerHTML = err.message;
            });
    };

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
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes(items)}

                            <button className="btn btn-default" type="submit">Save</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default FormComp;