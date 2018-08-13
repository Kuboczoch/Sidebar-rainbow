import React, {Component} from 'react';
import {Link} from "react-router-dom";

function Text(props) {
    if (props.span)
        return (<span>{props.span}</span>);
    return ("");
}

function Icon(props) {
    if (props.icon)
        return (<i className={props.icon}/>);
    return ("");
}

function SidebarItem(props) {
    if (!props.href)
        return (
            <li className={props.className}>
            </li>
        );
    if (props.slide)
        return (
            <li>
                <Link to={props.href} className={"sidebar-item " + props.className}>
                    <Icon icon={props.icon}/>
                    <Text span={props.span}/>
                    <div className={"slide"}>
                        <div/>
                    </div>
                </Link>
            </li>
        );
    else
        return (
            <li>
                <Link to={props.href} className={props.className}>
                    <Icon icon={props.icon}/>
                    <Text span={props.span}/>
                </Link>
            </li>
        );
}

let iconNumber = 0;

function SidebarIcon(props) {
    iconNumber++;
    if (iconNumber % 3 === 0)
        return (
            <li>
                <a href={props.href} className={props.className} target={"_blank"}>
                    <i className={props.icon}/>
                </a>
            </li>
        );
    else
        return (
            <li>
                <a href={props.href} className={props.className} target={"_blank"}>
                    <i className={props.icon}/>
                </a>
            </li>
        );
}

class Navigation extends Component {
    render() {
        return (
            <nav className={"sidebar"}>
                <div className={"sidebar-sticky"}>
                    <ul className={"sidebar-list"}>
                        <SidebarItem slide={true} href={"/"} className={"home"} icon={"fas fa-home"} span={"Home"}/>
                        <SidebarItem slide={true} href={"/games"} className={"games"} icon={"fas fa-gamepad"}
                                     span={"Games"}/>
                        <SidebarItem className={"divider"}/>
                        <SidebarItem slide={true} href={"/about"} className={"about"} icon={"fas fa-user"}
                                     span={"About"}/>
                    </ul>
                    <ul className={"sidebar-icons"}>
                        <SidebarIcon href={"/"} className={"facebook"} icon={"fab fa-facebook-f"}/>
                        <SidebarIcon href={"https://github.com/Kuboczoch"} className={"github"} icon={"fab fa-github"}/>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
