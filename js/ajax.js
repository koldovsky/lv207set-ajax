var $loaded = document.getElementById('loaded');
$loaded.innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('make-ajax').addEventListener('click', makeAjax);

function makeAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $container.innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'ajax-data.html', true);
    xhr.send();
}