import React, { Component } from 'react';

export class table extends Component {

    constructor (props) {
        super(props)

        this.state={
            userdetails:[]
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json()).then(
            result => {
                this.setState({userdetails:result});
            }
        )
    }

    render() {
        return (
            <div>
                <h2>User Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>USERNAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userdetails.map(user => (
                            <tr key = {user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default table;
