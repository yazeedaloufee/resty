
import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Results from './components/results/results';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Count:0,
      result:{}

    }
  }

  handleResult=async(result)=>{
    await this.setState({
      result:result,
    })
    console.log(this.state.result)

  }

  render(){

    return (
      <div className="App">
        
      <Header/>
      <Form handleResult={this.handleResult}/>
      <Results count={this.state.result} header={this.state.result.headers} result={this.state.result.data}/>
      <Footer/>
    </div>
  );
}
}

export default App;
