import React from 'react';
import './App.css';


class App extends React.Component {

  state={
    name:'',
    address:'Head Office - Mwailih Sharjah Al Maha building 101',
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
        this.setState({address:'Head Office - Mwailih Sharjah Al Maha building 101'})
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
          <div className="ui raised text container segment" style={{position:'absolute',top:'-100px',right:0,bottom:0,left:0,margin:'auto',height:'600px'}}>
          <img src="https://i.postimg.cc/Hsy5zzSw/1-01.gif" alt=""/>
            <form >
              <div className="ui input" name="name" style={{width:'100%'}}>
                <input type="text" placeholder="Enter Name" onChange={this.onNameChange} onKeyPress={this.onKeyPress} />
              </div>
              <span>{this.state.nameError}</span>
              <div className="ui input" style={{width:'100%',marginTop:'20px'}}>
                <input type="text" name="address" placeholder="Enter Address" onChange={this.onAddressChange} onKeyPress={this.onKeyPress} />
              </div>
              <span className={this.state.addressError === '' ? 'grey small': 'red'}>{this.state.addressError === '' ? '* For default address leave this empty': this.state.addressError}</span>

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

      return(
          <div>
              <table id="Table_01" width="1611" height="706" border="0" cellPadding="0" cellSpacing="0" >
              <tbody>
             <tr>
                <td colSpan="8">
                  <img src="https://i.postimg.cc/66dWkBk8/injazat-psd-01.gif" width="1611" height="26" alt="" /></td>
              </tr>
              <tr>
                <td rowSpan="6">
                  <img src="https://i.postimg.cc/MKq6xhwd/injazat-psd-02.gif" width="579" height="679" alt="" /></td>
                <td colSpan="4">
                  <h2 style={{marginLeft:'20px',fontSize:'25px'}}>{this.state.name}</h2>
                  </td>
                <td colSpan="3">
                  <img src="https://i.postimg.cc/kXsn5fX9/injazat-psd-04.gif" width="808" height="66" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="7">
                  <img src="https://i.postimg.cc/x1d9NMcm/injazat-psd-05.gif" width="1032" height="177" alt="" /></td>
              </tr>
              <tr>
                <td>
                  <img src="https://i.postimg.cc/LscSWWvk/injazat-psd-06.gif" width="66" height="43" alt="" /></td>
                <td colSpan="6">
                  <h3 style={{fontSize:'20px'}}>{this.state.address}</h3>
                  </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <img src="https://i.postimg.cc/VvRcdkw4/injazat-psd-08.gif" width="1032" height="323" alt="" /></td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2">
                  <img src="https://i.postimg.cc/1tDS1KYk/injazat-psd-09.gif" width="104" height="70" alt="" /></td>
                <td>
                  <a href="https://www.facebook.com/injazatgroup/">
                    <img src="https://i.postimg.cc/kG9mJt0B/injazat-psd-10.gif" width="76" height="57" alt="" />
                  </a>
                  </td>
                <td colSpan="2">
                <a href="https://www.instagram.com/injazat_group/">
                  <img src="https://i.postimg.cc/05dvtcSm/injazat-psd-11.gif" width="57" height="57" alt="" />
                  </a>
                </td>
                <td>
                  <a href="https://twitter.com/injazat_group">
                    <img src="https://i.postimg.cc/HsYgFX0N/injazat-psd-12.gif" width="62" height="57" alt="" />
                  </a>
                </td>
                <td rowSpan="2">
                    <img src="https://i.postimg.cc/Sxjpx4v7/injazat-psd-13.gif" width="733" height="70" alt="" />
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <img src="https://i.postimg.cc/VLK8wvDk/injazat-psd-14.gif" width="195" height="13" alt="" /></td>
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
              </tr>
          </tbody>
        </table>
      </div>
    )
    }}
}

export default App;
