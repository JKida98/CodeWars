function domainName(url) {
  if (url.includes("www.")) {
    startIndex = url.lastIndexOf("www.") + 4;
  } else if (url.includes("://")) {
    startIndex = url.lastIndexOf("://") + 3;
  } else {
    startIndex = 0;
  }
  lastIndex = url.indexOf(".", startIndex);
  return url.substring(startIndex, lastIndex);
}

// return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];


// url = url.replace("https://", '');
// url = url.replace("http://", '');
// url = url.replace("www.", '');
// return url.split('.')[0];

console.log(domainName("https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript"));
