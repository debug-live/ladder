import React from 'react';


class Checkbox extends React.Component {
    state = {
        isChecked: false,
    };

    checkedBoxOnChange() {
        const { handleCheckboxChange, label } = this.props;

        this.state(
            ({ isChecked }) => ({
                isChecked: !isChecked,
            })

            handleC
        );
        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <label>
                {label}
                <input type="checkbox" value={label} checked={isChecked} onChange={this.checkedBoxOnChange}/>
            </label>
        );
    }
}

export default Checkbox;