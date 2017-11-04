import React from 'react';
import {Link} from 'react-router-dom';
import List, {ListItem, ListItemText} from 'material-ui/List';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.buildList = this.props.location.state;
    }

    render() {
        return (
            <div>
                <h3>Build Status</h3>
                <List>
                    {this.buildList.map(lang => (
                        <ListItem key={lang}>
                            <ListItemText primary={`${lang}`}/>
                        </ListItem>
                    ))}
                </List>
                <b><Link to='/'>back to home</Link></b>
            </div>
        );
    }
}

export default About;