import React, {Component} from 'react';
import axios from '../axios-instance';

class Page extends Component {
    constructor(props) {
        super(props);
        if (props.match.params.name) {
            this.url = 'pages/' + props.match.params.name + '.json';
        }
        console.log(props);
    };

    componentDidMount() {
        const pageName = this.props.match.params.name;
        if (pageName) {
            axios.get(this.url).then(response => {
               console.log(response.data);
            });
        }
    };
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Page;