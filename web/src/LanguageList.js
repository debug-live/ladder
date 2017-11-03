import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {languages: []};
    }

    componentWillMount() {
        this.props.axios('/api/languages').then(result => {
            this.setState({languages: result.data});
        })
    }

    render() {
        let languages = this.state.languages;

        return (
            <div>
                <h3>Language List</h3>
                <ListGroup>
                {
                    languages.map(lang => (
                        <ListGroupItem key={lang.id}>
                            <Input type="checkbox" />
                            <Link to={`/languages/${lang.id}`}>{lang.desc}</Link>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>
                <h5><Link to='/about'>About us</Link></h5>
            </div>
        );
    }
}

export default withAxios(LanguageList);