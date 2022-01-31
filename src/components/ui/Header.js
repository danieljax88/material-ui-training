import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg'
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0
    },
    tabContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: '10',
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: "45px"
    },
    menu: {
        backgroundColor: theme.palette.common.blue
    }

})

)
const Header = (props) => {

    const classes = useStyles()
    const [index, setIndex] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setopen] = useState(false)

    const tabChangeHandler = (event, index) => {
        setIndex(index)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setopen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setopen(false)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && index !== 0) {
            setIndex(0)
        } else if (window.location.pathname === "/services" && index !== 1) {
            setIndex(1)
        } else if (window.location.pathname === "/revolution" && index !== 2) {
            setIndex(2)
        } else if (window.location.pathname === "/about" && index !== 3) {
            setIndex(3)
        } else if (window.location.pathname === "/contact" && index !== 4) {
            setIndex(4)
        } else if (window.location.pathname === "/estimate" && index !== 5) {
            setIndex(5)
        }
    }, [index])
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters><Button component={Link} to="/" disableRipple
                        onClick={() => setIndex(0)} disableRipple className={classes.logoContainer}><img alt="company logo" src={logo} className={classes.logo} /></Button>
                        <Tabs indicatorColor="primary" value={index} onChange={tabChangeHandler} className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={event => handleClick(event)} className={classes.tab} component={Link} to="/services" label="Services"></Tab>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"></Tab>
                            <Tab className={classes.tab} component={Link} to="/about" label="About Us"></Tab>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"></Tab>
                        </Tabs>
                        <Button variant="contained" className={classes.button} color="secondary">Free Estimate</Button>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} classes={{ paper: classes.menu }} MenuListProps={{ onMouseLeave: handleClose }}>
                            <MenuItem onClick={() => { handleClose(); setIndex(1) }} component={Link} to="/services">Services</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setIndex(1) }} component={Link} to="/customsoftware">Custom Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setIndex(1) }} component={Link} to="/mobileapps">Mobile App Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setIndex(1) }} component={Link} to="/websites">Website Development</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar></ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>)
}

export default Header