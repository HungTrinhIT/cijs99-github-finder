const SearchInput = (props) => {
  const { handleChange, onSubmit, value } = props;
  return (
    <form onSubmit={onSubmit} className='d-flex gap-3'>
      <input
        className='form-control'
        placeholder='Search Github users all around the world..'
        name='searchValue'
        value={value}
        onChange={handleChange}
      />
      <button className='btn btn-primary' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
