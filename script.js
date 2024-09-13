const kanyeSongs = [
    // The College Dropout (2004)
    { title: "We Don't Care", cover: "https://link-to-cover.jpg", link: "https://spotify.com/we-dont-care", year: 2004 },
    { title: "All Falls Down", cover: "https://link-to-cover.jpg", link: "https://spotify.com/all-falls-down", year: 2004 },
    { title: "Spaceship", cover: "https://link-to-cover.jpg", link: "https://spotify.com/spaceship", year: 2004 },
    { title: "Jesus Walks", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jesus-walks", year: 2004 },
    { title: "Never Let Me Down", cover: "https://link-to-cover.jpg", link: "https://spotify.com/never-let-me-down", year: 2004 },
    { title: "Get Em High", cover: "https://link-to-cover.jpg", link: "https://spotify.com/get-em-high", year: 2004 },
    { title: "The New Workout Plan", cover: "https://link-to-cover.jpg", link: "https://spotify.com/the-new-workout-plan", year: 2004 },
    { title: "Slow Jamz", cover: "https://link-to-cover.jpg", link: "https://spotify.com/slow-jamz", year: 2004 },
    { title: "Breathe In Breathe Out", cover: "https://link-to-cover.jpg", link: "https://spotify.com/breathe-in-breathe-out", year: 2004 },
    { title: "School Spirit", cover: "https://link-to-cover.jpg", link: "https://spotify.com/school-spirit", year: 2004 },
    { title: "Two Words", cover: "https://link-to-cover.jpg", link: "https://spotify.com/two-words", year: 2004 },
    { title: "Through the Wire", cover: "https://link-to-cover.jpg", link: "https://spotify.com/through-the-wire", year: 2004 },
    { title: "Family Business", cover: "https://link-to-cover.jpg", link: "https://spotify.com/family-business", year: 2004 },
    { title: "Last Call", cover: "https://link-to-cover.jpg", link: "https://spotify.com/last-call", year: 2004 },

    // Late Registration (2005)
    { title: "Heard 'Em Say", cover: "https://link-to-cover.jpg", link: "https://spotify.com/heard-em-say", year: 2005 },
    { title: "Touch the Sky", cover: "https://link-to-cover.jpg", link: "https://spotify.com/touch-the-sky", year: 2005 },
    { title: "Gold Digger", cover: "https://link-to-cover.jpg", link: "https://spotify.com/gold-digger", year: 2005 },
    { title: "Drive Slow", cover: "https://link-to-cover.jpg", link: "https://spotify.com/drive-slow", year: 2005 },
    { title: "My Way Home", cover: "https://link-to-cover.jpg", link: "https://spotify.com/my-way-home", year: 2005 },
    { title: "Crack Music", cover: "https://link-to-cover.jpg", link: "https://spotify.com/crack-music", year: 2005 },
    { title: "Roses", cover: "https://link-to-cover.jpg", link: "https://spotify.com/roses", year: 2005 },
    { title: "Bring Me Down", cover: "https://link-to-cover.jpg", link: "https://spotify.com/bring-me-down", year: 2005 },
    { title: "Addiction", cover: "https://link-to-cover.jpg", link: "https://spotify.com/addiction", year: 2005 },
    { title: "Diamonds from Sierra Leone", cover: "https://link-to-cover.jpg", link: "https://spotify.com/diamonds-from-sierra-leone", year: 2005 },
    { title: "We Major", cover: "https://link-to-cover.jpg", link: "https://spotify.com/we-major", year: 2005 },
    { title: "Hey Mama", cover: "https://link-to-cover.jpg", link: "https://spotify.com/hey-mama", year: 2005 },
    { title: "Celebration", cover: "https://link-to-cover.jpg", link: "https://spotify.com/celebration", year: 2005 },
    { title: "Gone", cover: "https://link-to-cover.jpg", link: "https://spotify.com/gone", year: 2005 },
    { title: "Diamonds from Sierra Leone (Remix)", cover: "https://link-to-cover.jpg", link: "https://spotify.com/diamonds-remix", year: 2005 },

    // Graduation (2007)
    { title: "Good Morning", cover: "https://link-to-cover.jpg", link: "https://spotify.com/good-morning", year: 2007 },
    { title: "Champion", cover: "https://link-to-cover.jpg", link: "https://spotify.com/champion", year: 2007 },
    { title: "Stronger", cover: "https://link-to-cover.jpg", link: "https://spotify.com/stronger", year: 2007 },
    { title: "I Wonder", cover: "https://link-to-cover.jpg", link: "https://spotify.com/i-wonder", year: 2007 },
    { title: "Good Life", cover: "https://link-to-cover.jpg", link: "https://spotify.com/good-life", year: 2007 },
    { title: "Can't Tell Me Nothing", cover: "https://link-to-cover.jpg", link: "https://spotify.com/cant-tell-me-nothing", year: 2007 },
    { title: "Barry Bonds", cover: "https://link-to-cover.jpg", link: "https://spotify.com/barry-bonds", year: 2007 },
    { title: "Drunk and Hot Girls", cover: "https://link-to-cover.jpg", link: "https://spotify.com/drunk-and-hot-girls", year: 2007 },
    { title: "Flashing Lights", cover: "https://link-to-cover.jpg", link: "https://spotify.com/flashing-lights", year: 2007 },
    { title: "Everything I Am", cover: "https://link-to-cover.jpg", link: "https://spotify.com/everything-i-am", year: 2007 },
    { title: "The Glory", cover: "https://link-to-cover.jpg", link: "https://spotify.com/the-glory", year: 2007 },
    { title: "Homecoming", cover: "https://link-to-cover.jpg", link: "https://spotify.com/homecoming", year: 2007 },
    { title: "Big Brother", cover: "https://link-to-cover.jpg", link: "https://spotify.com/big-brother", year: 2007 },

    // 808s & Heartbreak (2008)
    { title: "Say You Will", cover: "https://link-to-cover.jpg", link: "https://spotify.com/say-you-will", year: 2008 },
    { title: "Welcome to Heartbreak", cover: "https://link-to-cover.jpg", link: "https://spotify.com/welcome-to-heartbreak", year: 2008 },
    { title: "Heartless", cover: "https://link-to-cover.jpg", link: "https://spotify.com/heartless", year: 2008 },
    { title: "Amazing", cover: "https://link-to-cover.jpg", link: "https://spotify.com/amazing", year: 2008 },
    { title: "Love Lockdown", cover: "https://link-to-cover.jpg", link: "https://spotify.com/love-lockdown", year: 2008 },
    { title: "Paranoid", cover: "https://link-to-cover.jpg", link: "https://spotify.com/paranoid", year: 2008 },
    { title: "RoboCop", cover: "https://link-to-cover.jpg", link: "https://spotify.com/robocop", year: 2008 },
    { title: "Street Lights", cover: "https://link-to-cover.jpg", link: "https://spotify.com/street-lights", year: 2008 },
    { title: "Bad News", cover: "https://link-to-cover.jpg", link: "https://spotify.com/bad-news", year: 2008 },
    { title: "See You in My Nightmares", cover: "https://link-to-cover.jpg", link: "https://spotify.com/see-you-in-my-nightmares", year: 2008 },
    { title: "Coldest Winter", cover: "https://link-to-cover.jpg", link: "https://spotify.com/coldest-winter", year: 2008 },
    { title: "Pinocchio Story", cover: "https://link-to-cover.jpg", link: "https://spotify.com/pinocchio-story", year: 2008 },

    // My Beautiful Dark Twisted Fantasy (2010)
    { title: "Dark Fantasy", cover: "https://link-to-cover.jpg", link: "https://spotify.com/dark-fantasy", year: 2010 },
    { title: "Gorgeous", cover: "https://link-to-cover.jpg", link: "https://spotify.com/gorgeous", year: 2010 },
    { title: "Power", cover: "https://link-to-cover.jpg", link: "https://spotify.com/power", year: 2010 },
    { title: "All of the Lights", cover: "https://link-to-cover.jpg", link: "https://spotify.com/all-of-the-lights", year: 2010 },
    { title: "Monster", cover: "https://link-to-cover.jpg", link: "https://spotify.com/monster", year: 2010 },
    { title: "So Appalled", cover: "https://link-to-cover.jpg", link: "https://spotify.com/so-appalled", year: 2010 },
    { title: "Devil in a New Dress", cover: "https://link-to-cover.jpg", link: "https://spotify.com/devil-in-a-new-dress", year: 2010 },
    { title: "Runaway", cover: "https://link-to-cover.jpg", link: "https://spotify.com/runaway", year: 2010 },
    { title: "Hell of a Life", cover: "https://link-to-cover.jpg", link: "https://spotify.com/hell-of-a-life", year: 2010 },
    { title: "Blame Game", cover: "https://link-to-cover.jpg", link: "https://spotify.com/blame-game", year: 2010 },
    { title: "Lost in the World", cover: "https://link-to-cover.jpg", link: "https://spotify.com/lost-in-the-world", year: 2010 },
    { title: "Who Will Survive in America", cover: "https://link-to-cover.jpg", link: "https://spotify.com/who-will-survive-in-america", year: 2010 },

    // Watch the Throne (2011) - Collaboration with Jay-Z
    { title: "No Church in the Wild", cover: "https://link-to-cover.jpg", link: "https://spotify.com/no-church-in-the-wild", year: 2011 },
    { title: "Lift Off", cover: "https://link-to-cover.jpg", link: "https://spotify.com/lift-off", year: 2011 },
    { title: "Niggas in Paris", cover: "https://link-to-cover.jpg", link: "https://spotify.com/niggas-in-paris", year: 2011 },
    { title: "Otis", cover: "https://link-to-cover.jpg", link: "https://spotify.com/otis", year: 2011 },
    { title: "Gotta Have It", cover: "https://link-to-cover.jpg", link: "https://spotify.com/gotta-have-it", year: 2011 },
    { title: "New Day", cover: "https://link-to-cover.jpg", link: "https://spotify.com/new-day", year: 2011 },
    { title: "That's My Bitch", cover: "https://link-to-cover.jpg", link: "https://spotify.com/thats-my-bitch", year: 2011 },
    { title: "Welcome to the Jungle", cover: "https://link-to-cover.jpg", link: "https://spotify.com/welcome-to-the-jungle", year: 2011 },
    { title: "Who Gon Stop Me", cover: "https://link-to-cover.jpg", link: "https://spotify.com/who-gon-stop-me", year: 2011 },
    { title: "Murder to Excellence", cover: "https://link-to-cover.jpg", link: "https://spotify.com/murder-to-excellence", year: 2011 },
    { title: "Made in America", cover: "https://link-to-cover.jpg", link: "https://spotify.com/made-in-america", year: 2011 },
    { title: "Why I Love You", cover: "https://link-to-cover.jpg", link: "https://spotify.com/why-i-love-you", year: 2011 },

    // Yeezus (2013)
    { title: "On Sight", cover: "https://link-to-cover.jpg", link: "https://spotify.com/on-sight", year: 2013 },
    { title: "Black Skinhead", cover: "https://link-to-cover.jpg", link: "https://spotify.com/black-skinhead", year: 2013 },
    { title: "I Am a God", cover: "https://link-to-cover.jpg", link: "https://spotify.com/i-am-a-god", year: 2013 },
    { title: "New Slaves", cover: "https://link-to-cover.jpg", link: "https://spotify.com/new-slaves", year: 2013 },
    { title: "Hold My Liquor", cover: "https://link-to-cover.jpg", link: "https://spotify.com/hold-my-liquor", year: 2013 },
    { title: "I'm In It", cover: "https://link-to-cover.jpg", link: "https://spotify.com/im-in-it", year: 2013 },
    { title: "Blood on the Leaves", cover: "https://link-to-cover.jpg", link: "https://spotify.com/blood-on-the-leaves", year: 2013 },
    { title: "Guilt Trip", cover: "https://link-to-cover.jpg", link: "https://spotify.com/guilt-trip", year: 2013 },
    { title: "Send It Up", cover: "https://link-to-cover.jpg", link: "https://spotify.com/send-it-up", year: 2013 },
    { title: "Bound 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/bound-2", year: 2013 },

    // The Life of Pablo (2016)
    { title: "Ultralight Beam", cover: "https://link-to-cover.jpg", link: "https://spotify.com/ultralight-beam", year: 2016 },
    { title: "Father Stretch My Hands Pt. 1", cover: "https://link-to-cover.jpg", link: "https://spotify.com/father-stretch-my-hands-pt-1", year: 2016 },
    { title: "Father Stretch My Hands Pt. 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/father-stretch-my-hands-pt-2", year: 2016 },
    { title: "Famous", cover: "https://link-to-cover.jpg", link: "https://spotify.com/famous", year: 2016 },
    { title: "Feedback", cover: "https://link-to-cover.jpg", link: "https://spotify.com/feedback", year: 2016 },
    { title: "Low Lights", cover: "https://link-to-cover.jpg", link: "https://spotify.com/low-lights", year: 2016 },
    { title: "Highlights", cover: "https://link-to-cover.jpg", link: "https://spotify.com/highlights", year: 2016 },
    { title: "Freestyle 4", cover: "https://link-to-cover.jpg", link: "https://spotify.com/freestyle-4", year: 2016 },
    { title: "I Love Kanye", cover: "https://link-to-cover.jpg", link: "https://spotify.com/i-love-kanye", year: 2016 },
    { title: "Waves", cover: "https://link-to-cover.jpg", link: "https://spotify.com/waves", year: 2016 },
    { title: "FML", cover: "https://link-to-cover.jpg", link: "https://spotify.com/fml", year: 2016 },
    { title: "Real Friends", cover: "https://link-to-cover.jpg", link: "https://spotify.com/real-friends", year: 2016 },
    { title: "Wolves", cover: "https://link-to-cover.jpg", link: "https://spotify.com/wolves", year: 2016 },
    { title: "Frank's Track", cover: "https://link-to-cover.jpg", link: "https://spotify.com/franks-track", year: 2016 },
    { title: "Silver Surfer Intermission", cover: "https://link-to-cover.jpg", link: "https://spotify.com/silver-surfer-intermission", year: 2016 },
    { title: "30 Hours", cover: "https://link-to-cover.jpg", link: "https://spotify.com/30-hours", year: 2016 },
    { title: "No More Parties in LA", cover: "https://link-to-cover.jpg", link: "https://spotify.com/no-more-parties-in-la", year: 2016 },
    { title: "Facts", cover: "https://link-to-cover.jpg", link: "https://spotify.com/facts", year: 2016 },
    { title: "Fade", cover: "https://link-to-cover.jpg", link: "https://spotify.com/fade", year: 2016 },
    { title: "Saint Pablo", cover: "https://link-to-cover.jpg", link: "https://spotify.com/saint-pablo", year: 2016 },

    // ye (2018)
    { title: "I Thought About Killing You", cover: "https://link-to-cover.jpg", link: "https://spotify.com/i-thought-about-killing-you", year: 2018 },
    { title: "Yikes", cover: "https://link-to-cover.jpg", link: "https://spotify.com/yikes", year: 2018 },
    { title: "All Mine", cover: "https://link-to-cover.jpg", link: "https://spotify.com/all-mine", year: 2018 },
    { title: "Wouldn't Leave", cover: "https://link-to-cover.jpg", link: "https://spotify.com/wouldnt-leave", year: 2018 },
    { title: "No Mistakes", cover: "https://link-to-cover.jpg", link: "https://spotify.com/no-mistakes", year: 2018 },
    { title: "Ghost Town", cover: "https://link-to-cover.jpg", link: "https://spotify.com/ghost-town", year: 2018 },
    { title: "Violent Crimes", cover: "https://link-to-cover.jpg", link: "https://spotify.com/violent-crimes", year: 2018 },

    // Jesus Is King (2019)
    { title: "Every Hour", cover: "https://link-to-cover.jpg", link: "https://spotify.com/every-hour", year: 2019 },
    { title: "Selah", cover: "https://link-to-cover.jpg", link: "https://spotify.com/selah", year: 2019 },
    { title: "Follow God", cover: "https://link-to-cover.jpg", link: "https://spotify.com/follow-god", year: 2019 },
    { title: "Closed on Sunday", cover: "https://link-to-cover.jpg", link: "https://spotify.com/closed-on-sunday", year: 2019 },
    { title: "On God", cover: "https://link-to-cover.jpg", link: "https://spotify.com/on-god", year: 2019 },
    { title: "Everything We Need", cover: "https://link-to-cover.jpg", link: "https://spotify.com/everything-we-need", year: 2019 },
    { title: "Water", cover: "https://link-to-cover.jpg", link: "https://spotify.com/water", year: 2019 },
    { title: "God Is", cover: "https://link-to-cover.jpg", link: "https://spotify.com/god-is", year: 2019 },
    { title: "Hands On", cover: "https://link-to-cover.jpg", link: "https://spotify.com/hands-on", year: 2019 },
    { title: "Use This Gospel", cover: "https://link-to-cover.jpg", link: "https://spotify.com/use-this-gospel", year: 2019 },
    { title: "Jesus Is Lord", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jesus-is-lord", year: 2019 },

    // Donda (2021)
    { title: "Donda Chant", cover: "https://link-to-cover.jpg", link: "https://spotify.com/donda-chant", year: 2021 },
    { title: "Jail", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jail", year: 2021 },
    { title: "God Breathed", cover: "https://link-to-cover.jpg", link: "https://spotify.com/god-breathed", year: 2021 },
    { title: "Off the Grid", cover: "https://link-to-cover.jpg", link: "https://spotify.com/off-the-grid", year: 2021 },
    { title: "Hurricane", cover: "https://link-to-cover.jpg", link: "https://spotify.com/hurricane", year: 2021 },
    { title: "Praise God", cover: "https://link-to-cover.jpg", link: "https://spotify.com/praise-god", year: 2021 },
    { title: "Jonah", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jonah", year: 2021 },
    { title: "Ok Ok", cover: "https://link-to-cover.jpg", link: "https://spotify.com/ok-ok", year: 2021 },
    { title: "Junya", cover: "https://link-to-cover.jpg", link: "https://spotify.com/junya", year: 2021 },
    { title: "Believe What I Say", cover: "https://link-to-cover.jpg", link: "https://spotify.com/believe-what-i-say", year: 2021 },
    { title: "24", cover: "https://link-to-cover.jpg", link: "https://spotify.com/24", year: 2021 },
    { title: "Remote Control", cover: "https://link-to-cover.jpg", link: "https://spotify.com/remote-control", year: 2021 },
    { title: "Moon", cover: "https://link-to-cover.jpg", link: "https://spotify.com/moon", year: 2021 },
    { title: "Heaven and Hell", cover: "https://link-to-cover.jpg", link: "https://spotify.com/heaven-and-hell", year: 2021 },
    { title: "Donda", cover: "https://link-to-cover.jpg", link: "https://spotify.com/donda", year: 2021 },
    { title: "Keep My Spirit Alive", cover: "https://link-to-cover.jpg", link: "https://spotify.com/keep-my-spirit-alive", year: 2021 },
    { title: "Jesus Lord", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jesus-lord", year: 2021 },
    { title: "New Again", cover: "https://link-to-cover.jpg", link: "https://spotify.com/new-again", year: 2021 },
    { title: "Tell the Vision", cover: "https://link-to-cover.jpg", link: "https://spotify.com/tell-the-vision", year: 2021 },
    { title: "Lord I Need You", cover: "https://link-to-cover.jpg", link: "https://spotify.com/lord-i-need-you", year: 2021 },
    { title: "Pure Souls", cover: "https://link-to-cover.jpg", link: "https://spotify.com/pure-souls", year: 2021 },
    { title: "Come to Life", cover: "https://link-to-cover.jpg", link: "https://spotify.com/come-to-life", year: 2021 },
    { title: "No Child Left Behind", cover: "https://link-to-cover.jpg", link: "https://spotify.com/no-child-left-behind", year: 2021 },
    { title: "Jail Pt. 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jail-pt-2", year: 2021 },
    { title: "Ok Ok Pt. 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/ok-ok-pt-2", year: 2021 },
    { title: "Junya Pt. 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/junya-pt-2", year: 2021 },
    { title: "Jesus Lord Pt. 2", cover: "https://link-to-cover.jpg", link: "https://spotify.com/jesus-lord-pt-2", year: 2021 }
];

// Optional: You can add a function to shuffle the array if needed
function randomKanyeSong() {
    const randomIndex = Math.floor(Math.random() * kanyeSongs.length);
    const song = kanyeSongs[randomIndex];
    return `
        <div>
            <h2>${song.title} (${song.year})</h2>
            <img src="${song.cover}" alt="${song.title}" />
            <p><a href="${song.link}" target="_blank">Listen on Spotify</a></p>
        </div>
    `;
}

// Example: Call the random function and display the result
document.getElementById("kanye-song").innerHTML = randomKanyeSong();
