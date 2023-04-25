function getData() {
    $("#diceContainer").off("click");
    $('#diceContainer').css('cursor', 'progress');
    $('#quote').css('display', 'none');
    $('#loadingContainer').css('display', 'block');
    $('#diceContainer').css('background-color', '#313A48');
    fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(response => JSON.stringify(response))
    .then(stringified => JSON.parse(stringified))
    .then(result => {
        function reset() {
            $('#loadingContainer').css('display', 'none');
            $('#quote').css('display', 'block');
            document.getElementById('heading').innerHTML = `ADVICE #${result['slip'].id}`;
            document.getElementById('quote').innerHTML = `"${result['slip'].advice}"`;
            $('#diceContainer').css('background-color', '#53FFAA');
            $('#diceContainer').css('cursor', 'pointer');
            $("#diceContainer").on("click", getData);
        }
        setTimeout(reset, 1500);

})};

$("#diceContainer").on("click", getData);

