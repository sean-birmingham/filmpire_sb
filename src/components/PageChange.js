import { Pagination } from '@mui/material';

import { useDispatch } from 'react-redux';

import { selectPage } from '../features/movieSlice';

const PageChange = ({ page, count }) => {
  const dispatch = useDispatch();

  const handlePageChange = (event, value) => {
    dispatch(selectPage(value));
  };

  if (count === 1) return null;

  return <Pagination count={count} page={page} onChange={handlePageChange} color="primary" />;
};
export default PageChange;
