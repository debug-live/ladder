import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import { ListGroup, ListGroupItem, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {languages: []};

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.axios('/api/languages').then(result => {
            this.setState({languages: result.data});
        })
    }

    handleChange() {
        var data = {list :[{name:'b', desc: "xx"}]};
        this.props.axios.post('/api/build', data).then(result => {
            console.log(result);
            if(result.status === 201) {
                this.props.history.push('/build-status', data);
            }
        });
        console.log(this.state.languages);
        console.log(this.props);
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
                </ListGroup><br/>
                <Button color='secondary' onClick={this.handleChange}>Build</Button>
                {/*<h5><Link to='/about'>About us</Link></h5>*/}
            </div>
        );
    }
}

export default withAxios(LanguageList);