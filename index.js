function getData() {
    $("#diceContainer").css('transition', 'none').off("click").off('mouseover');
    handleDiceMouseout();
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
            $('#diceContainer').css('transition', 'all .5s').css('cursor', 'pointer').on("mouseover", handleDiceMouseover);
            $("#diceContainer").on("click", getData);
        }
        setTimeout(reset, 1500);

})};

function handleDiceMouseover() {
    $("#diceContainer").css('-webkit-box-shadow', '0px 0px 50px 0px rgba(83,255,170,1)');
    $("#diceContainer").css('-moz-box-shadow', '0px 0px 50px 0px rgba(83,255,170,1)');
    $("#diceContainer").css('box-shadow', '0px 0px 50px 0px rgba(83,255,170,1)');
}

function handleDiceMouseout() {
    $("#diceContainer").css('-webkit-box-shadow', 'none');
    $("#diceContainer").css('-moz-box-shadow', 'none');
    $("#diceContainer").css('box-shadow', 'none');
}

$("#diceContainer").on("click", getData).on("mouseover", handleDiceMouseover).on('mouseout', handleDiceMouseout);


