import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';

import "./index.css";

const { Meta } = Card;

class UserCard extends Component {
    render() {
        return (
            <div className="spaH1">
                <h1 style={{  color: "white", backgroundColor: "gray"}}>USER SPA</h1>
                <Card className="itenary-card" style={{margin: 20, padding: 20}}>
                    <Card
                        style={{ width: 300 }}
                        cover={<img alt="example" src="https://cdn-www.mobify.com/wp-content/uploads/jeff-smith.jpg" />}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                        avatar={<Avatar src="https://cdn-www.mobify.com/wp-content/uploads/jeff-smith.jpg" />}
                        title="Jeff Smith"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                    </Card>
                </Card>
            </div>
        );
    }
}
export default UserCard;