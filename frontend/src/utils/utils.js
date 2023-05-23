import axios from "axios";

const googleApiKey = "AIzaSyBFrn8O362KFIOQWHGmcuiwjpfZsUXig-k";
const api = axios.create({
  baseURL: "http://localhost:6001",
});

function hexToRgba(hex, opacity = 1) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export { api, googleApiKey, hexToRgba };
