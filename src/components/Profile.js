import axios from 'axios';
import React from 'react';

class Profile extends React.Component {
        constructor(){
            super();
            this.state = {
                userInfo:{login:'Adill Ali', avatar_url:'', email:'adil@yopmail.com'}
            }
        
        }
        async componentDidMount(){
            const profileData = await axios.get('https://api.github.com/users/akshaymarch7')
            console.log(profileData);
            this.setState({
                userInfo:profileData.data
            })
        }

        componentDidUpdate(){
            console.log('did update')
        }

        componentWillUnmount(){
            console.log('unmouting')
        }
        render(){
        const {name, twitter_username, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <div>
                    <h1>Class Component Propeties</h1>
                    <p>Name: {name}</p>
                    <p>Location: {location}</p>
                    <p>Email: {twitter_username}</p>
                </div>
                <div>
                    <img src={avatar_url} style={{width:'200px',height:'200px' }}/>
                </div>
            </div>
        )
    }
}

export default Profile;