
import React from 'react';
import './Button.scss'

class Button extends React.Component{
constructor(props){
    super(props);
    this.state = {
        clicked:false,
        classN:this.props.styleClass,
}}


     method= ()=>{
        let text = this.props.text;
        this.props.clickedMethod(text);
        
       
        
    }


    

    render(){

        return(
          
                <div
                className= {this.state.classN.classN}
                //  style= {{display:this.props.shown} } 
                //  style= {{border: " 1px solid black"} } 

                onClick= {this.method}
                >
                    
                <p>{this.props.text} </p>
                     </div>
         
        )
    }
}
export default Button;