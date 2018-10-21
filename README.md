# Transit Tracker
A React web app that connects to the Translink API to pull live
bus locations and display them on an interactive map.

## To run:
You will need to obtain api keys for the Translink and Mapbox api (free with some limitations)
Translink https://developer.translink.ca/
Mapbox https://www.mapbox.com/help/how-access-tokens-work/

*Clone the repository.
*`cd` into the root directory.
*Create a local.env file and set environment variables for `REACT_APP_MAP_BOX_API_TOKEN` and `REACT_APP_TRANSLINK_API_TOKEN`.
*Run `npm install` in the directory.
*Run `npm start` to serve.

## Notes
The app was built using create-react-app tool.
Full details here: https://github.com/facebook/create-react-app

The app makes use a demo proxy to avoid cors issues (not supplied by this repo or maintained by myself).
If for some reason it's down, you can build and deploy your own using https://github.com/Rob--W/cors-anywhere.
