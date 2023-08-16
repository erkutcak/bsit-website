const italians = [
    {
        id: 1,
        name: 'Sugo',
        rating: '4.7',
        location: 'https://goo.gl/maps/miCqgVCPDKRvsgpr7',
        reservation: false,
        booking: '',
        website: 'http://sugotoronto.com'
    },
    {
        id: 2,
        name: 'Enoteca Sociale',
        rating: '4.5',
        location: 'https://goo.gl/maps/pspzBWrinEvbxqqZ9',
        reservation: true,
        booking: 'https://www.opentable.ca/enoteca-sociale?ref=16423',
        website: 'https://sociale.ca'
    },
    {
        id: 3,
        name: 'Famiglia Baldassarre',
        rating: '4.7',
        location: 'https://goo.gl/maps/fm46oPQiWvkSNZvA9',
        reservation: false,
        booking: '',
        website: 'http://famigliabaldassarre.com'
    },
    {
        id: 4,
        name: 'Viaggio',
        rating: '4.6',
        location: 'https://goo.gl/maps/fB3LtPH4EM2vsFJB7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/viaggio-toronto?ref=16423',
        website: 'http://viaggiorestaurant.ca/'
    },
    {
        id: 5,
        name: 'Gusto 501',
        rating: '4.4',
        location: 'https://goo.gl/maps/ePgCnet3L79oiP3EA',
        reservation: true,
        booking: 'https://www.opentable.ca/r/gusto-501-toronto?ref=16423',
        website: 'https://gusto501.com/'
    },
    {
        id: 6,
        name: 'Don Alfonso 1890',
        rating: '4.5',
        location: 'https://goo.gl/maps/ZSb5Nrwm5YVxywme9',
        reservation: true,
        booking: 'https://www.opentable.ca/r/don-alfonso-1890-toronto?ref=16423',
        website: 'https://www.donalfonsotoronto.com/'
    },
    {
        id: 7,
        name: 'Eataly',
        rating: '4.1',
        location: 'https://goo.gl/maps/ss6g7R9RQkPBWvMGA',
        reservation: true,
        booking: 'https://www.opentable.ca/r/la-pizza-and-la-pasta-eataly-toronto?ref=16423',
        website: 'https://eataly.ca'
    },
    {
        id: 8,
        name: 'Piano Piano',
        rating: '4.4',
        location: 'https://goo.gl/maps/bzgS2PfZ1HP4LDBL7',
        reservation: true,
        booking: 'https://www.pianopianotherestaurant.com/reservations/',
        website: 'https://www.pianopianotherestaurant.com/'
    },
    {
        id: 9,
        name: 'Pizzeria Libretto',
        rating: '4.5',
        location: 'https://goo.gl/maps/V1KhkdAKSWXf3thU6',
        reservation: false,
        booking: '',
        website: 'https://www.pizzerialibretto.com/'
    },
    {
        id: 10,
        name: 'The Old Spaghetti Factory',
        rating: '4.3',
        location: 'https://goo.gl/maps/uir6UuVNk28U1pYr6',
        reservation: true,
        booking: 'https://www.tbdine.com/book/restaurant/the-old-spaghetti-factory?idApp=2016&language=en',
        website: 'https://oldspaghettifactory.ca/'
    }
]

const coffees = [
    {
        id: 1,
        name: '% Arabica',
        rating: '4.1',
        location: 'https://goo.gl/maps/DmqWHk32CTtoRWW97',
        reservation: false,
        booking: '',
        website: 'https://arabicacanada.coffee/'
    },
    {
        id: 2,
        name: 'Dark Horse Espresso Bar',
        rating: '4.1',
        location: 'https://goo.gl/maps/nq49qBp9Frur2Xez7',
        reservation: false,
        booking: '',
        website: 'https://www.darkhorseespresso.com/'
    },
    {
        id: 3,
        name: 'Rooster Coffee House',
        rating: '4.5',
        location: 'https://goo.gl/maps/Nw6h3a11ukJ4roAS6',
        reservation: false,
        booking: '',
        website: 'http://roostercoffeehouse.com/'
    },
    {
        id: 4,
        name: 'Jimmy\'s Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/S1rTfQ85Bm3U8RVB7',
        reservation: false,
        booking: '',
        website: 'http://www.jimmyscoffee.ca/'
    },
    {
        id: 5,
        name: 'Shy Coffee Co.',
        rating: '4.5',
        location: 'https://goo.gl/maps/nB61PMaWqCYdXKta8',
        reservation: false,
        booking: '',
        website: 'https://www.instagram.com/shycoffeeco'
    },
    {
        id: 6,
        name: 'Pilot Coffee Roasters',
        rating: '4.3',
        location: 'https://goo.gl/maps/nHH8zK2MiR6JudKPA',
        reservation: false,
        booking: '',
        website: 'https://www.pilotcoffeeroasters.com/'
    },
    {
        id: 7,
        name: 'NEO Coffee Bar',
        rating: '4.5',
        location: 'https://goo.gl/maps/wSRohc1RUwd6t1NS7',
        reservation: false,
        booking: '',
        website: 'http://www.neocoffeebar.com/'
    },
    {
        id: 8,
        name: 'Found Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/76BH5kybBHD7gxPu7',
        reservation: false,
        booking: '',
        website: 'https://www.found.coffee/'
    },
    {
        id: 9,
        name: 'Fahrenheit Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/sDPv4YVMnuKJh55DA',
        reservation: false,
        booking: '',
        website: 'http://www.fahrenheitcoffee.com/'
    },
    {
        id: 10,
        name: 'Forget Me Not Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/ez63DSQAgvZJ9LUu5',
        reservation: false,
        booking: '',
        website: 'https://www.forgetmenotcoffee.ca/'
    }
]

