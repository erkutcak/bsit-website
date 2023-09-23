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
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://arabicacanada.coffee/'
    },
    {
        id: 2,
        name: 'Dark Horse Espresso Bar',
        rating: '4.1',
        location: 'https://goo.gl/maps/nq49qBp9Frur2Xez7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/dark-horse-espresso-bar-spadina/58IQmiRPTEmMjfnyeYtAGw?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION',
        doordash: '',
        website: 'https://www.darkhorseespresso.com/'
    },
    {
        id: 3,
        name: 'Rooster Coffee House',
        rating: '4.5',
        location: 'https://goo.gl/maps/Nw6h3a11ukJ4roAS6',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://roostercoffeehouse.com/'
    },
    {
        id: 4,
        name: 'Jimmy\'s Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/S1rTfQ85Bm3U8RVB7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.jimmyscoffee.ca/'
    },
    {
        id: 5,
        name: 'Shy Coffee Co.',
        rating: '4.5',
        location: 'https://goo.gl/maps/nB61PMaWqCYdXKta8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.instagram.com/shycoffeeco'
    },
    {
        id: 6,
        name: 'Pilot Coffee Roasters',
        rating: '4.3',
        location: 'https://goo.gl/maps/nHH8zK2MiR6JudKPA',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.pilotcoffeeroasters.com/'
    },
    {
        id: 7,
        name: 'NEO Coffee Bar',
        rating: '4.5',
        location: 'https://goo.gl/maps/wSRohc1RUwd6t1NS7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/neo-coffee-bar-frederick-x-king/reokXb-zS0aYnA7dTqJ6ag?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: '',
        website: 'http://www.neocoffeebar.com/'
    },
    {
        id: 8,
        name: 'Found Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/76BH5kybBHD7gxPu7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.found.coffee/'
    },
    {
        id: 9,
        name: 'Fahrenheit Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/sDPv4YVMnuKJh55DA',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/fahrenheit-coffee-toronto-306075/?event_type=autocomplete&pickup=false',
        website: 'http://www.fahrenheitcoffee.com/'
    },
    {
        id: 10,
        name: 'Forget Me Not Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/ez63DSQAgvZJ9LUu5',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/forget-me-not-cafe-adelaide/EvfD2wwUTGm2j6RtivXYTQ?diningMode=DELIVERY',
        doordash: '',
        website: 'https://www.forgetmenotcoffee.ca/'
    }
]

const pizzas = [
    {
        id: 1,
        name: 'Pizzeria Badiali',
        rating: '4.7',
        location: 'https://goo.gl/maps/AYfA8wbwZpFLN9CdA',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://pizzeriabadiali.com/'
    },
    {
        id: 2,
        name: 'North of Brooklyn Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/BcyFZ69YMkxw2hwt9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/north-of-brooklyn-pizzeria-the-village/G0uT8txjSRu4DL2DPWnsng?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/en-CA/store/north-of-brooklyn-pizzeria-toronto-442764/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5Ijoibm9ydGggb2YgYnJvb2tseW4iLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoibm9ydGggYnJvb2tseW4iLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzFdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=false',
        website: 'https://www.northofbrooklyn.com/'
    },
    {
        id: 3,
        name: 'Descendant Detroit Style Pizza',
        rating: '4.7',
        location: 'https://goo.gl/maps/qskLurwGat6NE2Mz7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/descendant-detroit-style-pizza/bfKXcwJWTxufS__c5E_q8w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'https://descendantdsp.com/'
    },
    {
        id: 4,
        name: 'The Fourth Man in the Fire Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/CZ3rcJPBZKCKXsWn9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/the-fourth-man-in-the-fire/8IWEEz6gRluC_Uyjyo2w_A?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/fourth-man-in-the-fire-toronto-725968/?utm_campaign=gpa',
        website: 'https://thefourthmaninthefirepizzeria.com/'
    },
    {
        id: 5,
        name: 'Pizzeria Libretto',
        rating: '4.5',
        location: 'https://goo.gl/maps/V1KhkdAKSWXf3thU6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/pizzeria-libretto-danforth/UDo2yaUVQam2laq7j78S7w?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/en-CA/store/pizzeria-libretto-toronto-542372/?event_type=autocomplete&pickup=false',
        website: 'https://www.pizzerialibretto.com/'
    },
    {
        id: 6,
        name: 'Maker Pizza',
        rating: '4.3',
        location: 'https://goo.gl/maps/KCFzEak7VkWkTPf5A',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/maker-pizza-cameron/Y9bIrcEgS6a0MmXdDFjrug?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'https://www.makerpizza.com/'
    },
    {
        id: 7,
        name: 'Blaze Pizza',
        rating: '4.5',
        location: 'https://goo.gl/maps/kJFerbs165JvnvcC7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/blaze-pizza-10-dundas-st/GdyJIdmOVty0EAc_XAdTVA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/blaze-pizza-toronto-23046284/?utm_campaign=gpa',
        website: 'https://www.blazepizza.com/'
    },
    {
        id: 8,
        name: 'Fresca Pizza and Pasta',
        rating: '4.6',
        location: 'https://goo.gl/maps/vfTLRD4d7ATQSYTk6',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/fresca-pizza-toronto-52392/?utm_campaign=gpa',
        website: 'https://www.frescapizzapasta.com/'
    },
    {
        id: 9,
        name: 'Bitondo Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/GzrQs1nUNtgKph9W8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/bitondo-pizzeria/zJKhSH18Truhm1aroP5eng?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/bitondo\'s-pizzeria-toronto-52334/?utm_campaign=gpa',
        website: 'https://bitondo-pizzeria.business.site/'
    },
    {
        id: 10,
        name: 'Burattino Brick Oven Pizza',
        rating: '4.1',
        location: 'https://goo.gl/maps/58c5gQ7m6Zt3otMw8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burattino-pizza/1DzTDHMWQC6m0aR0EK-nEA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/burattino-brick-oven-pizza-inc-toronto-1882594/?utm_campaign=gpa',
        website: 'https://www.burattinopizza.ca/'
    }
]

