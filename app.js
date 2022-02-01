fetch("https://api.lyrics.ovh/v1/Playboi Carti/Stop Breathing")
  .then(function (response) {
    console.log("Helloooo   ");
    // if statement to catch any errors aside from 404
    if (response.status != 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    response.json().then(function (data) {
      console.log("Successful!");
      console.log(data);
      //   data1 = data.url;
      //   jsonData = JSON.parse(data1.content);
      const lyrics = data.lyrics.replace(new RegExp("\n", "g"), "<br>");
      document.getElementById("lyrics-display").innerHTML = lyrics;
    });
  })
  .catch(function (err) {
    console.log(err + "404");
  });
