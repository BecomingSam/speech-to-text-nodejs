'use strict';


var HashMap = require('hashmap');
var table = new HashMap();



setup();

processText("like like like no yes");

console.log(table.keys().toString());
console.log(table.values().toString());



function setup (){
var fillerWordConstants = require('./fillerWordConstant');

var fullList = fillerWordConstants.fillerPhrases.concat( fillerWordConstants.disclosureMarkers, fetchUserDefinedFillers());

for (let item of fullList) {
	table.set(item, 0);
}

}

function fetchUserDefinedFillers(){

	return ["awesome"];

}

function processText(text)
{
	var textArray = text.split(" ");
	for (let item of textArray)
	{
		if (table.has(item))
		{
			table.set(item, table.get(item)+1);
		}
	}
}

function getFillerFrequencyTable(){

	return table;
}

function getTopTenWordsFrequencyTable(){}





