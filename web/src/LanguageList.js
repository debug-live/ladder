import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
                <ol>
                {
                    languages.map(lang => (
                        <ListGroup>
                        <ListGroupItem key={lang.id}><Link to={`/languages/${lang.id}`}>{lang.desc}</Link></ListGroupItem>
                        </ListGroup>
                    ))
                }
                </ol>
                <h5><Link to='/about'>About us</Link></h5>
            </div>
        );
    }
}

export default withAxios(LanguageList);