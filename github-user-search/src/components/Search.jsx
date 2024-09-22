import React, { useState } from 'react';
import axios from 'axios';
import { fetchUserData } from '../services/githubService';

const Search = () => {

    const [username, setUsername] = useState('');

    const [userData, setUserData] = useState('');

    const [loading, setLoading] = useState('');
    
    const [error, setError] = useState('');



    const handleInputChange = (event) => {

        setUsername(event.target.value); 
    };


    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setLoading(true);
        setError('');

        try {

            const data = await fetchUserData(username);
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
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter your username:"
                />
                <button type="submit">Search</button> 
            </form>

            {loading && <p>Loading...</p>} 

            {error && <p>{error}</p>}

            {userData && (

                <div>

                    <h2>{userData.login}</h2>

                    <img src={userData.avatar_url} alt={userData.login} />
                    <a href={userData.html_url} target="_blank" >Their GitHub Profile:</a>

                </div>
            )}
        </div>
    )
}

export default Search;
