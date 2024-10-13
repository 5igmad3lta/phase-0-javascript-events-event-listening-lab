function addingEventListener(event, response) {
    const input = document.getElementById('button');
    input.addEventListener(event, function() {
        alert(response);
    });
}
addingEventListener('click', 'Hehe that tickled!')