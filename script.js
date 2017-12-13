$(function(){

    $('span').each((index, element) => {
        if(index % 2 === 0)
            $(element).css('color','red');
    });

    $('p').each((index, elem) => {
        $(elem).append(`<button href="#" data-tmp="${index}">${index}</button>`);
    });

    $('button').click(function(){ 
        alert($(this).attr('data-tmp'));
    });

});