import React from 'react';
import ReactDOM from 'react-dom';

// import WebApp from './components/webapp';
import GroceryApp from './components/groceryApp';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
	console.log('hello');
    const container = document.getElementById('app');
    let groceries = [
    	"Milk",
    	"Eggs",
    	"Bread",
    	"Chicken Breast",
    	"Cereal",
    	"Oatmeal",
    	"Asparagus",
    	"Umbrella",
    	"Tuna",
    	"Faith in Humanity"
    ];

    ReactDOM.render(
        <GroceryApp
            list={groceries}
        />,
        container
    );
});
