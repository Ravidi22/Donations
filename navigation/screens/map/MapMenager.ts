import axios from "axios";

export const getDirections = async (startLoc, destinationLoc, waypoints) => {
  const waypointsString = waypoints
    .map((location) => encodeURIComponent(location))
    .join("|");
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&waypoints=optimize:true|${waypointsString}&key=AIzaSyBDWK0VW9Zoe5WJcLMgdLWrtr1q4QcL3iU`
    );
    return response.data.routes[0];
  } catch (error) {
    console.error(error);
  }
};
