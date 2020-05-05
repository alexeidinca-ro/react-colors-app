import React, {Component} from 'react';
import MiniPalette from './MiniPalette';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

class PaletteList extends Component{

    constructor(props){
        super(props);
        this.state = {
            deleteDialogOpen: false,
            deleteId: ""
        }
        this.openDelete = this.openDelete.bind(this);
        this.closeDelete = this.closeDelete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    openDelete(id){
        this.setState({
            deleteDialogOpen: true,
            deleteId: id
        })
    }

    closeDelete(){
        this.setState({
            deleteDialogOpen: false,
            deleteId: ""
        })
    }

    handleDelete(){
        this.props.deletePalette(this.state.deleteId);
        this.closeDelete();
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }

    render(){
        const {palettes, classes} = this.props;
        const {deleteDialogOpen} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                        <TransitionGroup className={classes.palettes}>
                            {
                                palettes.map(pal => (
                                    <CSSTransition key={pal.id} classNames="fade" timeout={500}>
                                        <MiniPalette 
                                            key={pal.id} 
                                            id={pal.id} 
                                            {...pal} 
                                            handleClick={() => this.goToPalette(pal.id)} 
                                            openDialog={this.openDelete}
                                        />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                </div>
                <Dialog open={deleteDialogOpen} aria-labelledby="dialog-delete-title" onClose={this.closeDelete}>
                    <DialogTitle id="dialog-delete-title">Delete this pallete?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[700]}}><CheckIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[700]}}><CloseIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);