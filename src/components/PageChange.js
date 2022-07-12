import { Pagination } from '@mui/material';

const PageChange = ({ page, setPage, count }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return <Pagination count={count} page={page} onChange={handlePageChange} color="primary" />;
};
export default PageChange;