const burgers = [
    {
        id: 1,
        name: 'Five Guys',
        rating: '4.3',
        location: 'https://goo.gl/maps/fxwCRSqJjGHF5HWX7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.fiveguys.ca/'
    },
    {
        id: 2,
        name: 'The Burger\'s Priest',
        rating: '4.3',
        location: 'https://goo.gl/maps/E8Zn2CajtghCbtgM9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burgers-priest-adelaide/N64J3IU2Qf68YPW71WhqCA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/the-burger\'s-priest-toronto-50983/?utm_campaign=gpa',
        website: 'https://www.theburgerspriest.com/'
    },
    {
        id: 3,
        name: 'Chick-fil-A',
        rating: '4.3',
        location: 'https://goo.gl/maps/6uTPPkHZBXjaM1aj6',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/chick-fil-a%C2%AE-toronto-916282/?utm_campaign=gpa',
        website: 'https://www.chick-fil-a.ca/'
    },
    {
        id: 4,
        name: 'Rudy',
        rating: '4.2',
        location: 'https://goo.gl/maps/yLkY6xgo6NxKK3Tm8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/rudy-college/vcmRVZ9WSkebaY52xWXQ4g?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://www.rudyresto.com/'
    },
    {
        id: 5,
        name: 'Happy Burger',
        rating: '4.5',
        location: 'https://goo.gl/maps/UkLGxS54KDBfkNiN6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/happy-burger-yonge-st/kaU-zJdIV_OfZ3Tw1P5kPQ?diningMode=PICKUP',
        doordash: 'https://www.doordash.com/en-CA/store/happy-burger-toronto-1138759/?utm_campaign=gpa',
        website: 'http://happyburger.ca/'
    },
    {
        id: 6,
        name: 'The Burgernator',
        rating: '4.4',
        location: 'https://goo.gl/maps/g4gih4zrfRuzqCQHA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/the-burgernator/c7mmzM46TFGHVwOqYIVh5A?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/the-burgernator-toronto-30233/?utm_campaign=gpa',
        website: 'http://www.theburgernator.com/'
    },
    {
        id: 7,
        name: 'Cabano\'s Cheeseburgers',
        rating: '4.6',
        location: 'https://goo.gl/maps/sf2GppSkxGrrVe727',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/cabanos-cheeseburgers-downtown/oQRRMhOtTI69ihriwJsJBQ?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/cabano\'s-cheeseburgers-toronto-23611035/?utm_campaign=gpa',
        website: 'http://www.cabanos.ca/'
    },
    {
        id: 8,
        name: 'Burger Drops',
        rating: '4.7',
        location: 'https://goo.gl/maps/qZjMoCphRx2B3e5v8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burger-drops/kxTMAMGuRHSKKgAkSwTXRA?diningMode=PICKUP&ps=1',
        doordash: 'https://www.doordash.com/en-CA/store/burger-drops-toronto-1743024/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiYnVyZ2VyIGRyb3BzIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6ImJ1cmdlciBkcm9wIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxXSwiaXNfc2libGluZyI6ZmFsc2UsImZvcmNlX3N0b3JlX2F2YWlsYWJpbGl0eV92MiI6ZmFsc2UsImJ1bmRsZV9nbG9iYWxfc2VhcmNoX2NvbnRleHQiOm51bGx9&pickup=false',
        website: 'http://www.burgerdrops.com/'
    },
    {
        id: 9,
        name: 'Ozzy\'s Burgers Toronto',
        rating: '4.5',
        location: 'https://goo.gl/maps/uibVzC3EvfpvJTYbA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/ozzys-burgers/DbBXx_DbRpCYQm8H9PFcHw?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/ozzy\'s-burgers-toronto-314607/?utm_campaign=gpa',
        website: 'https://www.facebook.com/ozzysburgers/'
    },
    {
        id: 10,
        name: 'Top Gun Burger',
        rating: '4.4',
        location: 'https://goo.gl/maps/BnQrgAMBzupjyayU78',
        delivery: true,
        ubereats: 'https://www.ubereats.com/store/top-gun-burgers-bloor-st/6wTfrfetXTKoZgqNA7CczQ?diningMode=PICKUP',
        doordash: 'https://www.doordash.com/en-CA/store/top-gun-steak-&-burgers-toronto-858078/?utm_campaign=gpa',
        website: 'http://topgunburgerto.com/'
    }
]

