import React from 'react';
import './App.css';


class App extends React.Component {

  state={
    name:'',
    address:'',
    loginScreen:'yes',
    nameError:'',
    addressError:''
  }

  onNameChange = (event) =>{
    this.setState({name:event.target.value})
}

  onAddressChange = (event) =>{
    this.setState({address:event.target.value})
  }

  onKeyPress = (event) => {
    if(event.which === 13){
      this.submitForm();
    }
  }

  submitForm = () =>{
    if(this.state.name === '' || this.state.address === ''){
      if(this.state.name === ''){
        this.setState({nameError:'* Name is required'})
      }else{
        this.setState({nameError:''})
      }
      if(this.state.address === ''){
        this.setState({addressError:'* Address is required'})
      }else{
        this.setState({addressError:''})
      }
    }else if(this.state.name.length < 5 || this.state.address.length < 5){
      if(this.state.name.length < 5){
        this.setState({nameError:'* Name should have atleast 5 characters'})
      }else{
        this.setState({nameError:''})
      }
      if(this.state.address.length < 5){
        this.setState({addressError:'* Address should have atleast 5 characters'})
      }else{
        this.setState({addressError:''})
      }
    }else{
      this.setState({loginScreen:'no'})
    }
  }

  render(){
    if(this.state.loginScreen === 'yes'){
      return (
        <div className="App">
          <div className="ui raised very padded text container segment" style={{position:'absolute',top:'5%',left:'30%'}}>
          <img src="https://i.postimg.cc/Hsy5zzSw/1-01.gif" />
            <form >
              <div className="ui input" name="name" style={{width:'100%'}}>
                <input type="text" placeholder="Enter Name" onChange={this.onNameChange} onKeyPress={this.onKeyPress} />
              </div>
              <span>{this.state.nameError}</span>


              <div className="ui input" style={{width:'100%',marginTop:'20px'}}>
                <input type="text" name="address" placeholder="Enter Address" onChange={this.onAddressChange} onKeyPress={this.onKeyPress} />
              </div>
              <span>{this.state.addressError}</span>

              <div className="ui animated fade button" tabIndex="0"  style={{width:'100%',marginTop:'20px',backgroundColor:'#c1e490',color:'white'}} onClick={this.submitForm}>
                <div className="visible content">Make Signature</div>
                <div className="hidden content">
                  Let's Go!
                </div>
              </div>
            </form>
          </div>
        </div>
          );
    }else{
      return(
          "hello"
      )
    }

    }

}

export default App;
