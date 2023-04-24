const database = {
    fish: [
        {
            name:"Bubbles",
            species:"Neon Tetra",
            diet:"frozen foods",
            length: 1.5,
            image:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWNOc2bsREcheRoWtsRnoymtR6nS55tl2Ho8aIoAjEG8YiEYmC7hFxefXgdJBrg0jv_DM6PM4U5jxtMY8",
            location:"Amazon River basin"
        },
        {
            name:"Meowth",
            species:"Cory Catfish",
            diet:"sinking pellets",
            length: 2.5,
            image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQBj8Py3m3tu6s7wFE44jBu4A7peJqdZQt8jXaCYfilAiTH2WuQIWxQ9CJNgBCDhiCZTvAYZy-0LQ-u6_qzGXPzLhPsgxyupj0UOAZJ1q7q",
            location:"Amazon River basin"
        },
        {
            name:"Yoda",
            species:"Dwarf Gourami",
            diet:"flake or pellet food",
            length: 3,
            image:"https://cdn.shopify.com/s/files/1/0311/3149/articles/featured_image_-_dwarf_gourami.jpg?v=1665696720",
            location:"Ganges River Basin"
        },
        {
            name:"Harley",
            species:"Harlequin Rasbora",
            diet:"flake or pellet food",
            length: 2,
            image:"https://www.thesprucepets.com/thmb/GiVvYHrxo8dakRBRyQSRDf978q0=/3000x0/filters:no_upscale():strip_icc()/harlequin-rasbora-1378462-hero-1e8f5449ae8c4484a99ece658ea14843.jpg",
            location:"Mekong basin"
        },
        {
            name:"Oscar",
            species:"Oscar Fish",
            diet:"small fish, pellets",
            length: 12,
            image:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTD9MjwF0GxQboiiduGv_vnpCRy6iJBsc7hYlxfObdoijxjZjH5GyBi5qUP3zqi3U9WgcU9m7O5JflCMCE",
            location:"Amazon River, South America"
        },
        {
            name:"Zebra",
            species:"Zebra Danio",
            diet:"flake food",
            length: 2,
            image:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR7Y76zEKRHYMhzzza6C9oTNnuJdUQ18dWipbfBT6b2GzIQT6LnjBgH_6PK2mU3QqKQaTakKB1DklhK9ms",
            location:"Ganges River, India"
        },
        {
            name:"Griphook",
            species:"Goblin Shark",
            diet:"squid, fish",
            length: 10,
            image:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQMEhPkaDcl6EUQZtc5Y_XdaCEwJ-Z-4Ai5hp_jWSh7-0E7zF0-VR0WB3SfyI1FX0Xs1YnvLH7r0dJp9pU",
            location:"Deep waters of the Atlantic, Indian, and Pacific Oceans"
        }
    ],

    tips: [
        {description: " Feed your fish once a day"
        },
        {description: " Keep the water clean by changing it regularly",
        },
        {description: " Ensure that the temperature of the water is appropriate for your fish",
        },
        {description: " Monitor your fish for signs of illness or distress"
        },
        {description: "Avoid overcrowding your aquarium by ensuring that there is enough space for your fish to swim freely"
        },
        {description: "Test the water regularly for levels of ammonia, nitrite, and nitrate to ensure a healthy and safe environment for your fish"},
        {description: "Maintain proper lighting in your aquarium to ensure the health and growth of your plants and fish"}
    ],

    locations: [
        {
            place: "Lake Victoria, Africa",
            description: "Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world. It is home to hundreds of fish species, including tilapia and Nile perch, which are important sources of food and income for people living in the region."
        },
        {
            place: "Mekong River, Southeast Asia",
            description: "The Mekong River is one of the longest rivers in Asia and is an important source of fish for millions of people living in Southeast Asia. The river is home to more than 1,000 fish species, including catfish, carp, and snakehead fish."
        },
        {
            place: "Gulf of Mexico, USA",
            description: "The Gulf of Mexico is a large body of water bordered by the southern United States, Mexico, and Cuba. The Gulf is known for its rich fishery, which includes shrimp, oysters, and many species of fish such as red snapper, tuna, and grouper."
        },
        {
            place: "Barents Sea, Europe",
            description: "The Barents Sea is located in the Arctic Ocean and is an important fishing ground for many European countries, including Norway and Russia. The sea is home to cod, haddock, and capelin, among other species."
        },
        {
            place: "Lake Titicaca, South America",
            description: "Lake Titicaca is the largest lake in South America and is located on the border of Peru and Bolivia. The lake is home to several species of fish, including trout, catfish, and silverside, which are important sources of food for local communities."
        },
        {
            place: "Great Barrier Reef, Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system and is located off the coast of Australia. The reef is home to thousands of fish species, including clownfish, coral trout, and angelfish, which are popular with recreational fishermen and seafood enthusiasts alike."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}