const bars = [
    {
        id: 1,
        name: 'Bar Raval',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/bY7H15zgWviprn1D9',
        reservation: false,
        booking: '',
        website: 'https://www.thisisbarraval.com'
    },
    {
        id: 2,
        name: 'Bar Poet',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/Q6AqCEMJmNeAF5y27',
        reservation: true,
        booking: 'https://resy.com/cities/tor/bar-poet?date=2023-09-23&seats=2',
        website: 'https://www.barpoet.com'
    },
    {
        id: 3,
        name: 'BarChef',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/1mpjJkYb8njbr3X97',
        reservation: true,
        booking: 'https://www.opentable.ca/r/barchef-toronto?ref=16423',
        website: 'http://www.barchef.com'
    },
    {
        id: 4,
        name: 'CLOCKWORK Champagne & Cocktails',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/8zXHsLkajtgChnEm8',
        reservation: true,
        booking: 'https://www.opentable.ca/r/clockwork-toronto?ref=16423',
        website: 'http://www.clockworktoronto.com'
    },
    {
        id: 5,
        name: 'Mother',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/Cwwy1yTGFS1f2KXs7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/mother-cocktail-bar-toronto?ref=16423',
        website: 'http://www.motherdrinks.co'
    },
    {
        id: 6,
        name: 'Melrose On Adelaide',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/p77QYtkjsnT3R8vQ9',
        reservation: true,
        booking: 'https://www.melroseonadelaide.com/reserve',
        website: 'http://www.melroseonadelaide.com'
    },
    {
        id: 7,
        name: 'Cocktail Bar',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/UCiU9dvcAQ6cuFDf9',
        reservation: false,
        booking: '',
        website: 'http://hoofcocktailbar.com'
    },
    {
        id: 8,
        name: 'Bar Pompette',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/3zUdEWdep1o2Q9tH7',
        reservation: false,
        booking: '',
        website: 'https://www.pompette.ca/barpompette'
    },
    {
        id: 9,
        name: 'PREQUEL & CO. Apothecary',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/rHAPLvPXYdbeLppB7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/prequel-and-co-apothecary-toronto?ref=16423',
        website: 'http://www.barprequel.com/'
    },
    {
        id: 10,
        name: 'Civil Liberties',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/ss8DsW9cpgn9bTvGA',
        reservation: false,
        booking: '',
        website: 'http://www.civillibertiesbar.com/'
    }
]

const bakeries = [
    {
        id: 1,
        name: 'Forno Cultura',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/oj1H7UTRq9bA58Hg7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.fornocultura.com/'
    },
    {
        id: 2,
        name: 'Aux Merveilleux de Fred',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/146nfWY3EPRxYLyi8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.marvelousbyfred.ca/'
    },
    {
        id: 3,
        name: 'Roselle Desserts',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/9bA918fbv9GesqJJ9',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.roselleto.com/'
    },
    {
        id: 4,
        name: 'Sud Forno',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/LNKyWC1DqkqryK756',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/sud-forno/F-pDkgmAQx2C8gAk_zmUGQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/sud-forno-toronto-26637/',
        website: 'https://www.terroni.com/locations/sud-forno-queen'
    },
    {
        id: 5,
        name: 'Bricolage Bakery',
        rating: '5.0',
        location: 'https://maps.app.goo.gl/c86TUFN46uNTrXp47',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.instagram.com/bricolage_bakery/?hl=en'
    },
    {
        id: 6,
        name: 'COBS Bread',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/AsyqjfU6UCQ4wavY6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/cobs-bread-the-beach/p9lhiIqKQYqZOv9nCJEpMw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/cobs-bread-toronto-1586186/?event_type=autocomplete&pickup=false',
        website: 'https://www.cobsbread.com/'
    },
    {
        id: 7,
        name: 'Blackbird Baking Co.',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/u2ZcPaREyxgVciXY8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://blackbirdbakingco.com/'
    },
    {
        id: 8,
        name: '\'Le Beau\' Croissanterie',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/qNxqgBn5dUHrkRQ1A',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.lebeaulab.com/'
    },
    {
        id: 9,
        name: 'Le Génie Bakery & Espresso',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/prrbS2UuKwMpPZeLA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/le-genie-bakery-%26-espresso-yonge-%26-gerrard/De5HMZf-RLmgjwESqo1Fgg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&ps=1&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/le-genie-bakery-&-espresso-toronto-24700729',
        website: 'https://le-genie.ca/'
    },
    {
        id: 10,
        name: 'Nugateau Patisserie',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/Qea7mbn6g66ZWoan6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/nugateau/P_0zccUFTo673bG1xAMp4g?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/nugateau-patisserie-toronto-314538/?utm_campaign=gpa',
        website: 'http://www.nugateau.com'
    },
]

export { italians, coffees, pizzas, burgers, bars, bakeries };