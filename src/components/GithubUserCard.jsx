import React from 'react';
import { Link } from 'react-router-dom';

const GithubUserCard = (props) => {
  const { data } = props;
  const { login, html_url, avatar_url } = data;
  return (
    <div className='card p-4' style={{ width: '300px' }}>
      <div className='card-body d-flex flex-column align-items-center justify-content-center gap-3'>
        <div className='card-image-wrapper'>
          <img src={avatar_url} alt={login} />
        </div>
        <h5>{login}</h5>
        <Link to={`/users/${login}`}>
          <button className='btn btn-primary'>More</button>
        </Link>
      </div>
    </div>
  );
};

export default GithubUserCard;
