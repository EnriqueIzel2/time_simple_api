exports.getCurrentTime = function () {
  const currentTime = new Date().toJSON();
  const formatTime = currentTime.replace(/\:\d{2}\.\d{3}/, "");

  return { currentDateTime: formatTime };
};
