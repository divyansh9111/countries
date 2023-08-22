import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Nav from "./Nav";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  CssBaseline,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import data from "../data.json";
import Card from "./Card";
import "./home.css";
import { ModeState } from "./context/ThemeProvider";
const Home = () => {
  const [_region, setRegion] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [countries, setCountries] = React.useState(data);
  const matches = useMediaQuery("(max-width:600px)");
  const { mode } = ModeState();
  const regions = {
    1: "Africa",
    2: "Americas",
    3: "Asia",
    4: "Europe",
    5: "Oceania",
  };
  const IconTextField = ({ iconStart, InputProps, ...props }) => {
    return (
      <TextField
        size="small"
        fullWidth
        variant="outlined"
        {...props}
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
        }}
      />
    );
  };
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const handleSearch = () => {
    const regex = new RegExp(query, "i"); // 'i' flag makes the search case-insensitive

    const matchingCountries = data.filter(
      (item) =>
        regex.test(item.name) &&
        (_region ? item.region === regions[_region] : true)
    );
    setCountries(matchingCountries);
  };

  useEffect(() => {
    if (_region) {
      const matchingCountries = data.filter(
        (item) => item.region === regions[_region]
      );
      setCountries(matchingCountries);
    }
  }, [_region]);

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <Nav />
        <Container sx={{ my: "2rem" }} maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
              justifyContent: "space-between",
              height: matches ? "7rem" : "2.5rem",
            }}
          >
            <Box
              className="search"
              sx={{ width: matches ? "100%" : "40%", height: "2.5rem" }}
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              <input
                className={mode === "dark" ? "searchBarDark" : "searchBarLight"}
                type={"text"}
                placeholder="Search for a country"
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleSearch();
                }}
              />
            </Box>
            <Box sx={{ width: "10rem" }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Filter by region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={_region}
                  label="Filter by region"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Africa</MenuItem>
                  <MenuItem value={2}>Americas</MenuItem>
                  <MenuItem value={3}>Asia</MenuItem>
                  <MenuItem value={4}>Europe</MenuItem>
                  <MenuItem value={5}>Oceania</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className="countryGrid">
            {countries.map((item) => {
              return <Card key={item.numericCode} data={item} />;
            })}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Home;
