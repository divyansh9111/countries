import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = ({ data }) => {
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
    <Box
      onClick={()=>{
        navigate(`/country_detail/${data.numericCode}`);
      }}
      className="card"
      sx={{
        borderRadius: 1,
        height: "18.5rem",
        width: "14rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor:'pointer'
      }}
    >
      <Box sx={{ height: "45%" }}>
        <img
          width={"223px"}
          height={"140px"}
          src={data.flags.png}
          alt={data.name}
        />
      </Box>
      <Box sx={{ px: 2, height: "50%" }}>
        <h4>{data.name}</h4>
        <p>
          <span>Population: </span>
          {addCommasToNumber(data.population)}
        </p>
        <p>
          <span>Region: </span>
          {data.region}
        </p>
        <p>
          <span>Capital: </span>
          {data.capital}
        </p>
      </Box>
    </Box>
  );
};

export default Card;
