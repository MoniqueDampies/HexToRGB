const btnDisplay = document.querySelector("#generate");

function slice(hexcode, start, end) {
  return hexcode.slice(start, end);
}

btnDisplay.addEventListener("click", () => {
  let hexcode = document.querySelector("#hex").value;

  let redcode = slice(hexcode, 0, 4);
  let greencode = slice(hexcode, 4, 8);
  let bluecode = slice(hexcode, 8, 12);

  document.querySelector("#rgbR").innerHTML = parseInt(redcode, 32);
  document.querySelector("#rgbG").innerHTML = parseInt(greencode, 32);
  document.querySelector("#rgbB").innerHTML = parseInt(bluecode, 32);
  document.querySelector("#RGBCode").innerHTML =
    "rgb(" +
    parseInt(redcode, 32) +
    ", " +
    parseInt(greencode, 32) +
    ", " +
    parseInt(bluecode, 32) +
    ")";

  let clrpane = document.querySelector("#color");
  let value =
    "rgb(" +
    parseInt(redcode, 32) +
    ", " +
    parseInt(greencode, 32) +
    ", " +
    parseInt(bluecode, 32) +
    ")";
  clrpane.style = `background-color: ${value}`;
});
