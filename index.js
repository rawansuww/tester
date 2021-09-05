const user = {
  name: "zidane",
  email: 'huuvi168@gmail.com'
};

const element = <h1> {user.name} exist email: {user.email} </h1>;

const element2 = 
  <div  className="heading"> 
     <h1> {user.name}  </h1>
     <h1> {user.email} </h1>
  </div>;

var numbers = [1,2,3,4];
var doubleNumbers = numbers.map(function(num){
  return num * 2 + "; ";
})

var doubleNumberArrowFunction = numbers.map((num)  => num * 3 + "; ");

var element3 = 
  <div>
    Double numbers: {doubleNumberArrowFunction}
  </div>;

ReactDOM.render(
  element3,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// -------// -------// -------
// ------- index.css ------
// -------// -------// -------
.heading {
  padding: 10px;
  color: white;
  background-color: green;
}