import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [{id: '1', desc: 'aa'}, {id: '2', desc: 'bb'}],
        };
    }

    render() {
        let languages = this.state.languages;

        return(
            <div>
                <h3>Language List</h3>
                <ListGroup>
                    {
                        languages.map(lang => (
                            <ListGroupItem key={lang.id}>
                                {lang.desc}<br/>
                                {/*<ListGroup>*/}
                                    {/*{*/}
                                        {/*lans.map(lang => (*/}
                                            {/*<ListGroupItem key={lang.id}>*/}
                                            {/*</ListGroupItem>*/}
                                        {/*))*/}
                                    {/*}*/}
                                {/*</ListGroup>*/}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <b><Link to='/'>back to home</Link></b>
            </div>
        );
    }
}

export default About;