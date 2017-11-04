import React from 'react';
import {Link} from 'react-router-dom';
import {withAxios} from 'react-axios';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';


class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {languages: [], buildList: []};
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.axios.get('/api/languages').then(result => {
            if (result.status === 200) {
                this.setState({
                    languages: result.data,
                });
            }
        })
    }

    handleClick() {
        let {buildList} = this.state;

        if (buildList.length === 0) {
            alert('Please select languages first!');
        } else {
            this.props.axios.post('/api/build', {list: buildList}).then(result => {
                if (result.status === 201) {
                    this.props.history.push('/build-status', buildList);
                }
            });
        }
    }

    handleToggle = value => () => {
        const {buildList} = this.state;
        console.log(buildList);
        const currentIndex = buildList.indexOf(value);
        const newBuildList = [...buildList];

        if (currentIndex === -1) {
            newBuildList.push(value);
        } else {
            newBuildList.splice(currentIndex, 1);
        }

        this.setState({
            buildList: newBuildList,
        });

        console.log(newBuildList);
    };

    render() {
        let languages = this.state.languages;
        let list = null;
        let build = <Button raised onClick={this.handleClick}>Build</Button>;

        if (languages.length !== 0) {
            list = <List>
                {languages.map(lang => (
                    <ListItem key={lang.id}>
                        <Checkbox onClick={this.handleToggle(lang.id)}/>
                        <ListItemText primary={`${lang.desc}`}/>
                    </ListItem>
                ))}
            </List>;
        }
        else {
            list = <p>No language list available!</p>
            build = <Button raised disabled>Build</Button>;
        }

        return (
            <div>
                <h3>Language List</h3>
                {list}
                {build}
                <h5><Link to='/about'>About us</Link></h5>
            </div>
        );
    }
}

export default withAxios(LanguageList);