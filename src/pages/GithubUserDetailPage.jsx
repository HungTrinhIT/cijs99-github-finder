import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GithubUserAPI from '../api/githubUserAPI';

const GithubUserDetailPage = (props) => {
  const [user, setUser] = useState({});
  const [fetchUserInProgress, setFetchUserInProgress] = useState(false);
  const [fetchUserInError, setFetchUserInError] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const { username } = params || {};

  const handleFetchUserDetail = async () => {
    setFetchUserInProgress(true);
    setFetchUserInError(null);
    try {
      const apiResponse = await GithubUserAPI.fetchGithubUserDetail(username);
      const userData = apiResponse.data;
      setUser(userData);
    } catch (error) {
      setQueryError(error.response.data.message);
    } finally {
      setFetchUserInProgress(false);
    }
  };

  //https://api.github.com/users/{username}/repos
  const handleFetchUserRepositories = async () => {};

  useEffect(() => {
    handleFetchUserDetail();
    handleFetchUserRepositories();
  }, []);

  const { location, name, company, login, html_url } = user;

  const handleNavigateToGithubProfile = () => {
    // external page
    window.open(html_url, '_blank');
  };

  const handleBackToSearchPage = () => {
    // internal page
    navigate('/');
  };

  return (
    <div>
      <div className='mb-3'>
        <button className='btn btn-secondary' onClick={handleBackToSearchPage}>
          Back to search
        </button>
      </div>
      <div className='row'>
        <div className='col-4 d-flex flex-column align-items-center justify-content-center gap-3'>
          <h6>{name}</h6>
          <p>{location}</p>
        </div>
        <div className='col-8'>
          <button
            className='btn btn-secondary'
            onClick={handleNavigateToGithubProfile}>
            Show Github Repo
          </button>
          <p>
            <strong>Username:</strong>
            {login}
          </p>
          <p>
            <strong>Company:</strong>
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubUserDetailPage;
