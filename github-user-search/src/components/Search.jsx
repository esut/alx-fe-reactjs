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
 };
};
export default Search;