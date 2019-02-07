import React, {Component} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "../../axios-instance";

class Admin extends Component {
    state = {
        titles: null,
        pageTitle: '',
        title: '',
        content: ''

    };

    componentDidMount() {
        axios.get('pages.json').then(response=>{
            const titles = Object.keys(response.data);
            this.setState({titles, pageTitle: titles[0], ...response.data[titles[0]]});
        });
    }

    valueChanged = event => {
        const {name, value} = event.target;
        if (name === 'pageTitle') {
            axios.get('pages/'+ value +'.json').then(response=>{
                this.setState({...response.data});
            });
        }
        this.setState({[name]: value});
    };


    submitHandler = event => {
        event.preventDefault();
        const data = {...this.state};
        const pageID = data.pageTitle;
        axios.put('pages/' + pageID + '.json', {
            title: data.title,
            content: data.content
        }).then(()=>{
            this.props.history.replace('/pages/' + pageID);
        });


    };

    render() {
        if (!this.state.titles) {
            return null;
        }

        return (
            <Container>
                <h2>Edit page</h2>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label for="pageTitle">Select</Label>
                        <Input type="select" name="pageTitle" id="pageTitle" onChange={this.valueChanged}>
                            {this.state.titles.map(title=>(
                                <option key={title} value={title}>{title}</option>
                            ))}

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={this.state.title} onChange={this.valueChanged}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="content">Text Area</Label>
                        <Input type="textarea" name="content" id="content" value={this.state.content} onChange={this.valueChanged} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>



            </Container>
        );
    }
}

export default Admin;