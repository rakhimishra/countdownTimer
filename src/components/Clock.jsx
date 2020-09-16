import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            time1: "",
            flag: true
        }
    }
    
    formatTime(timeInSeconds) {
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }
    // interval(time2){
        
    //     setInterval(() => {
    //         time2-=1;
    //         console.log(this.formatTime(time2));
    //         this.setState( {time1:"5"})
          
    //     }, 1000);

    // }
    myfunc=(seconds)=>{
        // const temp = this.formatTime(seconds)
        // console.log(temp)
        console.log(seconds)
        var temp2 = seconds
                var time  = setInterval(()=>{
                console.log("checking")
                temp2-=1;
                this.setState({
                    time1:temp2
                })
                
                if (temp2 ===0){
                    clearInterval(time)
                }
                },1000);
        
              

    
}
      
   


    render() {
        var {timeInSeconds} = this.props;

        if (this.state.flag===true){
            // myfunc()
        } 
        
        
        
        // this.setState({time1:time2});
        
        
        
        //Keep the classes name. Try to inject your code and do not remove existing code
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.state.time1}
                </span>
            </div>
        );
    }
}



export default Clock;