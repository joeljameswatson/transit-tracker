# Transit Tracker

A React web app that connects to the Translink API to pull live
bus locations and display them on an interactive map.

## To Run:

You will need to obtain api keys for the Translink and Mapbox api (free with some limitations)<br />
Translink https://developer.translink.ca/<br />
Mapbox https://www.mapbox.com/help/how-access-tokens-work/

The Translink api does not allow cors requests so a proxy is also required.
A proxy can easily be created using https://github.com/Rob--W/cors-anywhere

1. Clone the repository
2. `cd` into the root directory
3. Create a local.env file and set environment variables for `REACT_APP_MAP_BOX_API_TOKEN`, `REACT_APP_TRANSLINK_API_TOKEN` and `REACT_APP_CORS_PROXY_URL`
4. Run `npm install`
5. Run `npm start` to serve

## Notes

The app was built using create-react-app tool.
Full details here: https://github.com/facebook/create-react-app
