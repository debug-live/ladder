import React from 'react';
import { Link } from 'react-router-dom';
import { withAxios } from 'react-axios';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: '100%',
        background: theme.palette.background.paper,
    },
});

class LanguageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [],
            checked: [0]
        };
    }

    componentWillMount() {
        this.props.axios('/api/languages').then(result => {
            this.setState({languages: result.data});
        })
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };


    render() {
        let languages = this.state.languages;
        const { classes } = this.props;

        return (
            <Grid className={classes.root}>
            <div className={classes.list}>
                <h3>Language List</h3>
                <List>
                    {languages.map(lang => (
                        <ListItem
                            key={lang.id}
                            dense
                            button
                            className={classes.listItem}
                        >
                        <Checkbox
                            // checked={this.state.checked.indexOf(lang.id) !== -1}
                            tabIndex={-1}
                            onClick={this.handleToggle(lang.id)}
                            disableRipple
                        />
                        <Link to={`/languages/${lang.id}`}>{lang.desc}</Link>
                            {/*<ListItemText primary={`${lang.desc}`} />*/}
                        </ListItem>
                    ))}
                </List>
                <h5><Link to='/about'>About us</Link></h5>
            </div>
            </Grid>
        );
    }
}

LanguageList.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(withAxios(LanguageList));