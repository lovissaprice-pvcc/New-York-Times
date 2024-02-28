var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Language%20%26%20Literature/New%20York%20Times%20Bestsellers%202011-2018.csv";
var publishers = getColumn(url, 1);
var bookNames = getColumn(url, 5)
var weeks = getColumn(url, 6)
var authors = getColumn(url, 2)

function getPublisher(bookName){
    var match = "";

    for(var i = 0; i < bookNames.length; i++){
        if(bookNames[i] == bookName){
            match = publishers[i];
        }
        
    }
    return match;
}

//console.log(getPublisher("CAMINO ISLAND"));


function getBooks(author){
    var matches = [];

    for(var i = 0; i < authors.length; i++){
        if(authors[i] == author){
            matches.push(bookNames[i])
        }
    }
    return matches;
}
//console.log(getBooks("Kristin Hannah"));

function getAuthor(bookName){
    var match = ""

    for(var i = 0; i < authors.length; i++){
        if(bookNames[i] == bookName){
            match = authors[i];
        }
    }
    return match;

}
console.log(getAuthor("LIFE OF PI"))

function findLongestTitle(publisher){
    var longest = "";

    for(var i = 0; i < authors.length; i++){
        if(publishers[i] == publisher){
            if(bookNames[i].length > longest.length){
                longest = bookNames[i];
            }
        }
    }
    return longest;
}

console.log(findLongestTitle("Penguin Group"))




function findMostBooks(publisher){

    var match = "";
    var mostBooks = 0;
    

    for(var i = 0; i < publishers.length; i++){
        if(publishers[i]==publisher){
            if(){
    
            }
        }
    }
}










function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }