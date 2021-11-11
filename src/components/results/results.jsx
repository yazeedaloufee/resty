import React from 'react';
import './results.scss';
// import ReactJson from 'react-json-view'
import JSONPretty from 'react-json-pretty';


class Results extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
                <div className='Results'>
                    {/* <p>{this.props.header}</p> */}
                    {/* <JSONPretty id="json-pretty" data={this.props.header}></JSONPretty> */}
                    <JSONPretty id="json-pretty" data={this.props.result}></JSONPretty>
                    {/* <ReactJson src={this.props.result} theme="monokai" /> */}
                </div>

            </React.Fragment>
        );
    }
}
export default Results;