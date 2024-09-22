import axios from 'axios';

export const fetchUserData = async (username) => {

    const response = await axios.get(`https://api.github.com/users/${username}`);

    return response.data;

  };
export const searchGitHubUsers = async (query) =>{
    const{ usrname, location, minRepos } = query ;
    const filters = [];
    
    return response.data.items;
};



export default axios