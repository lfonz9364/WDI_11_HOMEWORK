console.log("The Recipe Card");var recipe1={title:"Mole",servings:"serves 2",ingredients:["cinnamon","cumin","cocoa"]};console.log(recipe1.title),console.log(recipe1.servings),console.log(recipe1.ingredients.join("\n")),console.log("The Reading List");for(var books=[{title:"A Little Life",author:"Hanya Yanagihara",alreadyRead:!0},{title:"Between The World And Me",author:"Ta-Nehisi Co",alreadyRead:!1},{title:"Fates and Furies",author:"Lauren Groff",alreadyRead:!0},{title:"The Girl on the Train",author:"Paula Hawkin",alreadyRead:!1},{title:"The Sellout",author:"Paul Beatty",alreadyRead:!1}],i=0;i<books.length;i++){var bookTitle=books[i].title,bookRead=books[i].alreadyRead;if(bookRead){var comment=bookTitle+" is a book you have already read";console.log(comment)}else{var comment1=bookTitle+" is a book you need to read";console.log(comment1)}}console.log("The Movie Database");for(var movies=[{title:"Star Wars",duration:2.1,stars:["Daisy Ridley","John Boyega","Mark Hamill","Carrie Fisher"]},{title:"Logan",duration:1.8,stars:["Hugh Jackman","Patrick Stewart","Boyd Holbrook"]},{title:"Guardians of the Galaxy Vol. 2",duration:1.9,stars:["Chris Pratt","Vin Diesel","Zoe Saldana","Dave Baustista"]},{title:"John Wick: Chapter 2",duration:1.9,stars:["Keanu Reaves","Ruby Rose","John Leguizamo"]},{title:"Pirates of the Caribbean: Dead Men Tell No Tales",duration:2.3,stars:["Johnny Depp","Orlando Bloom","Javier Bardem","Kaya Scodelario"]}],i=0;i<movies.length;i++){for(var movieTitles=movies[i].title,movieDuration=movies[i].duration,num=0;num<movies[i].stars.length;num++)var movieStars=movies[i].stars.join(" ,");var comment=movieTitles+" lasts for "+movieDuration+" hours. Stars "+movieStars;console.log(comment)}