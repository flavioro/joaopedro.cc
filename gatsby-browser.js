exports.onRouteUpdate = ({ prevLocation }) => {
  window.prevLocation = prevLocation ? prevLocation.pathname : null;
};
