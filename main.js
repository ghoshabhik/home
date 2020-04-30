$(document).ready(() => {
  console.log("ready!");
  var jqxhr = $.get("https://api.github.com/users/ghoshabhik", () => {
    console.log(jqxhr.responseJSON);
    $("img").attr("src", jqxhr.responseJSON.avatar_url);
    //$("#loginname").text(jqxhr.responseJSON.login);
    $("#bio").text(jqxhr.responseJSON.bio);
  })
    .done(() => {
      console.log("done");
    })
    .fail(() => {});
});
