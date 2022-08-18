import React from "react";


class Clock extends React.Component {

    state = {date: new Date()};

 /*    Same thing as the "state" but in broad sense
        constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
 */
    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }


    render(){
        const {date} = this.state;
        return(
            <h2 className="heading">
            <span className="text">{date.toLocaleTimeString("bn-BD")}</span>
            </h2>
        )
    };
}

export default Clock;