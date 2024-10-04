import React, { useState } from 'react';
import ManageGithubUsers from '../components/ManageGithubUsers';
import SearchInput from '../components/SearchInput';
import GithubUserAPI from '../api/githubUserAPI';

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [queryInProgress, setQueryInProgress] = useState(false);
  const [queryError, setQueryError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchGithubUsers = async () => {
    setQueryInProgress(true);
    setQueryError(null);
    try {
      const queryGithubUserResponse = await GithubUserAPI.queryGithubUser(
        searchValue
      );
      setUsers(queryGithubUserResponse.data.items);
    } catch (error) {
      console.log('Something went wrongs:', error);
      setQueryError(error.response.data.message);
    } finally {
      setQueryInProgress(false);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSearchGithubUsers();
  };

  const clearData = () => {};

  return (
    <div>
      <SearchInput
        handleChange={handleChange}
        onSubmit={handleSubmitForm}
        value={searchValue}
      />
      <ManageGithubUsers
        users={users}
        queryInProgress={queryInProgress}
        queryError={queryError}
      />
    </div>
  );
};

export default Homepage;
