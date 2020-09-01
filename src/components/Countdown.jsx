import React from 'react';
import Clock from './Clock';

class Countdown extends React.Component {
    constructor(){
        super();
        this.state={
            count: null

        }
        // this.childRef = React.createRef()
    }


    onSubmit(e) {
        e.preventDefault()
        //This will give you string for seconds. Do not remove refs
         var secondsStr = this.refs.seconds.value;
        this.setState({count:secondsStr});
        this.refs.seconds.value=" "
        this.refs.childRef.myfunc(secondsStr)
 
        
     }
  

    render() {
        
        return (
            <div>
                <Clock timeInSeconds={this.state.count} ref="childRef"/>
                <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
            </div>
            </div>
        );
    }
}

export default Countdown;