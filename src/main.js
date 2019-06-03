import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './main.js';

$().ready(function(){
    $('#button').click(function(){
        let userInput = $('#userInput').val();

        let request = new XMLHttpRequest();
        const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${userInput}`

        request.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        }

        request.open("GET", url, true);
        request.send();

        const getElements = function(response){
            console.log(response)
            $("#frame").show();
            $("#frame").attr('src', response[3][0])
        }
    })
  
});