import React from 'react';
import Button from '../button/Button';
import './Form.scss';
import axios from 'axios';



class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            method: 'get',
            url: '',
            shown: 'none',
            styleArray: [
                { method: 'get', classN: 'clickedButton' },
                { method: 'put', classN: 'methodButton' },
                { method: 'patch', classN: 'methodButton' },
                { method: 'update', classN: 'methodButton' },
                { method: 'delete', classN: 'methodButton' },

            ]
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        await this.setState({
            url: e.target.linkinput.value,
        })
     this.handleRequest(this.state.method,this.state.url);
      

        
    }


    handleRequest=async(method,link)=>{
        let results=[];
        if (method==='get'){
             results= await axios.get(link);
        }
        if (method==='put'){
             results= await axios.put(link);
        }
        if (method==='patch'){
             results= await axios.patch(link);
            
        }
        if (method==='update'){
             results= await axios.update(link);
        }
        if (method==='delete'){
             results= await axios.delete(link);
        }
        console.log(results)
        this.props.handleResult(results);
        

    }
    chosenMethod = async mth => {

        let array = this.state.styleArray.map(element => {
            if (element.method === mth) {
                element.classN = 'clickedButton';
                return element;
            }
            else {
                element.classN = 'methodButton';
                return element;
            }
        })

        await this.setState({
            method: mth,
            styleArray: array,
        })
        
    }


    render() {
        return (
            <div className="Form">
                <form action="" onSubmit={this.handleSubmit}>
                    <label for='linkinput' class=''>
                        URL:
                    </label>
                    <input type="text" id="linkinput" />


                    <button type='submit'>Go!</button>
                    {/* <button onClick={this.handleMethod} value="get">Get</button>
                    <button onClick={this.handleMethod} value="Post">Post</button>
                    <button onClick={this.handleMethod} value="Put">Put</button>
                    <button onClick={this.handleMethod} value="Delete">Delete</button>  */}
                    <div>

                        <Button shown={this.state.shown} clickedMethod={this.chosenMethod} text='get' styleClass={this.state.styleArray[0]} />
                        <Button shown={this.state.shown} clickedMethod={this.chosenMethod} text='put' styleClass={this.state.styleArray[1]} />
                        <Button shown={this.state.shown} clickedMethod={this.chosenMethod} text='patch' styleClass={this.state.styleArray[2]} />
                        <Button shown={this.state.shown} clickedMethod={this.chosenMethod} text='update' styleClass={this.state.styleArray[3]} />
                        <Button shown={this.state.shown} clickedMethod={this.chosenMethod} text='delete' styleClass={this.state.styleArray[4]} />
                    </div>

                </form>

                <div className='requests'>
                    {`${this.state.method}     ${this.state.url}`}

                </div>
            </div>

        );
    }
}

export default Form;