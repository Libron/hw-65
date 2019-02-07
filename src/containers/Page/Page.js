import React, {Component} from 'react';
import axios from '../../axios-instance';
import {Container} from "reactstrap";

import './Page.css';
class Page extends Component {
    state = {
        title: '',
        content: ''
    };

    loadPage = () => {
        let pageID = this.props.match.params.name;
        if (!pageID) {
            pageID = 'about';
        }
        axios.get('pages/' + pageID + '.json').then(response => {
            this.setState({...response.data});
        });
    };

    componentDidMount() {
        this.loadPage();
    };

    componentDidUpdate(nextProps) {
        if (this.props.match.params.name !== nextProps.match.params.name) {
            this.loadPage();
        }

    };

    render() {
        return (
            <Container className="Page">
                <h1>{this.state.title}</h1>
                <div>{this.state.content}</div>
            </Container>
        );
    }
}

export default Page;