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
          <img src="https://i.postimg.cc/Hsy5zzSw/1-01.gif" alt=""/>
            <form >
              <div className="ui input" name="name" style={{width:'100%'}}>
                <input type="text" placeholder="Enter Name" onChange={this.onNameChange} onKeyPress={this.onKeyPress} />
              </div>
              <span>{this.state.nameError}</span>


              <div className="ui input" style={{width:'100%',marginTop:'20px'}}>
                <input type="text" name="address" placeholder="Enter Address" onChange={this.onAddressChange} onKeyPress={this.onKeyPress} />
              </div>
              <span>{this.state.addressError}</span>

              <div className="ui animated fade button" tabIndex="0"  style={{width:'100%',marginTop:'20px',backgroundColor:'#99d349',color:'white'}} onClick={this.submitForm}>
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
      console.log('hello')
      return(
          <div>
              <table id="Table_01" width="1612" height="706" border="0" cellPadding="0" cellSpacing="0">
              <tbody>
              <tr>
                <td rowSpan="5">
                  <img src="https://i.postimg.cc/7Pd93bdB/lattest-injazat-01.gif" width="579" height="384" alt="injazat" /></td>
                <td colSpan="7">
                  <img src="https://i.postimg.cc/YqF3bMwt/lattest-injazat-02.gif" width="1032" height="26" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="26" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="4">
                  <h2 style={{marginLeft:'20px'}}>{this.state.name}</h2>
                  </td>
                <td colSpan="3">
                  <img src="https://i.postimg.cc/mgNSWjDq/lattest-injazat-04.gif" width="808" height="66" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="66" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="7">
                  <img src="https://i.postimg.cc/jjMQLjy4/lattest-injazat-05.gif" width="1032" height="177" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="177" alt="" /></td>
              </tr>
              <tr>
                <td>
                  <img src="https://i.postimg.cc/jjx4xfnj/lattest-injazat-06.gif" width="66" height="43" alt="" /></td>
                <td colSpan="6">
                  <h3>{this.state.address}</h3>
                  </td>
                <td>
                  <img src="spacer.gif" width="1" height="43" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="7" rowSpan="2">
                  <img src="https://i.postimg.cc/gcXq2mj3/lattest-injazat-08.gif" width="1032" height="122" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="72" alt="" /></td>
              </tr>
              <tr>
                <td rowSpan="2">
                  <img src="https://i.postimg.cc/6qvdjLgM/lattest-injazat-09.gif" width="579" height="192" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="50" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="7">
                  <img src="https://i.postimg.cc/y6MhJt3t/lattest-injazat-10.gif" width="1032" height="142" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="142" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="8">
                  <img src="https://i.postimg.cc/VNZnzVc7/lattest-injazat-11.png" width="1611" height="59" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="59" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="3" rowSpan="2">
                  <img src="https://i.postimg.cc/15DGDBpt/lattest-injazat-12.gif" width="683" height="70" alt="" /></td>
                <td>
                  <img src="https://i.postimg.cc/GmQv5pgn/lattest-injazat-13.gif" width="76" height="57" alt="" /></td>
                <td colSpan="2">
                  <img src="https://i.postimg.cc/g023FP1X/lattest-injazat-14.gif" width="57" height="57" alt="" /></td>
                <td>
                  <img src="https://i.postimg.cc/NjY1DX4x/lattest-injazat-15.gif" width="62" height="57" alt="" /></td>
                <td rowSpan="2">
                  <img src="https://i.postimg.cc/tTL6xnJW/lattest-injazat-16.gif" width="733" height="70" alt="" /> </td>
                <td>
                  <img src="spacer.gif" width="1" height="57" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="4">
                  <img src="https://i.postimg.cc/nzs7rGFn/lattest-injazat-17.gif" width="195" height="13" alt="" /></td>
                <td>
                  <img src="spacer.gif" width="1" height="13" alt="" /></td>
              </tr>
              <tr>
                <td>
                  <img src="spacer.gif" width="579" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="66" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="38" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="76" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="44" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="13" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="62" height="1" alt="" /></td>
                <td>
                   <img src="spacer.gif" width="733" height="1" alt="" /></td>
                <td></td>
            </tr>
            </tbody>
              </table>
              </div>

      )
    }

    }

}

export default App;
