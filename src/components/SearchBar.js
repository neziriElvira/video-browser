import React from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';

class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });

    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <Segment basic>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <h3><label htmlFor="video-search">Video Browser</label></h3>
                        <Input icon='search' inverted onChange={this.handleChange} name='video-search' type="text" placeholder="Search.." />
                    </Form.Field>
                </Form>
            </Segment>
        )
    }
}
export default SearchBar;