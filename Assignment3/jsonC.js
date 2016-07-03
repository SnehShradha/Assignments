var fs = require('fs'),readline = require('readline')
var result2 = [];
var objF = [0,0,0,0,0,0,0,0,0,0,0,0];
var objM =[0,0,0,0,0,0,0,0,0,0,0,0];
count = 0;
var inputCSVFilePath = "dnc.csv",
    outputFilePath1 = "asiaFM.json",
    outputFilePath = "top5.json";

var csvFileRead = readline.createInterface({
  input: fs.createReadStream(inputCSVFilePath)
});

var MAP_COUNTRIES_ASIA = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
"Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
var Years = [1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015];
csvFileRead.on('line',function(line){
  var catch1 = line.split('/r/n');//trimming
  var rows = catch1[0].split(',');//splitting
  var n =rows.length;
  var filterC =rows[0];//Fetch country
  var filterI =rows[n-3];//Fetch Indicator
  var filterY =rows[n-2];//Fetch Year
  var filterV =rows[n-1];//Fetch Value
  var obj1 = {};
  if(count==10)
   process.exit();
  switch (filterI) {
    case "SP.DYN.LE00.IN":
      if(filterY==1960)
          {
            obj1.country = filterC ;
            obj1.value = filterV ;
            result2.push(obj1);
          }
      break;
    case "SP.DYN.LE00.FE.IN":
            var x = parseInt(filterY);
            if(Years.indexOf(x)>0)
              {
                if(MAP_COUNTRIES_ASIA.indexOf(filterC)>0)
                  {
                    var i=Years.indexOf(x);
                    objF[i]=objF[i]+parseInt(filterV);
                  }
                }
         break;
    case "SP.DYN.LE00.MA.IN":
        var x = parseInt(filterY);
        if(Years.indexOf(x)>0)
            {
                if(MAP_COUNTRIES_ASIA.indexOf(filterC)>0)
                  {
                      var i=Years.indexOf(x);
                        objM[i]=objM[i]+parseInt(filterV);

                }
            }
          break;
    default:
  }
  });

  csvFileRead.on('close',function(line){
    var result1 =[];
    var obj2 ={};
    for(i=0;i<12;i++)
      {
        objM[i]=objM[i]/36;
        objF[i]=objF[i]/36;
        obj2.year = Years[i];
        obj2.Fval = objF[i];
        obj2.Mval = objM[i];
        result1.push(obj2);
        obj2={};
      }
      result1 =JSON.stringify(result1);
      fs.appendFile(outputFilePath1, result1);
    var newArr = result2.sort(function(a, b) {
      return b.value - a.value;
    });
    result2 = [];
    for(i=0;i<5;i++)
        result2[i]=newArr[i];
    result2 =JSON.stringify(result2);
    fs.appendFile(outputFilePath, result2);
    console.log("The End");
    });
