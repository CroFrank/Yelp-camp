const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities')
const { titles } = require('./titles')

main().catch(err => console.log('err'));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    console.log('Mongo is ok')
};

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < titles.length; i++) {
        const randomPrice = Math.floor(Math.random() * 1000) + 20;
        const c = new Campground
            ({
                author: '64a126af6140d5c4e8b476e0',
                title: `${titles[i][0].toUpperCase() + titles[i].slice(1)} Camp`,
                location: `${cities[i].city}`,
                description: 'some gibberish',
                images: [
                    {
                        url: "https://images.unsplash.com/photo-1586890662737-9f107825e147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                        filename: "YelpCamp/pyle8dpigksscemsaknd"
                    },
                ],
                price: randomPrice
            })
        await c.save()
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close()
    })

