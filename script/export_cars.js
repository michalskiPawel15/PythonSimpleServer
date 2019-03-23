'use strict';
export const name = 'Car from export.';
export function color(){
	return 'RED';
}

const name2 = 'Car from export 2.'
const color2 =  function(){
	return 'GREEN';
}

export {name2, color2};

const specialCar = 'Ferrari';
const specialCarColor = function(){
	return '#cc0000';
};
export {specialCar, specialCarColor};