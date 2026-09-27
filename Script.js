let boxes = document.querySelectorAll(".Box");
let target = document.querySelector("#Target");
let button = document.querySelector("#Linear");
let result = document.querySelector("#Result");
let binary = document.querySelector("#Binary")

button.addEventListener("click", function () {
  let targetValue = Number(target.value);

  for (let i = 0; i < boxes.length; i++) {
    let value = Number(boxes[i].textContent);

    if (value == targetValue) {
      result.textContent = "Found at index " + i;
      return;
    }
  }

  result.textContent = "Element not found";
});

binary.addEventListener("click", function () {
  let targetValue = Number(target.value);

  let start = 0;
  let end = boxes.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let value = Number(boxes[mid].textContent);

    if (value == targetValue) {
      result.textContent = "Found At index " + mid;
      return;
    } else if (value < targetValue) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  result.textContent = "Element not found";
});

