import React from 'react';
import GithubUserCard from './GithubUserCard';
import Loading from './Loading';

const ManageGithubUsers = (props) => {
  const { users = [], queryInProgress, queryError } = props;

  if (queryInProgress) {
    return (
      <div className='p-5 d-flex justify-center'>
        <Loading />
      </div>
    );
  } else if (queryError) {
    return (
      <div className='py-5'>
        <p className='text-danger'>{queryError}</p>
      </div>
    );
  }

  return (
    <div className='d-flex flex-wrap gap-4 mt-5'>
      {users &&
        users.map((user) => <GithubUserCard key={user.id} data={user} />)}
    </div>
  );
};

export default ManageGithubUsers;
