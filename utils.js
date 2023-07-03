export const p2e = (s) => {
    if (!s?.length) return "";
    return s?.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  };
  export const e2p = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  
  // export function blobToDataURL(blob, callback) {
  //   var a = new FileReader();
  //   a.onload = function (e) {
  //     callback(e.target.result);
  //   };
  //   a.readAsDataURL(blob);
  // }
  
  export function blobToDataUrl(blob) {
    return new Promise((r) => {
      let a = new FileReader();
      a.onload = r;
      a.readAsDataURL(blob);
    }).then((e) => e.target.result);
  }
  
  export function dataURItoBlob(dataURI) {
    // debugger
    if (!dataURI) return null;
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(",")[1]);
  
    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
  
    // create a view into the buffer
    var ia = new Uint8Array(ab);
  
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;
  }
  
  export function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
  
  export const years = [
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
    { label: "2014", value: "2014" },
    { label: "2013", value: "2013" },
    { label: "2012", value: "2012" },
    { label: "2011", value: "2011" },
    { label: "2010", value: "2010" },
    { label: "2009", value: "2009" },
    { label: "2008", value: "2008" },
    { label: "2007", value: "2007" },
    { label: "2006", value: "2006" },
    { label: "2005", value: "2005" },
    { label: "2004", value: "2004" },
    { label: "2003", value: "2003" },
    { label: "2002", value: "2002" },
    { label: "2001", value: "2001" },
    { label: "2000", value: "2000" },
    { label: "1999", value: "1999" },
    { label: "1998", value: "1998" },
    { label: "1997", value: "1997" },
    { label: "1996", value: "1996" },
    { label: "1995", value: "1995" },
    { label: "1994", value: "1994" },
    { label: "1993", value: "1993" },
    { label: "1992", value: "1992" },
    { label: "1991", value: "1991" },
    { label: "1990", value: "1990" },
    { label: "1989", value: "1989" },
    { label: "1988", value: "1988" },
    { label: "1987", value: "1987" },
    { label: "1986", value: "1986" },
    { label: "1985", value: "1985" },
    { label: "1984", value: "1984" },
    { label: "1983", value: "1983" },
    { label: "1982", value: "1982" },
    { label: "1981", value: "1981" },
  ];
  
  export function isIOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  
  export function removeNumber(value) {
    if (value.match(/[0-9]/g)) return value.substring(0, value.length - 1);
    else return value;
  }
  
  export function removeNonNumber(value) {
    return value.replace(/[^0-9$.,]/g, "");
  }
  
  export function numberWithCommas(x = "") {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export const getAllYearsMiladiFrom = (initial_miladi) => {
    // alert('hi')
    let arr = [];
    for (
      let miladi = new Date().getFullYear(),
        shamsi = p2e(new Date().toLocaleString("fa").substring(0, 4));
      miladi >= initial_miladi;
      miladi--, shamsi--
    ) {
      arr.push({
        label: `${miladi}`,
        value: `${miladi}`,
      });
    }
  
    console.log({ arr });
  
    return arr;
  };
  
  export const getAllYearsShamsiFrom = (initial_miladi) => {
    let arr = [];
    for (
      let miladi = new Date().getFullYear(),
        shamsi = p2e(new Date().toLocaleString("fa").substring(0, 4));
      miladi >= initial_miladi;
      miladi--, shamsi--
    ) {
      arr.push({
        label: `${shamsi}`,
        value: `${shamsi}`,
      });
    }
  
    console.log({ arr });
  
    return arr;
  };
  
  export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  
  export function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date)?.toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }
  