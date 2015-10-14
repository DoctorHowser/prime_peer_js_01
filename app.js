var value = 42; //Step 1

if (value >= 53) { //Step2
	value += 42;
} else {
	value -= 13; //THIS (29)
}

//step 3
value += "11"; //(2911)

//Step 4
var array = []; 
for(var i = 0; i<value.length; i++) {
	array[i] = value.charAt(i);
}

//Step 5
array.shift();//[911]
array.pop();//["9","1"]


//Step 6
var fun = "";
for(i = (array.length - 1); i >= 0; i--){
	fun += array[i];
}
//Step 7
fun = parseInt(fun);
value = parseInt(value);

// step 8
value +=fun;  //2930

//step 9
if(value<60){
	value = 14;
} else if (value === 2930){
	value = 27;
} else{
	value = 2;
}  //value === 27 fun ===19

//step 10
i=10;
while(i > 0){  //this may need to be =>
	value++;
	i--;
}//value == 37 

//step 11
function careBears(val){
	val = val.toString();
	if (val.length > 1){
		val = val.substring(1, val.length);
	}
	return val;
};

//step 12
value = careBears(value); //value == 7

//step 13
console.log(value);