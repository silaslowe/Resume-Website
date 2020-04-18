$(function () {
  $('button').click(function () {
    var radioValue = $("input[type='radio']:checked").val();
    if (radioValue === 'wrong') {
      $('#fav-animal-output').text(`You favorite animal is something lame.`);
    } else {
      $('#fav-animal-output').text(
        `Congratulations. Your favorite animal is the nutria. You are wise, strong of character and will as well as very attractive physically!!!`
      );
    }
  });
});
