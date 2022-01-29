export const renderElapsedString = (elapsed) => {
  let ms = elapsed % 1000;
  elapsed = (elapsed - ms) / 1000;
  let secs = elapsed % 60;
  elapsed = (elapsed - secs) / 60;
  let mins = elapsed % 60;
  let hrs = (elapsed - mins) / 60;
  return `${hrs < 10 ? "0" : ""}${hrs}:${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
