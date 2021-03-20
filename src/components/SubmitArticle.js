import react ,{Component }from 'react';
import App from '../App';

export default class SubmitArticle extends  Component {

    constructor(props) {
            super(props);
            this.state = {
                title : "",
                body:""
            };
            this.getTitle= this.getTitle.bind(this);
            this.getBody= this.getBody.bind(this);
    }

    getTitle(val){
        this.setState({
          title: val.target.value
        })
    }

    getBody(val){
        this.setState({
          body : val.target.value
        })
    }
    
    addDataToarr =(e) =>{
         e.preventDefault();
        <App  obj={this.state}/>
       console.log(this.state);  
    }

    render() {
         return (
             <form onClick={this.addDataToarr}>
                <label>
                    Title:
                    <input type="text"   onChange={this.getTitle} />
                </label>

                <label>
                    Body:
                <textarea onChange={this.getBody} />
                </label>
        <input  type="submit" value="Submit" />
      </form>
      )
    }
}