import React from 'react';
import './Form.scss'

class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            method: '',
            url: '',
        }
    }
    handleMethod = async e => {
        e.preventDefault();

        await this.setState({
            method: e.target.value,
        })
        console.log('e.target', e.target.value);
        console.log('this.state.method', this.state.method)
    }
    handleSubmit = async e => {
        e.preventDefault();
        await this.setState({
            url: e.target.linkinput.value,
        })
        console.log('e.target', e.target.linkinput.value);
        console.log('this.state.url', this.state.url)
    }


    render() {
        return (
            <div className="Form">
                <form action="" onSubmit={this.handleSubmit}>
                    <label for='linkinput' class=''>
                        URL:
                    </label>
                    <input type="text" id="linkinput" />


                    {/* <a href=""> Get</a> */}
                    <button type='submit'>Go!</button>
                    <button onClick={this.handleMethod} value="get">Get</button>
                    <button onClick={this.handleMethod} value="Post">Post</button>
                    <button onClick={this.handleMethod} value="Put">Put</button>
                    <button onClick={this.handleMethod} value="Delete">Delete</button>


               
                </form>

                <div className='requests'>
                    {`${this.state.method}     ${this.state.url}`}

                </div>
            </div>

        );
    }
}

export default Form;