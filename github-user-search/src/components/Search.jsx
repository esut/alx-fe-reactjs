import React , {useState} from 'react';
import  { fetchUserData } from '../services/githubService'
import axios from 'axios';

const Search = () => { 

    const [username, setUsername] = useState('');
    const [username, setUsername] = useState('');
    const [username, setUsername] = useState('');

const handleInputChange = (event) => { 
    setUsername(event.target.value);
 };

const handleSubmit = async (event) => { 
    event.preventDefault();
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder=" Enter your username "
                />
                <button type="submit">Search</button> 
            </form>
        </div>
    )
 };
};
export default Search;