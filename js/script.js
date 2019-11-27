//Treehouse Techdegree:
//FSJS project 2 - List Filter and Pagination
//Gerardo Bilbatua


// list of students and students per page variables
var list = document.querySelectorAll('li');
var liPerPage = 10;
var newlist = [];


// showpage() : displays list elements by multiples of 10 
function showPage(list,page){  // 1- receives list of elements and page number as arguments

// 2- calculate start/end index according to the page 
let startIndex = (page * liPerPage) -liPerPage; //i.e. (2*10)-10 = 10.. start index is 10 on second page
let endIndex = page * liPerPage; // i.e. 2*10 = 20.. Gets items from 10 to 20 on second page

// 4- iterare trough list and display items within the range of StartIndex-EndIndex 
for (i = 0; i< list.length; i++) {  

 if( (i >= startIndex) && (i<endIndex)) {

list[i].style.display = 'block';

                   }
// 5- Hide the remaining items 'none'
 else {
   
  list[i].style.display = 'none';
  
              }
    }


}


// This function selects the selected button 
// adds links/buttons on each multiple of 10 students
// adds elements according to the page selected

function appendPageLinks(list){

   // create list of links
const container = document.createElement('div');
container.setAttribute('Class','pagination');
const containerParent = document.querySelector('.page');
containerParent.appendChild(container);
const listOfLinks = document.createElement('ul');
container.appendChild(listOfLinks);
   
// calculates required number of links/pages according to size of list
let listlenght = list.length/10; // i.e. 54 students /10 = 5.4
let Lisroundup = Math.ceil(listlenght); // rounded up = 6 = 5 pages with 10 students and one page with 4 students
   
// create the required links according to the list lenght
    for(i = 0; i<Lisroundup; i++ ){

const li = document.createElement('li');
listOfLinks.appendChild(li);
const link = document.createElement('A');
let index = i + 1;
link.setAttribute('href', '#');
link.textContent = `${index}`;

li.appendChild(link);

// add active class on the first list element link 
// used for unselecting previous link
if(i === 0){ 
   link.setAttribute('class', 'active');
}

li.appendChild(link);
link.addEventListener('click', (event)  => { // adds event listener to every link
document.querySelector('.active').className = '';
event.target.className = 'active';
showPage(list,index); // call showpage function and send the link index
})

}




   }


showPage(list,1); // call showpage function to initialize the page
appendPageLinks(list); // call appendpagelinks navigae through list/links



 




