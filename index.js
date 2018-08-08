var katzDeliLine=[];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  var number= katzDeliLine.length
return (`Welcome, ${name}. You are number ${number} in line.`);}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>=1){
  return(`Currently serving ${katzDeliLine.shift()}.`);
}
else {
  return ("There is nobody waiting to be served!");
}}


function currentLine(line){
  var line =["Bill", "Jane", "Ann"];
    if (line.length===0)
          return ("The line is currently empty.");
    else
     return ("The line is currently: 1. +line; ")
}
