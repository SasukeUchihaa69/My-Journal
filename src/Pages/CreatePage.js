import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import CreateNewJournalEntry from '../Components/CreateNewJournalEntry'


export default class CreatePage extends Component {
    
    componentDidMount() {
        fetch('/public/hehe')
            .then((response) => {
                console.log("AA gya bhai response");
                return response.text(); // Read the response as text
            })
            .then((data) => {
                console.log('Response:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }
    render() {
        return (
            <div>
                <CreateNewJournalEntry />

            </div>
        )
    }
}
