import React, { Component } from 'react';
// import { View } from 'react-native';
import { Button, Card, CardSection, Header } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <Header headerText="yooyoo" />
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>
                        Submit
                    </Button>
                </CardSection>
            </Card>
         );
    }
}

export default LoginForm;