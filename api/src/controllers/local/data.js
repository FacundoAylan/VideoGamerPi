const API = async (req, res)=>{
    try{
        let data= [
        {
        "id": 3498,
        "name": "grand theft auto v",
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "released": "2013-09-17",
        "rating": 4.47,
        "platforms": [
            "PC",
            "Xbox Series S/X",
            "PlayStation 4",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One",
            "PlayStation 5"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 3328,
        "name": "the witcher 3: wild hunt",
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "released": "2015-05-18",
        "rating": 4.67,
        "platforms": [
            "Nintendo Switch",
            "PlayStation 5",
            "Xbox Series S/X",
            "Xbox One",
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 4200,
        "name": "portal 2",
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "released": "2011-04-18",
        "rating": 4.61,
        "platforms": [
            "Xbox 360",
            "Linux",
            "macOS",
            "PlayStation 3",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Shooter",
            "Puzzle"
        ]
        },
        {
        "id": 5286,
        "name": "tomb raider (2013)",
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "released": "2013-03-05",
        "rating": 4.05,
        "platforms": [
            "PlayStation 4",
            "macOS",
            "PC",
            "Xbox One",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 4291,
        "name": "counter-strike: global offensive",
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "released": "2012-08-21",
        "rating": 3.57,
        "platforms": [
            "PC",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 5679,
        "name": "the elder scrolls v: skyrim",
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "released": "2011-11-11",
        "rating": 4.42,
        "platforms": [
            "PC",
            "Nintendo Switch",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 12020,
        "name": "left 4 dead 2",
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "released": "2009-11-17",
        "rating": 4.08,
        "platforms": [
            "macOS",
            "Linux",
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 13536,
        "name": "portal",
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "released": "2007-10-09",
        "rating": 4.51,
        "platforms": [
            "Android",
            "PlayStation 3",
            "Xbox 360",
            "Linux",
            "macOS",
            "PC",
            "Nintendo Switch"
        ],
        "genres": [
            "Adventure",
            "Puzzle"
        ]
        },
        {
        "id": 4062,
        "name": "bioshock infinite",
        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "released": "2013-03-26",
        "rating": 4.39,
        "platforms": [
            "PlayStation 4",
            "Xbox 360",
            "Nintendo Switch",
            "Linux",
            "PC",
            "PlayStation 3",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 802,
        "name": "borderlands 2",
        "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "released": "2012-09-18",
        "rating": 4.02,
        "platforms": [
            "PlayStation 4",
            "macOS",
            "PC",
            "Xbox 360",
            "PlayStation 3",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
        },
        {
        "id": 3439,
        "name": "life is strange",
        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "released": "2015-01-29",
        "rating": 4.11,
        "platforms": [
            "PC",
            "Linux",
            "PlayStation 3",
            "macOS",
            "iOS",
            "Xbox 360",
            "Android",
            "PlayStation 4",
            "Xbox One"
        ],
        "genres": [
            "Adventure"
        ]
        },
        {
        "id": 28,
        "name": "red dead redemption 2",
        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "released": "2018-10-26",
        "rating": 4.59,
        "platforms": [
            "PC",
            "PlayStation 4",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 13537,
        "name": "half-life 2",
        "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "released": "2004-11-16",
        "rating": 4.5,
        "platforms": [
            "PC",
            "Xbox 360",
            "Linux",
            "Xbox",
            "Android",
            "macOS"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 4286,
        "name": "bioshock",
        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "released": "2007-08-21",
        "rating": 4.37,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "iOS",
            "Nintendo Switch",
            "Xbox One",
            "PC",
            "macOS",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 1030,
        "name": "limbo",
        "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "released": "2010-07-21",
        "rating": 4.16,
        "platforms": [
            "Linux",
            "PS Vita",
            "Android",
            "Xbox One",
            "Nintendo Switch",
            "iOS",
            "PC",
            "macOS",
            "Xbox 360",
            "PlayStation 3",
            "PlayStation 4"
        ],
        "genres": [
            "Adventure",
            "Indie",
            "Puzzle",
            "Platformer"
        ]
        },
        {
        "id": 2454,
        "name": "doom (2016)",
        "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        "released": "2016-05-13",
        "rating": 4.39,
        "platforms": [
            "Xbox One",
            "PC",
            "Nintendo Switch",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 3070,
        "name": "fallout 4",
        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "released": "2015-11-09",
        "rating": 3.8,
        "platforms": [
            "Xbox One",
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 32,
        "name": "destiny 2",
        "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "released": "2017-09-06",
        "rating": 3.56,
        "platforms": [
            "Xbox One",
            "PC",
            "PlayStation 4",
            "Web",
            "Xbox Series S/X",
            "PlayStation 5"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 58175,
        "name": "god of war",
        "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        "released": "2018-04-20",
        "rating": 4.59,
        "platforms": [
            "PlayStation 5",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 11859,
        "name": "team fortress 2",
        "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        "released": "2007-10-10",
        "rating": 3.66,
        "platforms": [
            "PC",
            "macOS",
            "Linux"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 3939,
        "name": "payday 2",
        "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        "released": "2013-08-13",
        "rating": 3.5,
        "platforms": [
            "Linux",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 278,
        "name": "horizon zero dawn",
        "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        "released": "2017-02-28",
        "rating": 4.33,
        "platforms": [
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 4459,
        "name": "grand theft auto iv",
        "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        "released": "2008-04-29",
        "rating": 4.25,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "Xbox One",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 3272,
        "name": "rocket league",
        "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "released": "2015-07-07",
        "rating": 3.97,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PC",
            "macOS",
            "Linux",
            "Nintendo Switch"
        ],
        "genres": [
            "Sports",
            "Racing",
            "Indie"
        ]
        },
        {
        "id": 10213,
        "name": "dota 2",
        "image": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
        "released": "2013-07-09",
        "rating": 3.05,
        "platforms": [
            "PC",
            "macOS",
            "Linux"
        ],
        "genres": [
            "Action",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 29028,
        "name": "metro 2033",
        "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        "released": "2010-03-16",
        "rating": 3.93,
        "platforms": [
            "Xbox 360",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 422,
        "name": "terraria",
        "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "released": "2011-05-16",
        "rating": 4.05,
        "platforms": [
            "Xbox 360",
            "Wii U",
            "Nintendo 3DS",
            "Xbox One",
            "PlayStation 4",
            "iOS",
            "PC",
            "macOS",
            "Linux",
            "Nintendo Switch",
            "PlayStation 3",
            "PS Vita",
            "Android"
        ],
        "genres": [
            "Action",
            "Indie",
            "Platformer"
        ]
        },
        {
        "id": 766,
        "name": "warframe",
        "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        "released": "2013-03-25",
        "rating": 3.42,
        "platforms": [
            "Xbox Series S/X",
            "PlayStation 5",
            "PlayStation 4",
            "Xbox One",
            "Nintendo Switch",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 3192,
        "name": "metal gear solid v: the phantom pain",
        "image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        "released": "2015-09-01",
        "rating": 4.16,
        "platforms": [
            "Xbox One",
            "PlayStation 3",
            "PlayStation 4",
            "Xbox 360",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 7689,
        "name": "rise of the tomb raider",
        "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "released": "2015-11-10",
        "rating": 4.04,
        "platforms": [
            "Xbox One",
            "PC",
            "macOS",
            "PlayStation 4"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 41494,
        "name": "cyberpunk 2077",
        "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        "released": "2020-12-10",
        "rating": 4.08,
        "platforms": [
            "PlayStation 4",
            "PC",
            "Xbox Series S/X",
            "PlayStation 5",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 23027,
        "name": "the walking dead: season 1",
        "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "released": "2012-04-23",
        "rating": 4.32,
        "platforms": [
            "macOS",
            "PC",
            "iOS",
            "Android",
            "PS Vita",
            "PlayStation 4",
            "PlayStation 3",
            "Xbox 360",
            "Nintendo Switch",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 3287,
        "name": "batman: arkham knight",
        "image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
        "released": "2015-06-23",
        "rating": 4.22,
        "platforms": [
            "PC",
            "Xbox One",
            "PlayStation 4"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 16944,
        "name": "the witcher 2: assassins of kings enhanced edition",
        "image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        "released": "2012-04-16",
        "rating": 4.18,
        "platforms": [
            "macOS",
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "RPG"
        ]
        },
        {
        "id": 11973,
        "name": "middle-earth: shadow of mordor",
        "image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "released": "2014-09-30",
        "rating": 3.89,
        "platforms": [
            "Linux",
            "Xbox One",
            "Xbox 360",
            "PlayStation 3",
            "PlayStation 4",
            "macOS",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 19103,
        "name": "half-life 2: lost coast",
        "image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        "released": "2005-10-27",
        "rating": 3.44,
        "platforms": [
            "macOS",
            "Linux",
            "PC"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 416,
        "name": "grand theft auto: san andreas",
        "image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "released": "2004-10-26",
        "rating": 4.51,
        "platforms": [
            "Xbox One",
            "Android",
            "Xbox",
            "iOS",
            "PC",
            "macOS",
            "Xbox 360",
            "PlayStation 2",
            "PlayStation 3",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 17822,
        "name": "the witcher: enhanced edition director's cut",
        "image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        "released": "2008-09-16",
        "rating": 4.06,
        "platforms": [
            "PC",
            "macOS"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 4427,
        "name": "bioshock 2",
        "image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        "released": "2010-02-09",
        "rating": 4.06,
        "platforms": [
            "PlayStation 4",
            "Xbox One",
            "Nintendo Switch",
            "PC",
            "macOS",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 10035,
        "name": "hitman",
        "image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        "released": "2016-03-11",
        "rating": 3.92,
        "platforms": [
            "PlayStation 4",
            "Linux",
            "macOS",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Simulation"
        ]
        },
        {
        "id": 19710,
        "name": "half-life 2: episode one",
        "image": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        "released": "2006-06-01",
        "rating": 4.39,
        "platforms": [
            "Linux",
            "PC",
            "Xbox 360",
            "Android",
            "macOS"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 19709,
        "name": "half-life 2: episode two",
        "image": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        "released": "2007-10-09",
        "rating": 4.45,
        "platforms": [
            "Xbox 360",
            "Android",
            "macOS",
            "Linux",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Puzzle"
        ]
        },
        {
        "id": 4252,
        "name": "mirror's edge",
        "image": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        "released": "2008-11-11",
        "rating": 4.07,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "PC"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 3612,
        "name": "hotline miami",
        "image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        "released": "2012-10-22",
        "rating": 4.37,
        "platforms": [
            "Linux",
            "Nintendo Switch",
            "Xbox One",
            "PlayStation 4",
            "PS Vita",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Arcade",
            "Indie"
        ]
        },
        {
        "id": 2551,
        "name": "dark souls iii",
        "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        "released": "2016-04-11",
        "rating": 4.41,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 9767,
        "name": "hollow knight",
        "image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        "released": "2017-02-23",
        "rating": 4.41,
        "platforms": [
            "Nintendo Switch",
            "Xbox One",
            "PS Vita",
            "PC",
            "macOS",
            "Linux",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Indie",
            "Platformer"
        ]
        },
        {
        "id": 1447,
        "name": "deus ex: mankind divided",
        "image": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        "released": "2016-08-22",
        "rating": 3.96,
        "platforms": [
            "Xbox One",
            "Linux",
            "macOS",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 290856,
        "name": "apex legends",
        "image": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
        "released": "2019-02-04",
        "rating": 3.67,
        "platforms": [
            "PlayStation 4",
            "Nintendo Switch",
            "macOS",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 3790,
        "name": "outlast",
        "image": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        "released": "2013-09-03",
        "rating": 3.7,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "Nintendo Switch",
            "macOS",
            "PC",
            "Linux"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Indie"
        ]
        },
        {
        "id": 4332,
        "name": "spec ops: the line",
        "image": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        "released": "2012-06-26",
        "rating": 4.08,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "Xbox One",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 41,
        "name": "little nightmares",
        "image": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        "released": "2017-04-27",
        "rating": 4.06,
        "platforms": [
            "PlayStation 4",
            "PC",
            "Xbox One",
            "Nintendo Switch"
        ],
        "genres": [
            "Action",
            "Platformer"
        ]
        },
        {
        "id": 58134,
        "name": "marvel's spider-man",
        "image": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
        "released": "2018-09-07",
        "rating": 4.47,
        "platforms": [
            "PC",
            "PlayStation 5",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 4161,
        "name": "far cry 3",
        "image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        "released": "2012-11-28",
        "rating": 4.23,
        "platforms": [
            "Xbox One",
            "Xbox 360",
            "PlayStation 3",
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 13668,
        "name": "amnesia: the dark descent",
        "image": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        "released": "2010-09-08",
        "rating": 3.65,
        "platforms": [
            "Linux",
            "macOS",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Indie"
        ]
        },
        {
        "id": 10754,
        "name": "bioshock remastered",
        "image": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        "released": "2016-09-15",
        "rating": 4.23,
        "platforms": [
            "PlayStation 4",
            "Nintendo Switch",
            "macOS",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Shooter"
        ]
        },
        {
        "id": 19487,
        "name": "alan wake",
        "image": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        "released": "2010-05-14",
        "rating": 4.12,
        "platforms": [
            "Xbox 360",
            "Xbox One",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure"
        ]
        },
        {
        "id": 4386,
        "name": "saints row: the third",
        "image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        "released": "2011-11-14",
        "rating": 3.94,
        "platforms": [
            "PC",
            "Xbox One",
            "Xbox 360",
            "PlayStation 3",
            "Linux"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 2462,
        "name": "uncharted 4: a thief’s end",
        "image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
        "released": "2016-05-10",
        "rating": 4.51,
        "platforms": [
            "PlayStation 4",
            "PlayStation 5"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 11936,
        "name": "half-life 2: deathmatch",
        "image": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        "released": "2004-11-01",
        "rating": 3.27,
        "platforms": [
            "Linux",
            "macOS",
            "PC"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 3696,
        "name": "wolfenstein: the new order",
        "image": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        "released": "2014-05-19",
        "rating": 4.19,
        "platforms": [
            "Xbox One",
            "PC",
            "Xbox 360",
            "PlayStation 3",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 4828,
        "name": "borderlands",
        "image": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        "released": "2009-10-20",
        "rating": 3.83,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "Xbox One",
            "Nintendo Switch",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
        },
        {
        "id": 18080,
        "name": "half-life",
        "image": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
        "released": "1998-11-19",
        "rating": 4.4,
        "platforms": [
            "PlayStation 2",
            "PC",
            "macOS",
            "Linux",
            "Dreamcast"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Puzzle",
            "Platformer"
        ]
        },
        {
        "id": 4514,
        "name": "l.a. noire",
        "image": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        "released": "2011-05-17",
        "rating": 4.16,
        "platforms": [
            "PlayStation 4",
            "PlayStation 3",
            "Xbox 360",
            "PC",
            "Xbox One",
            "Nintendo Switch"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 29177,
        "name": "detroit: become human",
        "image": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        "released": "2018-05-25",
        "rating": 4.29,
        "platforms": [
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 3144,
        "name": "super meat boy",
        "image": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        "released": "2010-10-20",
        "rating": 3.97,
        "platforms": [
            "Linux",
            "Nintendo Switch",
            "Wii U",
            "Xbox 360",
            "PlayStation 4",
            "PS Vita",
            "Android",
            "Web",
            "PC",
            "macOS"
        ],
        "genres": [
            "Indie",
            "Platformer"
        ]
        },
        {
        "id": 39,
        "name": "prey",
        "image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        "released": "2017-05-05",
        "rating": 4.28,
        "platforms": [
            "Xbox One",
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
        },
        {
        "id": 10533,
        "name": "path of exile",
        "image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        "released": "2013-10-23",
        "rating": 3.64,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG",
            "Massively Multiplayer",
            "Indie"
        ]
        },
        {
        "id": 17540,
        "name": "injustice: gods among us ultimate edition",
        "image": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
        "released": "2013-11-12",
        "rating": 3.52,
        "platforms": [
            "PlayStation 4",
            "PS Vita",
            "PC",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Arcade",
            "Fighting"
        ]
        },
        {
        "id": 4570,
        "name": "dead space",
        "image": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        "released": "2008-10-13",
        "rating": 4.37,
        "platforms": [
            "Xbox 360",
            "PC",
            "Xbox One",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 13633,
        "name": "sid meier's civilization v",
        "image": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
        "released": "2010-09-21",
        "rating": 4.28,
        "platforms": [
            "PC",
            "macOS",
            "Linux"
        ],
        "genres": [
            "Strategy"
        ]
        },
        {
        "id": 4806,
        "name": "mass effect 2",
        "image": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
        "released": "2010-01-26",
        "rating": 4.48,
        "platforms": [
            "PC",
            "Xbox One",
            "PlayStation 3",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 3636,
        "name": "the last of us remastered",
        "image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
        "released": "2014-07-29",
        "rating": 4.69,
        "platforms": [
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 362,
        "name": "for honor",
        "image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        "released": "2017-02-13",
        "rating": 3.31,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 9721,
        "name": "garry's mod",
        "image": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
        "released": "2004-12-24",
        "rating": 3.77,
        "platforms": [
            "Linux",
            "PC",
            "macOS"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Simulation",
            "Casual",
            "Indie"
        ]
        },
        {
        "id": 3841,
        "name": "assassin’s creed iv: black flag",
        "image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
        "released": "2013-10-29",
        "rating": 4.13,
        "platforms": [
            "Xbox 360",
            "Xbox One",
            "PC",
            "Nintendo Switch",
            "Wii U",
            "PlayStation 3",
            "PlayStation 4"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 654,
        "name": "stardew valley",
        "image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        "released": "2016-02-25",
        "rating": 4.4,
        "platforms": [
            "Nintendo Switch",
            "Xbox One",
            "PC",
            "iOS",
            "macOS",
            "Linux",
            "PlayStation 4",
            "PS Vita",
            "Android"
        ],
        "genres": [
            "RPG",
            "Simulation",
            "Indie"
        ]
        },
        {
        "id": 5583,
        "name": "hitman: absolution",
        "image": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg",
        "released": "2012-11-19",
        "rating": 3.72,
        "platforms": [
            "PlayStation 4",
            "PC",
            "macOS",
            "Xbox 360",
            "PlayStation 3"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 4248,
        "name": "dishonored",
        "image": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
        "released": "2012-09-25",
        "rating": 4.37,
        "platforms": [
            "PlayStation 4",
            "PlayStation 3",
            "Xbox 360",
            "PC",
            "Xbox One"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 10142,
        "name": "playerunknown’s battlegrounds",
        "image": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
        "released": "2017-12-20",
        "rating": 3.29,
        "platforms": [
            "PC",
            "Xbox One",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Massively Multiplayer"
        ]
        },
        {
        "id": 5563,
        "name": "fallout: new vegas",
        "image": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        "released": "2010-10-19",
        "rating": 4.43,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PlayStation 3",
            "PC",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure",
            "RPG"
        ]
        },
        {
        "id": 12536,
        "name": "hellblade: senua's sacrifice",
        "image": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        "released": "2017-08-07",
        "rating": 4.27,
        "platforms": [
            "Xbox One",
            "Nintendo Switch",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure",
            "Indie"
        ]
        },
        {
        "id": 430,
        "name": "grand theft auto: vice city",
        "image": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg",
        "released": "2002-10-27",
        "rating": 4.45,
        "platforms": [
            "Android",
            "PlayStation 4",
            "PSP",
            "macOS",
            "PC",
            "iOS",
            "PS Vita",
            "PlayStation 2",
            "PlayStation 3",
            "Xbox"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 10243,
        "name": "company of heroes 2",
        "image": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
        "released": "2013-06-25",
        "rating": 3.08,
        "platforms": [
            "PC",
            "macOS",
            "Linux"
        ],
        "genres": [
            "Strategy",
            "Simulation"
        ]
        },
        {
        "id": 12447,
        "name": "the elder scrolls v: skyrim special edition",
        "image": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        "released": "2016-10-27",
        "rating": 4.45,
        "platforms": [
            "PC",
            "Xbox One",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 11935,
        "name": "half-life deathmatch: source",
        "image": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
        "released": "2006-05-01",
        "rating": 3.24,
        "platforms": [
            "macOS",
            "Linux",
            "PC"
        ],
        "genres": [
            "Action"
        ]
        },
        {
        "id": 3387,
        "name": "bloodborne",
        "image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
        "released": "2015-03-24",
        "rating": 4.4,
        "platforms": [
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 4166,
        "name": "mass effect",
        "image": "https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg",
        "released": "2007-11-16",
        "rating": 4.4,
        "platforms": [
            "Xbox One",
            "Xbox 360",
            "PlayStation 3",
            "PC"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 3747,
        "name": "metal gear solid v: ground zeroes",
        "image": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
        "released": "2014-03-18",
        "rating": 3.89,
        "platforms": [
            "PlayStation 3",
            "PlayStation 4",
            "PC",
            "Xbox One",
            "Xbox 360"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 58812,
        "name": "control",
        "image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
        "released": "2019-08-27",
        "rating": 4.17,
        "platforms": [
            "Xbox Series S/X",
            "PlayStation 5",
            "Xbox One",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter",
            "Adventure"
        ]
        },
        {
        "id": 50738,
        "name": "death stranding",
        "image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
        "released": "2019-11-08",
        "rating": 4.35,
        "platforms": [
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
        {
        "id": 3543,
        "name": "borderlands: the pre-sequel",
        "image": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        "released": "2014-10-13",
        "rating": 3.55,
        "platforms": [
            "PlayStation 3",
            "Xbox 360",
            "PlayStation 4",
            "Nintendo Switch",
            "PC",
            "Linux",
            "Android",
            "macOS"
        ],
        "genres": [
            "Action",
            "Shooter",
            "RPG"
        ]
        },
        {
        "id": 3017,
        "name": "just cause 3",
        "image": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
        "released": "2015-11-30",
        "rating": 3.37,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 108,
        "name": "mortal kombat x",
        "image": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg",
        "released": "2015-04-07",
        "rating": 3.86,
        "platforms": [
            "PC",
            "Xbox One",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "Fighting"
        ]
        },
        {
        "id": 864,
        "name": "dishonored 2",
        "image": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        "released": "2016-11-10",
        "rating": 4.26,
        "platforms": [
            "Xbox One",
            "PC",
            "PlayStation 4"
        ],
        "genres": [
            "Action",
            "RPG"
        ]
        },
        {
        "id": 9882,
        "name": "don't starve together",
        "image": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg",
        "released": "2016-04-21",
        "rating": 3.78,
        "platforms": [
            "Linux",
            "Xbox One",
            "PlayStation 4",
            "macOS",
            "PC"
        ],
        "genres": [
            "Action",
            "Simulation",
            "Indie"
        ]
        },
        {
        "id": 613,
        "name": "bastion",
        "image": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg",
        "released": "2011-07-20",
        "rating": 4.16,
        "platforms": [
            "PlayStation 4",
            "PS Vita",
            "Xbox One",
            "PC",
            "iOS",
            "Linux",
            "Nintendo Switch",
            "Xbox 360",
            "macOS"
        ],
        "genres": [
            "Action",
            "Adventure",
            "RPG",
            "Indie"
        ]
        },
        {
        "id": 3254,
        "name": "journey",
        "image": "https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg",
        "released": "2012-03-13",
        "rating": 4.33,
        "platforms": [
            "PC",
            "iOS",
            "PlayStation 4",
            "PlayStation 3"
        ],
        "genres": [
            "Adventure",
            "Family",
            "Indie"
        ]
        },
        {
        "id": 11934,
        "name": "counter-strike: source",
        "image": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
        "released": "2004-11-01",
        "rating": 3.73,
        "platforms": [
            "Linux",
            "macOS",
            "PC"
        ],
        "genres": [
            "Shooter"
        ]
        },
        {
        "id": 4513,
        "name": "just cause 2",
        "image": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg",
        "released": "2010-03-23",
        "rating": 3.61,
        "platforms": [
            "Xbox 360",
            "PlayStation 3",
            "Xbox One",
            "PC"
        ],
        "genres": [
            "Action",
            "Shooter"
        ]
        },
        {
        "id": 3191,
        "name": "mad max",
        "image": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
        "released": "2015-08-31",
        "rating": 3.76,
        "platforms": [
            "Xbox One",
            "PlayStation 4",
            "Xbox 360",
            "Linux",
            "macOS",
            "PC"
        ],
        "genres": [
            "Action",
            "Adventure"
        ]
        },
    ]
    return data
}catch(error){
    console.log(error)
}
}
module.exports = {
    API,
};
  