import React from "react";


class Clock extends React.Component {
    constructor(props, a){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000)
    }
    render(){
        return(
            <h2 className="heading">
            <span className="text">{new Date(this.state.date).toLocaleTimeString(this.props.locale)}</span>
            </h2>
        )
    };
}

export default Clock;