const pizzas = [
    {
        id: 1,
        name: 'Pizzeria Badiali',
        rating: '4.7',
        location: 'https://goo.gl/maps/AYfA8wbwZpFLN9CdA',
        reservation: false,
        booking: '',
        website: 'https://pizzeriabadiali.com/'
    },
    {
        id: 2,
        name: 'North of Brooklyn Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/BcyFZ69YMkxw2hwt9',
        reservation: false,
        booking: '',
        website: 'https://www.northofbrooklyn.com/'
    },
    {
        id: 3,
        name: 'Descendant Detroit Style Pizza',
        rating: '4.7',
        location: 'https://goo.gl/maps/qskLurwGat6NE2Mz7',
        reservation: false,
        booking: '',
        website: 'https://descendantdsp.com/'
    },
    {
        id: 4,
        name: 'The Fourth Man in the Fire Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/CZ3rcJPBZKCKXsWn9',
        reservation: false,
        booking: '',
        website: 'https://thefourthmaninthefirepizzeria.com/'
    },
    {
        id: 5,
        name: 'Pizzeria Libretto',
        rating: '4.5',
        location: 'https://goo.gl/maps/V1KhkdAKSWXf3thU6',
        reservation: false,
        booking: '',
        website: 'https://www.pizzerialibretto.com/'
    },
    {
        id: 6,
        name: 'Maker Pizza',
        rating: '4.3',
        location: 'https://goo.gl/maps/KCFzEak7VkWkTPf5A',
        reservation: false,
        booking: '',
        website: 'https://www.makerpizza.com/'
    },
    {
        id: 7,
        name: 'Blaze Pizza',
        rating: '4.5',
        location: 'https://goo.gl/maps/kJFerbs165JvnvcC7',
        reservation: false,
        booking: '',
        website: 'https://www.blazepizza.com/'
    },
    {
        id: 8,
        name: 'Fresca Pizza and Pasta',
        rating: '4.6',
        location: 'https://goo.gl/maps/vfTLRD4d7ATQSYTk6',
        reservation: false,
        booking: '',
        website: 'https://www.frescapizzapasta.com/'
    },
    {
        id: 9,
        name: 'Bitondo Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/GzrQs1nUNtgKph9W8',
        reservation: false,
        booking: '',
        website: 'https://bitondo-pizzeria.business.site/'
    },
    {
        id: 10,
        name: 'Burattino Brick Oven Pizza',
        rating: '4.1',
        location: 'https://goo.gl/maps/58c5gQ7m6Zt3otMw8',
        reservation: false,
        booking: '',
        website: 'https://www.burattinopizza.ca/'
    }
]

const burgers = [
    {
        id: 1,
        name: 'Five Guys',
        rating: '4.3',
        location: 'https://goo.gl/maps/fxwCRSqJjGHF5HWX7',
        reservation: false,
        booking: '',
        website: 'https://www.fiveguys.ca/'
    },
    {
        id: 2,
        name: 'The Burger\'s Priest',
        rating: '4.3',
        location: 'https://goo.gl/maps/E8Zn2CajtghCbtgM9',
        reservation: false,
        booking: '',
        website: 'https://www.theburgerspriest.com/'
    },
    {
        id: 3,
        name: 'Chick-fil-A',
        rating: '4.3',
        location: 'https://goo.gl/maps/6uTPPkHZBXjaM1aj6',
        reservation: false,
        booking: '',
        website: 'https://www.chick-fil-a.ca/'
    },
    {
        id: 4,
        name: 'Rudy',
        rating: '4.2',
        location: 'https://goo.gl/maps/yLkY6xgo6NxKK3Tm8',
        reservation: false,
        booking: '',
        website: 'http://www.rudyresto.com/'
    },
    {
        id: 5,
        name: 'Happy Burger',
        rating: '4.5',
        location: 'https://goo.gl/maps/UkLGxS54KDBfkNiN6',
        reservation: false,
        booking: '',
        website: 'http://happyburger.ca/'
    },
    {
        id: 6,
        name: 'The Burgernator',
        rating: '4.4',
        location: 'https://goo.gl/maps/g4gih4zrfRuzqCQHA',
        reservation: false,
        booking: '',
        website: 'http://www.theburgernator.com/'
    },
    {
        id: 7,
        name: 'Cabano\'s Cheeseburgers',
        rating: '4.6',
        location: 'https://goo.gl/maps/sf2GppSkxGrrVe727',
        reservation: false,
        booking: '',
        website: 'http://www.cabanos.ca/'
    },
    {
        id: 8,
        name: 'Burger Drops',
        rating: '4.7',
        location: 'https://goo.gl/maps/qZjMoCphRx2B3e5v8',
        reservation: false,
        booking: '',
        website: 'http://www.burgerdrops.com/'
    },
    {
        id: 9,
        name: 'Ozzy\'s Burgers Toronto',
        rating: '4.5',
        location: 'https://goo.gl/maps/uibVzC3EvfpvJTYbA',
        reservation: false,
        booking: '',
        website: 'https://www.facebook.com/ozzysburgers/'
    },
    {
        id: 10,
        name: 'Top Gun Burger',
        rating: '4.4',
        location: 'https://goo.gl/maps/BnQrgAMBzupjyayU78',
        reservation: false,
        booking: '',
        website: 'http://topgunburgerto.com/'
    }
]

export { italians, coffees, pizzas, burgers };