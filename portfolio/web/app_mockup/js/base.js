//Add a tag if it isn't empty
$('.add').on('click', function () {
    if ($('#tags-container').length <= 4) {
        alertify.prompt('Enter a tag', function (e, str) {
            if (e) {
                // If string isn't empty, create a new tag
                if (str != '') {
                    createTag(str);
                } else {
                    alertify.alert('Please enter a valid tag');
                }
            } else {}
        }, '');

}
    else{
        alertify.alert('You can only enter up to 4 tags');
    }
});

//Because 
$(document).on('click', '.remove', function () {
    $(this).parent().remove();
});


//Create a new tag 
function createTag(name) {
    var tag_html = '<a href="javascript:void(0)" class="tag btn">' + name + '<span class="remove">X</span></a>';
    $('#tags').prepend(tag_html);
};

//Read the current applicants
var applicants = $('#applicants').html();

//Remove applicant and change the number
$('.reject').on('click', function () {
    $(this).closest('.row').remove();
    applicants -= 1;
    $('#applicants').html(applicants);
});

//Remove applicant and change the number ('cause no backend exists)
$('.accept').on('click', function () {
    $(this).closest('.row').fadeOut();
    applicants -= 1;
    $('#applicants').html(applicants);
});

var is_menu_open = false;

$('.menu-btn').on('click', function () {
    if (!is_menu_open) {
        $('.menu').css('display', 'block');
        is_menu_open = true;
    }
});

$('html').click(function (e) {
    if (!$(e.target).hasClass('menu-btn')) {
        $('.menu').css('display', 'none');
        is_menu_open = false;
    }
});