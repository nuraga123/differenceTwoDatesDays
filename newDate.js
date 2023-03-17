// styles document body
document.body.style.width = "400px";
document.body.style.margin = "20px auto";
// id element html
const result = document.getElementById("result");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");

// date1 - date2
const myFunction = () => {
  // input value format Date
  const dateOne = new Date(data1.value);
  const dateTwo = new Date(data2.value);

  var daysLag = Math.ceil(
    Math.abs(dateTwo.getTime() - dateOne.getTime()) / (1000 * 3600 * 24)
  );

  result.style.fontSize = "30px";
  result.style.margin = "30px";

  console.log(daysLag);

  result.textContent = isNaN(daysLag) ? "tarix sefdir" : `${daysLag} gun`;
};

const myReset = () => location.reload();
