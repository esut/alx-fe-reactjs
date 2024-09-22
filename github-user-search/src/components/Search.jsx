import React, { useState } from 'react';
import axios from 'axios';
import { fetchUserData, searchGitHubUsers } from '../services/githubService';

const Search = () => {

    const [username, setUsername] = useState('');

    const [location, setLocation] = useState('')

    const [userData, setUserData] = useState([]);

    const [loading, setLoading] = useState('');
    
    const [error, setError] = useState('');



    const handleInputChange = (event) => {

        setUsername(event.target.value); 
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setLoading(true);
        setError('');

        try {

            const data = await searchGitHubUsers({username, location});
            setUserData(data);

        } 
        catch (err) {

            setError('Looks like we cant find the user');
 
        } 
        finally {

            setLoading(false);

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter your location :"
                />
                <button type="submit">Search</button> 
            </form>

            {loading && <p>Loading...</p>} 

            {error && <p>{error}</p>}

            {userData.map(user =>  (

                <div key={user.id}>

                    <h2>{userData.login}</h2>

                    <img src={userData.avatar_url} alt={userData.login} />
                    <a href={userData.html_url} target="_blank" >Their GitHub Profile:</a>

                </div>
            ))}
        </div>
    )
}

export default Search;
