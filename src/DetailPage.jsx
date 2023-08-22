import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, Container, CssBaseline } from "@mui/material";
import Nav from "./Nav";
import data from "../data.json";
import { useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import "./detailPage.css";
const DetailPage = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const { id } = useParams();
  const countryData = data.find((item) => {
    return item.numericCode === id;
  });
  const navigate = useNavigate();
  function addCommasToNumber(number) {
    // Convert the number to a string
    const numString = number.toString();

    // Split the string into parts before and after the decimal point (if any)
    const parts = numString.split(".");

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join the parts back together
    const formattedNumber = parts.join(".");

    return formattedNumber;
  }
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <Nav />
        <Container sx={{ my: "2rem",pb:matches?"1rem":"" }} maxWidth="lg">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="text"
            size="small"
            color="primary"
          >
            <ArrowBackIosNewIcon
              sx={{ fontSize: "12px", marginRight: ".3rem" }}
            />
            Back
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
              justifyContent: "space-between",
              my: "2rem",
            }}
          >
            <Box
              sx={{
                width: matches ? "100%" : "45%",
                height: matches ? "12rem":"20rem"
              }}
            >
              <img src={countryData.flag} width="100%" />
            </Box>
            <Box
              className="borders"
              sx={{
                width: matches ? "100%" : "45%",
                height: "20rem",
              }}
            >
              <h2>{countryData.name}</h2>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: matches ? "column" : "row",
                  justifyContent: "space-between",
                  gap:matches?"1rem":""
                }}
              >
                <Box
                  className="details"
                  sx={{
                    width: matches ? "100%" : "45%",
                  }}
                >
                  <p>
                    <b>Native Name: </b>
                    {countryData.nativeName}
                  </p>
                  <p>
                    <b>Population: </b>
                    {addCommasToNumber(countryData.population)}
                  </p>
                  <p>
                    <b>Region: </b>
                    {countryData.region}
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    {countryData.subregion}
                  </p>
                  <p>
                    <b>Capital: </b>
                    {countryData.capital}
                  </p>
                </Box>
                <Box
                  className="details"
                  sx={{
                    width: matches ? "100%" : "45%",
                  }}
                >
                  <p>
                    <b>Top Level Domain: </b>
                    {countryData.topLevelDomain}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {countryData.currencies.map((item, index) => {
                      return <span key={index}>{item.code}, </span>;
                    })}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {countryData.languages.map((item, index) => {
                      return <span key={index}>{item.name}, </span>;
                    })}
                  </p>
                </Box>
              </Box>
              {
                <p>
                  <b>Border Countries: </b>
                  {countryData.borders.map((item, index) => {
                    return <span key={index}>{item}, </span>;
                  })}
                </p>
              }
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default DetailPage;
