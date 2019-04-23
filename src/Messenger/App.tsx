import * as React from 'react';
// tslint:disable-next-line:ordered-imports
// import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
// tslint:disable-next-line:ordered-imports
import { Button, List, ListItem, Avatar } from '@material-ui/core';

export const App : React.FC = () => {
    return(
        <>
            <ChatBox name="test"/>
            <Message user_name="yuma1217"/>
            <Child2 name="yuma" />
            <AppChat />
        </>
    );
}


interface IAppInterface {
    name : string;
}

const Child2 : React.FC<IAppInterface> = (prop) => {
    return (
        <div>
            {prop.name}
        </div>
    );
}

const ChatBox : React.FC<{name:any}> = (prop) => {
    
    const onChange = () => {
        alert(prop.name);
    }

    return(
        <div className="ChatBox">
            <div>
            <TextField name="user_name" onChange= {onChange} className="textField" placeholder="Name" />
            <br />
            <TextField name="profile_image" />
            </div>
            <TextField rows="4" multiline={true} name='text' />
            <div>
            <Button variant="contained" color="primary">
                Send
            </Button>
            </div>
        </div>
    )
}

// JPGなど読み込む時はpublicの下に置く
// publicの下から読み込まれる
const Message : React.FC<{user_name:string}> = (prop) => {
    return(
        <div className="Message">
            <List>
                <ListItem disabled={true}>
                    <Avatar src="./pubgmobile.JPG"/>
                    <span style={{marginBottom: -5}}>@{prop.user_name}</span>
                    
                </ListItem>
            </List>
        </div>
    );
}

const AppChat : React.FC = () => {
    const onTextChange = (e) => {
        
    }
    return(<></>);
}