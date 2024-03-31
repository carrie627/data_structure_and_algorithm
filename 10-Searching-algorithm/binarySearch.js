// const statesOfAmerica = [
//   "Alabama",
//   "Alaska",
//   "American Samoa",
//   "Arizona",
//   "Arkansas",
//   "California",
//   "Colorado",
//   "Connecticut",
//   "Delaware",
//   "District of Columbia",
//   "Federated States of Micronesia",
//   "Florida",
//   "Georgia",
//   "Guam",
//   "Hawaii",
//   "Idaho",
//   "Illinois",
//   "Indiana",
//   "Iowa",
//   "Kansas",
//   "Kentucky",
//   "Louisiana",
//   "Maine",
//   "Marshall Islands",
//   "Maryland",
//   "Massachusetts",
//   "Michigan",
//   "Minnesota",
//   "Mississippi",
//   "Missouri",
//   "Montana",
//   "Nebraska",
//   "Nevada",
//   "New Hampshire",
//   "New Jersey",
//   "New Mexico",
//   "New York",
//   "North Carolina",
//   "North Dakota",
//   "Northern Mariana Islands",
//   "Ohio",
//   "Oklahoma",
//   "Oregon",
//   "Palau",
//   "Pennsylvania",
//   "Puerto Rico",
//   "Rhode Island",
//   "South Carolina",
//   "South Dakota",
//   "Tennessee",
//   "Texas",
//   "Utah",
//   "Vermont",
//   "Virgin Island",
//   "Virginia",
//   "Washington",
//   "West Virginia",
//   "Wisconsin",
//   "Wyoming",
// ];

const numberArr = [1, 2, 4, 5, 7, 13, 15, 19, 25, 37, 38, 39, 40];

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch(numberArr, 40));
