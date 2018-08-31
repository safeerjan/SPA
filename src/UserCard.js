import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';

const { Meta } = Card;

class UserCard extends Component {
    render() {
        return (
            <Card className="itenary-card">
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
        );
    }
}
export default UserCard;