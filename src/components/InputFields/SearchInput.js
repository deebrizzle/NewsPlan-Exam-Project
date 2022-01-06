import TextField from '@mui/material/TextField';

export default function SearchInput(props) {
  const {search, setSearch} = props;

  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}