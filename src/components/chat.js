import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Websocket from 'react-websocket';

class Chat extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          count: ''
        };
      
    }

    handleData(data) {
        let result = JSON.parse(data);
        this.setState({count: result});
        console.log(result)
    }

    render(){
        return (
            <div>
                Count: <strong>{this.state.count}</strong>
        
                <Websocket url='ws://localhost:8086/post/v2/notification/memberID/5cb356f10b0000560028135b/count'
                    onMessage={this.handleData.bind(this)}/>
            </div>
        );
    }
}

export default Chat;