const italians = [
    {
        id: 1,
        name: 'Sugo',
        rating: '4.7',
        location: 'https://goo.gl/maps/miCqgVCPDKRvsgpr7',
        reservation: false,
        booking: '',
        website: 'http://sugotoronto.com',
        background: 'italians/sugo.png'
    },
    {
        id: 2,
        name: 'Enoteca Sociale',
        rating: '4.5',
        location: 'https://goo.gl/maps/pspzBWrinEvbxqqZ9',
        reservation: true,
        booking: 'https://www.opentable.ca/enoteca-sociale?ref=16423',
        website: 'https://sociale.ca',
        background: 'italians/enoteca.png'
    },
    {
        id: 3,
        name: 'Famiglia Baldassarre',
        rating: '4.7',
        location: 'https://goo.gl/maps/fm46oPQiWvkSNZvA9',
        reservation: false,
        booking: '',
        website: 'http://famigliabaldassarre.com',
        background: 'italians/famiglia.png'
    },
    {
        id: 4,
        name: 'Viaggio',
        rating: '4.6',
        location: 'https://goo.gl/maps/fB3LtPH4EM2vsFJB7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/viaggio-toronto?ref=16423',
        website: 'http://viaggiorestaurant.ca/',
        background: 'italians/viaggio.png'
    },
    {
        id: 5,
        name: 'Gusto 501',
        rating: '4.4',
        location: 'https://goo.gl/maps/ePgCnet3L79oiP3EA',
        reservation: true,
        booking: 'https://www.opentable.ca/r/gusto-501-toronto?ref=16423',
        website: 'https://gusto501.com/',
        background: 'italians/gusto501.png'
    },
    {
        id: 6,
        name: 'Don Alfonso 1890',
        rating: '4.5',
        location: 'https://goo.gl/maps/ZSb5Nrwm5YVxywme9',
        reservation: true,
        booking: 'https://www.opentable.ca/r/don-alfonso-1890-toronto?ref=16423',
        website: 'https://www.donalfonsotoronto.com/',
        background: 'italians/donalfonso.png'
    },
    {
        id: 7,
        name: 'Eataly',
        rating: '4.1',
        location: 'https://goo.gl/maps/ss6g7R9RQkPBWvMGA',
        reservation: true,
        booking: 'https://www.opentable.ca/r/la-pizza-and-la-pasta-eataly-toronto?ref=16423',
        website: 'https://eataly.ca',
        background: 'italians/eataly.png'
    },
    {
        id: 8,
        name: 'Piano Piano',
        rating: '4.4',
        location: 'https://goo.gl/maps/bzgS2PfZ1HP4LDBL7',
        reservation: true,
        booking: 'https://www.pianopianotherestaurant.com/reservations/',
        website: 'https://www.pianopianotherestaurant.com/',
        background: 'italians/piano.png'
    },
    {
        id: 9,
        name: 'Pizzeria Libretto',
        rating: '4.5',
        location: 'https://goo.gl/maps/V1KhkdAKSWXf3thU6',
        reservation: false,
        booking: '',
        website: 'https://www.pizzerialibretto.com/',
        background: 'italians/libretto.png'
    },
    {
        id: 10,
        name: 'The Old Spaghetti Factory',
        rating: '4.3',
        location: 'https://goo.gl/maps/uir6UuVNk28U1pYr6',
        reservation: true,
        booking: 'https://www.tbdine.com/book/restaurant/the-old-spaghetti-factory?idApp=2016&language=en',
        website: 'https://oldspaghettifactory.ca/',
        background: 'italians/oldspa.png'
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
        website: 'https://arabicacanada.coffee/',
        background: 'coffees/arabica.png'
    },
    {
        id: 2,
        name: 'Dark Horse Espresso Bar',
        rating: '4.1',
        location: 'https://goo.gl/maps/nq49qBp9Frur2Xez7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/dark-horse-espresso-bar-spadina/58IQmiRPTEmMjfnyeYtAGw?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION',
        doordash: '',
        website: 'https://www.darkhorseespresso.com/',
        background:'coffees/dark.png'
    },
    {
        id: 3,
        name: 'Rooster Coffee House',
        rating: '4.5',
        location: 'https://goo.gl/maps/Nw6h3a11ukJ4roAS6',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://roostercoffeehouse.com/',
        background:'coffees/rooster.png'
    },
    {
        id: 4,
        name: 'Jimmy\'s Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/S1rTfQ85Bm3U8RVB7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.jimmyscoffee.ca/',
        background:'coffees/jimmy.png'
    },
    {
        id: 5,
        name: 'Shy Coffee Co.',
        rating: '4.5',
        location: 'https://goo.gl/maps/nB61PMaWqCYdXKta8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.instagram.com/shycoffeeco',
        background:'coffees/shy.png'
    },
    {
        id: 6,
        name: 'Pilot Coffee Roasters',
        rating: '4.3',
        location: 'https://goo.gl/maps/nHH8zK2MiR6JudKPA',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.pilotcoffeeroasters.com/',
        background:'coffees/pilot.png'
    },
    {
        id: 7,
        name: 'NEO Coffee Bar',
        rating: '4.5',
        location: 'https://goo.gl/maps/wSRohc1RUwd6t1NS7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/neo-coffee-bar-frederick-x-king/reokXb-zS0aYnA7dTqJ6ag?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: '',
        website: 'http://www.neocoffeebar.com/',
        background:'coffees/neo.png'
    },
    {
        id: 8,
        name: 'Found Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/76BH5kybBHD7gxPu7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.found.coffee/',
        background:'coffees/found.png'
    },
    {
        id: 9,
        name: 'Fahrenheit Coffee',
        rating: '4.8',
        location: 'https://goo.gl/maps/sDPv4YVMnuKJh55DA',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/fahrenheit-coffee-toronto-306075/?event_type=autocomplete&pickup=false',
        website: 'http://www.fahrenheitcoffee.com/',
        background:'coffees/fahrenheit.png'
    },
    {
        id: 10,
        name: 'Forget Me Not Coffee',
        rating: '4.5',
        location: 'https://goo.gl/maps/ez63DSQAgvZJ9LUu5',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/forget-me-not-cafe-adelaide/EvfD2wwUTGm2j6RtivXYTQ?diningMode=DELIVERY',
        doordash: '',
        website: 'https://www.forgetmenotcoffee.ca/',
        background:'coffees/forget.png'
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
        website: 'https://pizzeriabadiali.com/',
        background: 'pizzas/badiali.png'
    },
    {
        id: 2,
        name: 'North of Brooklyn Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/BcyFZ69YMkxw2hwt9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/north-of-brooklyn-pizzeria-the-village/G0uT8txjSRu4DL2DPWnsng?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/en-CA/store/north-of-brooklyn-pizzeria-toronto-442764/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5Ijoibm9ydGggb2YgYnJvb2tseW4iLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoibm9ydGggYnJvb2tseW4iLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzFdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=false',
        website: 'https://www.northofbrooklyn.com/',
        background: 'pizzas/north.png'
    },
    {
        id: 3,
        name: 'Descendant Detroit Style Pizza',
        rating: '4.7',
        location: 'https://goo.gl/maps/qskLurwGat6NE2Mz7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/descendant-detroit-style-pizza/bfKXcwJWTxufS__c5E_q8w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'https://descendantdsp.com/',
        background: 'pizzas/descendant.png'
    },
    {
        id: 4,
        name: 'The Fourth Man in the Fire Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/CZ3rcJPBZKCKXsWn9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/the-fourth-man-in-the-fire/8IWEEz6gRluC_Uyjyo2w_A?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/fourth-man-in-the-fire-toronto-725968/?utm_campaign=gpa',
        website: 'https://thefourthmaninthefirepizzeria.com/',
        background: 'pizzas/fourth.png'
    },
    {
        id: 5,
        name: 'Pizzeria Libretto',
        rating: '4.5',
        location: 'https://goo.gl/maps/V1KhkdAKSWXf3thU6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/pizzeria-libretto-danforth/UDo2yaUVQam2laq7j78S7w?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/en-CA/store/pizzeria-libretto-toronto-542372/?event_type=autocomplete&pickup=false',
        website: 'https://www.pizzerialibretto.com/',
        background: 'italians/libretto.png'
    },
    {
        id: 6,
        name: 'Maker Pizza',
        rating: '4.3',
        location: 'https://goo.gl/maps/KCFzEak7VkWkTPf5A',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/maker-pizza-cameron/Y9bIrcEgS6a0MmXdDFjrug?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'https://www.makerpizza.com/',
        background: 'pizzas/pizzamaker.png'
    },
    {
        id: 7,
        name: 'Blaze Pizza',
        rating: '4.5',
        location: 'https://goo.gl/maps/kJFerbs165JvnvcC7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/blaze-pizza-10-dundas-st/GdyJIdmOVty0EAc_XAdTVA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/blaze-pizza-toronto-23046284/?utm_campaign=gpa',
        website: 'https://www.blazepizza.com/',
        background: 'pizzas/blaze.png'
    },
    {
        id: 8,
        name: 'Fresca Pizza and Pasta',
        rating: '4.6',
        location: 'https://goo.gl/maps/vfTLRD4d7ATQSYTk6',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/fresca-pizza-toronto-52392/?utm_campaign=gpa',
        website: 'https://www.frescapizzapasta.com/',
        background: 'pizzas/fresca.png'
    },
    {
        id: 9,
        name: 'Bitondo Pizzeria',
        rating: '4.5',
        location: 'https://goo.gl/maps/GzrQs1nUNtgKph9W8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/bitondo-pizzeria/zJKhSH18Truhm1aroP5eng?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/bitondo\'s-pizzeria-toronto-52334/?utm_campaign=gpa',
        website: 'https://bitondo-pizzeria.business.site/',
        background: 'pizzas/bitondo.png'
    },
    {
        id: 10,
        name: 'Burattino Brick Oven Pizza',
        rating: '4.1',
        location: 'https://goo.gl/maps/58c5gQ7m6Zt3otMw8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burattino-pizza/1DzTDHMWQC6m0aR0EK-nEA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/burattino-brick-oven-pizza-inc-toronto-1882594/?utm_campaign=gpa',
        website: 'https://www.burattinopizza.ca/',
        background: 'pizzas/burattino.png'
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
        website: 'https://www.fiveguys.ca/',
        background: 'burgers/fiveguys.png'
    },
    {
        id: 2,
        name: 'The Burger\'s Priest',
        rating: '4.3',
        location: 'https://goo.gl/maps/E8Zn2CajtghCbtgM9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burgers-priest-adelaide/N64J3IU2Qf68YPW71WhqCA?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/the-burger\'s-priest-toronto-50983/?utm_campaign=gpa',
        website: 'https://www.theburgerspriest.com/',
        background: 'burgers/priest.png'
    },
    {
        id: 3,
        name: 'Chick-fil-A',
        rating: '4.3',
        location: 'https://goo.gl/maps/6uTPPkHZBXjaM1aj6',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/en-CA/store/chick-fil-a%C2%AE-toronto-916282/?utm_campaign=gpa',
        website: 'https://www.chick-fil-a.ca/',
        background: 'burgers/chick.png'
    },
    {
        id: 4,
        name: 'Rudy',
        rating: '4.2',
        location: 'https://goo.gl/maps/yLkY6xgo6NxKK3Tm8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/rudy-college/vcmRVZ9WSkebaY52xWXQ4g?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://www.rudyresto.com/',
        background: 'burgers/rudy.png'
    },
    {
        id: 5,
        name: 'Happy Burger',
        rating: '4.5',
        location: 'https://goo.gl/maps/UkLGxS54KDBfkNiN6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/happy-burger-yonge-st/kaU-zJdIV_OfZ3Tw1P5kPQ?diningMode=PICKUP',
        doordash: 'https://www.doordash.com/en-CA/store/happy-burger-toronto-1138759/?utm_campaign=gpa',
        website: 'http://happyburger.ca/',
        background: 'burgers/happy.png'
    },
    {
        id: 6,
        name: 'The Burgernator',
        rating: '4.4',
        location: 'https://goo.gl/maps/g4gih4zrfRuzqCQHA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/the-burgernator/c7mmzM46TFGHVwOqYIVh5A?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/the-burgernator-toronto-30233/?utm_campaign=gpa',
        website: 'http://www.theburgernator.com/',
        background: 'burgers/burgernator.png'
    },
    {
        id: 7,
        name: 'Cabano\'s Cheeseburgers',
        rating: '4.6',
        location: 'https://goo.gl/maps/sf2GppSkxGrrVe727',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/cabanos-cheeseburgers-downtown/oQRRMhOtTI69ihriwJsJBQ?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/cabano\'s-cheeseburgers-toronto-23611035/?utm_campaign=gpa',
        website: 'http://www.cabanos.ca/',
        background: 'burgers/cabano.png'
    },
    {
        id: 8,
        name: 'Burger Drops',
        rating: '4.7',
        location: 'https://goo.gl/maps/qZjMoCphRx2B3e5v8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/burger-drops/kxTMAMGuRHSKKgAkSwTXRA?diningMode=PICKUP&ps=1',
        doordash: 'https://www.doordash.com/en-CA/store/burger-drops-toronto-1743024/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiYnVyZ2VyIGRyb3BzIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6ImJ1cmdlciBkcm9wIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxXSwiaXNfc2libGluZyI6ZmFsc2UsImZvcmNlX3N0b3JlX2F2YWlsYWJpbGl0eV92MiI6ZmFsc2UsImJ1bmRsZV9nbG9iYWxfc2VhcmNoX2NvbnRleHQiOm51bGx9&pickup=false',
        website: 'http://www.burgerdrops.com/',
        background: 'burgers/drops.png'
    },
    {
        id: 9,
        name: 'Ozzy\'s Burgers Toronto',
        rating: '4.5',
        location: 'https://goo.gl/maps/uibVzC3EvfpvJTYbA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/ozzys-burgers/DbBXx_DbRpCYQm8H9PFcHw?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/en-CA/store/ozzy\'s-burgers-toronto-314607/?utm_campaign=gpa',
        website: 'https://www.facebook.com/ozzysburgers/',
        background: 'burgers/ozzys.png'
    },
    {
        id: 10,
        name: 'Top Gun Burger',
        rating: '4.4',
        location: 'https://goo.gl/maps/BnQrgAMBzupjyayU78',
        delivery: true,
        ubereats: 'https://www.ubereats.com/store/top-gun-burgers-bloor-st/6wTfrfetXTKoZgqNA7CczQ?diningMode=PICKUP',
        doordash: 'https://www.doordash.com/en-CA/store/top-gun-steak-&-burgers-toronto-858078/?utm_campaign=gpa',
        website: 'http://topgunburgerto.com/',
        background: 'burgers/topgun.png'
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
        website: 'https://www.thisisbarraval.com',
        background: 'bars/raval.png'
    },
    {
        id: 2,
        name: 'Bar Poet',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/Q6AqCEMJmNeAF5y27',
        reservation: true,
        booking: 'https://resy.com/cities/tor/bar-poet?date=2023-09-23&seats=2',
        website: 'https://www.barpoet.com',
        background: 'bars/poet.png'
    },
    {
        id: 3,
        name: 'BarChef',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/1mpjJkYb8njbr3X97',
        reservation: true,
        booking: 'https://www.opentable.ca/r/barchef-toronto?ref=16423',
        website: 'http://www.barchef.com',
        background: 'bars/barchef.png'
    },
    {
        id: 4,
        name: 'CLOCKWORK Champagne & Cocktails',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/8zXHsLkajtgChnEm8',
        reservation: true,
        booking: 'https://www.opentable.ca/r/clockwork-toronto?ref=16423',
        website: 'http://www.clockworktoronto.com',
        background: 'bars/clockwork.png'
    },
    {
        id: 5,
        name: 'Mother',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/Cwwy1yTGFS1f2KXs7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/mother-cocktail-bar-toronto?ref=16423',
        website: 'http://www.motherdrinks.co',
        background: 'bars/mothercockt.png'
    },
    {
        id: 6,
        name: 'Melrose On Adelaide',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/p77QYtkjsnT3R8vQ9',
        reservation: true,
        booking: 'https://www.melroseonadelaide.com/reserve',
        website: 'http://www.melroseonadelaide.com',
        background: 'bars/melrose.png'
    },
    {
        id: 7,
        name: 'Cocktail Bar',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/UCiU9dvcAQ6cuFDf9',
        reservation: false,
        booking: '',
        website: 'http://hoofcocktailbar.com',
        background: 'bars/cocktailbar.png'
    },
    {
        id: 8,
        name: 'Bar Pompette',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/3zUdEWdep1o2Q9tH7',
        reservation: false,
        booking: '',
        website: 'https://www.pompette.ca/barpompette',
        background: 'bars/pompette.png'
    },
    {
        id: 9,
        name: 'PREQUEL & CO. Apothecary',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/rHAPLvPXYdbeLppB7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/prequel-and-co-apothecary-toronto?ref=16423',
        website: 'http://www.barprequel.com/',
        background: 'bars/prequel.png'
    },
    {
        id: 10,
        name: 'Civil Liberties',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/ss8DsW9cpgn9bTvGA',
        reservation: false,
        booking: '',
        website: 'http://www.civillibertiesbar.com/',
        background: 'bars/liberties.png'
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
        website: 'https://www.fornocultura.com/',
        background: 'bakeries/forno.png'
    },
    {
        id: 2,
        name: 'Aux Merveilleux de Fred',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/146nfWY3EPRxYLyi8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.marvelousbyfred.ca/',
        background: 'bakeries/meirveilleux.png'
    },
    {
        id: 3,
        name: 'Roselle Desserts',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/9bA918fbv9GesqJJ9',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.roselleto.com/',
        background: 'bakeries/roselle.png'
    },
    {
        id: 4,
        name: 'Sud Forno',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/LNKyWC1DqkqryK756',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/sud-forno/F-pDkgmAQx2C8gAk_zmUGQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/sud-forno-toronto-26637/',
        website: 'https://www.terroni.com/locations/sud-forno-queen',
        background: 'bakeries/sudforno.png'
    },
    {
        id: 5,
        name: 'Bricolage Bakery',
        rating: '5.0',
        location: 'https://maps.app.goo.gl/c86TUFN46uNTrXp47',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.instagram.com/bricolage_bakery/?hl=en',
        background: 'bakeries/bricolage.png'
    },
    {
        id: 6,
        name: 'COBS Bread',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/AsyqjfU6UCQ4wavY6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/cobs-bread-the-beach/p9lhiIqKQYqZOv9nCJEpMw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/cobs-bread-toronto-1586186/?event_type=autocomplete&pickup=false',
        website: 'https://www.cobsbread.com/',
        background: 'bakeries/cobs.png'
    },
    {
        id: 7,
        name: 'Blackbird Baking Co.',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/u2ZcPaREyxgVciXY8',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://blackbirdbakingco.com/',
        background: 'bakeries/blackbird.png'
    },
    {
        id: 8,
        name: '\'Le Beau\' Croissanterie',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/qNxqgBn5dUHrkRQ1A',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.lebeaulab.com/',
        background: 'bakeries/lebeau.png'
    },
    {
        id: 9,
        name: 'Le Génie Bakery & Espresso',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/prrbS2UuKwMpPZeLA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/le-genie-bakery-%26-espresso-yonge-%26-gerrard/De5HMZf-RLmgjwESqo1Fgg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&ps=1&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/le-genie-bakery-&-espresso-toronto-24700729',
        website: 'https://le-genie.ca/',
        background: 'bakeries/legenie.png'
    },
    {
        id: 10,
        name: 'Nugateau Patisserie',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/Qea7mbn6g66ZWoan6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/nugateau/P_0zccUFTo673bG1xAMp4g?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/nugateau-patisserie-toronto-314538/?utm_campaign=gpa',
        website: 'http://www.nugateau.com',
        background: 'bakeries/nugateau.png'
    },
]

const breakfast = [
    {
        id: 1,
        name: 'White Lily Diner',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/3ZJRevRGoJdxmCVL9',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://whitelilydiner.ca/',
        background: 'breakfast/lily.png'
    },
    {
        id: 2,
        name: 'Emma\'s Country Kitchen',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/NFdY3jGd3uwAPP5H6',
        delivery: true,
        ubereats: 'https://www.emmascountrykitchen.com/online-ordering',
        doordash: 'https://www.emmascountrykitchen.com/online-ordering',
        website: 'https://www.emmascountrykitchen.com',
        background: 'breakfast/emma.png'
    },
    {
        id: 3,
        name: 'Mildred\'s Temple Kitchen',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/6CrkWJvgpFB3DqVu7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://mildreds.ca',
        background: 'breakfast/mildred.png'
    },
    {
        id: 4,
        name: 'Lady Marmalade',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/Y3eVbsMS789y6niG9',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.ladymarmalade.ca/',
        background: 'breakfast/marmalade.png'
    },
    {
        id: 5,
        name: 'Old School',
        rating: '4.0',
        location: 'https://maps.app.goo.gl/eF4Xb1hQEgYzeWNDA',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/old-school/i-wxtCKZQOOctP0pNkYX0Q?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/store/old-school-toronto-26608/?event_type=autocomplete&pickup=false',
        website: 'http://www.oldschoolyyz.com/',
        background: 'breakfast/oldschool.png'
    },
    {
        id: 6,
        name: 'Saving Grace',
        rating: '4.2',
        location: 'https://maps.app.goo.gl/y5txgjWTxi1CT3gT6',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.instagram.com/savinggraceto/',
        background: 'breakfast/grace.png'
    },
    {
        id: 7,
        name: 'Figs Breakfast Lunch',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/AXdpC54BRaJ8wwZW9',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.figsbreakfastlunch.com/',
        background: 'breakfast/figs.png'
    },
    {
        id: 8,
        name: '1 Kitchen Toronto',
        rating: '4.2',
        location: 'https://maps.app.goo.gl/SoQrTH59rwgZMydN6',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://www.1hotels.com/toronto/taste/1-kitchen',
        background: 'breakfast/onekitchen.png'
    },
    {
        id: 9,
        name: 'Sisters & Co',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/iEtzdxXgPkAwvSbM9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/sisters-%26-co/RiGgbyd6REq3EKdAQtvl8w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&ps=1&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/sisters-and-co-toronto-25147086/?utm_campaign=gpa',
        website: 'https://sistersco.ca/',
        background: 'breakfast/sisters.png'
    },
    {
        id: 10,
        name: 'Milou',
        rating: '4.2',
        location: 'https://maps.app.goo.gl/7YTQR8W31ZRw7SnR7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'https://miloutoronto.com/',
        background: 'breakfast/milou.png'
    },
]

const healthy = [
    {
        id: 1,
        name: 'PLANTA Queen',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/zJQMVseDRG12PfVE9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/planta-queen/Q1f1Ml5UQ3awzFHmSW_FYg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/planta-queen-toronto-714658/?utm_campaign=gpa',
        website: 'https://www.plantarestaurants.com/location/planta-queen-yorkville/',
        background: 'healthy/planta.png'
    },
    {
        id: 2,
        name: 'Mary Be Kitchen',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/bbzSyiHMvP6Muxcn8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/mary-be-kitchen/IeXcrvWuQTqwHxpLQS3kig?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/mary-be-kitchen-toronto-237559/?utm_campaign=gpa',
        website: 'http://www.marybekitchen.com/',
        background: 'healthy/marybe.png'
    },
    {
        id: 3,
        name: 'Fresh Kitchen + Juice Bar Eglinton',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/MkSbZFGo6xUak7W36',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/fresh-kitchen-%2B-juice-bar-on-eglinton/UAoAH3ejR4e2EDmJfZcgbA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/fresh:-kitchen-+-juice-bar-toronto-152774/?utm_campaign=gpa',
        website: 'https://www.freshkitchens.ca/en/locations/on/toronto/101-eglinton-avenue-east',
        background: 'healthy/fresh.png'
    },
    {
        id: 4,
        name: 'nutbar',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/W3wPNYGAgzLZWDcB7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/nutbar-summerhill/lV3DcuRkSuyySUUtZ7FQoQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://nutbar.co/',
        background: 'healthy/nutbar.png'
    },
    {
        id: 5,
        name: 'Kupfert & Kim',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/pmtG3qtZBKsEpEPr9',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/store/kupfert-&-kim-toronto-314306/?utm_campaign=gpa',
        website: 'http://www.kupfertandkim.com/',
        background: 'healthy/kupfert.png'
    },
    {
        id: 6,
        name: 'Basil Box',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/unAEt34k869YnxMq5',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/store/basil-box-toronto-843946/?utm_campaign=gpa',
        website: 'http://www.thebasilbox.com/',
        background: 'healthy/basil.png'
    },
    {
        id: 7,
        name: 'Imperfect Fresh Eats',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/8w97547MMK53jiih9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/imperfect-fresh-eats/WxWHfcb0RuS0rQyOBzz8VA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://www.imperfectfresheats.com/',
        background: 'healthy/imperfect.png'
    },
    {
        id: 8,
        name: 'Mandy\'s - Liberty Village',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/VV8rKJ2SuduSgv6B9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/mandys-liberty-village/7bYKd16LUQ6j7o3QuInPcw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://www.mandys.ca/order',
        background: 'healthy/mandy.png'
    },
    {
        id: 9,
        name: 'iQ',
        rating: '4.2',
        location: 'https://maps.app.goo.gl/a19cb5CVDa5KBTQf9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/iq-food-co-brookfield/YM-BMzn8UUuIgPPUfR4rcA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/iq-food-co-toronto-24773663/?utm_campaign=gpa',
        website: 'http://www.iqfoodco.com/',
        background: 'healthy/iq.png'
    },
    {
        id: 10,
        name: 'Freshii',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/1YjHaEk7qMtEYF3b9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/freshii-college-park/ZHvoC97bQEi6Z6pRESZ2Ew?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/freshii-toronto-1009429/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiZnJlc2hpaSIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJmcmVzaGlpIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxXSwiaXNfc2libGluZyI6ZmFsc2UsImZvcmNlX3N0b3JlX2F2YWlsYWJpbGl0eV92MiI6ZmFsc2UsImJ1bmRsZV9nbG9iYWxfc2VhcmNoX2NvbnRleHQiOm51bGx9&pickup=false',
        website: 'https://freshii.com/locations/ca/collegepark/',
        background: 'healthy/freshii.png'
    },
]

const finedining = [
    {
        id: 1,
        name: 'Alo',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/6LZ1BRs6nkLRT2iS9',
        reservation: true,
        booking: 'https://www.exploretock.com/alorestaurant/',
        website: 'https://alorestaurant.com/',
        background: 'finedining/alo.png'
    },
    {
        id: 2,
        name: 'Akira Back',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/X5ZM3z3m1MNPkVbZA',
        reservation: true,
        booking: 'https://akirabacktoronto.com/contact/',
        website: 'http://www.akirabacktoronto.com/',
        background: 'finedining/akira.png'
    },
    {
        id: 3,
        name: 'GEORGE Restaurant',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/ENBgvrBg3Bg1UhTn9',
        reservation: true,
        booking: 'https://www.opentable.ca/george-restaurant?ref=16423',
        website: 'http://www.georgeonqueen.com/',
        background: 'finedining/george.png'
    },
    {
        id: 4,
        name: 'Canoe',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/adLsAohnnHBLXdwV7',
        reservation: true,
        booking: 'https://www.opentable.ca/canoe-restaurant-and-bar?ref=16423',
        website: 'http://www.canoerestaurant.com/',
        background: 'finedining/canoe.png'
    },
    {
        id: 5,
        name: 'Harbour 60 Toronto',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/cPcaLmUSWMygGgfT7',
        reservation: true,
        booking: 'https://www.opentable.ca/harbour-sixty?ref=16423',
        website: 'http://www.harbour60.com/',
        background: 'finedining/harbour.png'
    },
    {
        id: 6,
        name: 'Don Alfonso 1890',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/ubW5bcZj6pxVSiUi7',
        reservation: true,
        booking: 'https://www.opentable.ca/r/don-alfonso-1890-toronto?ref=16423',
        website: 'https://www.donalfonsotoronto.com/?utm_source=google&utm_medium=organic&utm_campaign=local&utm_content=Toronto',
        background: 'finedining/donalfonso.png'
    },
    {
        id: 7,
        name: 'Aburi Hana',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/Yif59EnFWCEYQZ6Q6',
        reservation: true,
        booking: 'https://www.exploretock.com/aburihana/',
        website: 'http://aburihana.com/',
        background: 'finedining/aburi.png'
    },
    {
        id: 8,
        name: 'Edulis Restaurant',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/upiiAb2SuKrxomM26',
        reservation: true,
        booking: 'https://www.exploretock.com/edulis/',
        website: 'http://www.edulisrestaurant.com/',
        background: 'finedining/edulis.png'
    },
    {
        id: 9,
        name: 'Kaiseki Yu-zen Hashimoto Restaurant',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/Ak9NsbZj9mFU1bUQ9',
        reservation: true,
        booking: 'https://www.exploretock.com/kaiseki-yu-zen-hashimoto/',
        website: 'https://www.kaiseki.ca/',
        background: 'finedining/kaiseki.png'
    },
    {
        id: 10,
        name: 'Osteria Giulia',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/Ta9HAtArVDoQvEUo8',
        reservation: true,
        booking: 'https://www.opentable.ca/r/osteria-giulia-toronto?ref=16423',
        website: 'http://osteriagiulia.ca/',
        background: 'finedining/osteria.png'
    }
]

const romantic = [
    {
        id: 1,
        name: 'Grey Gardens',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/Mxdecfzr67tqCyVr6',
        reservation: true,
        booking: 'https://www.opentable.ca/r/grey-gardens-toronto?ref=16423',
        website: 'http://greygardens.ca/',
        background: 'romantic/grey.png'
    },
    {
        id: 2,
        name: 'Le Sélect Bistro',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/gghDZEJ1KhwkDkqs6',
        reservation: true,
        booking: 'https://www.opentable.ca/r/le-select-bistro-toronto?ref=16423',
        website: 'http://www.leselectbistro.com/',
        background: 'romantic/leselect.png'
    },
    {
        id: 3,
        name: 'Bar Isabel',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/49W98dkcY3Uk58Um6',
        reservation: true,
        booking: 'https://barisabel.com/reserve/',
        website: 'http://barisabel.com/',
        background: 'romantic/isabel.png'
    },
    {
        id: 4,
        name: 'Baro',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/ypFgYvrcDWxBYPEM9',
        reservation: true,
        booking: 'https://www.opentable.ca/r/baro-toronto?ref=16423',
        website: 'http://barotoronto.com/',
        background: 'romantic/baro.png'
    },
    {
        id: 5,
        name: 'Casa Madera',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/YJWoUAtF1bpQ73bUA',
        reservation: true,
        booking: 'https://www.sevenrooms.com/reservations/casamadera',
        website: 'https://www.1hotels.com/toronto/taste/casa-madera?utm_source=google-gbp&utm_medium=organic&utm_campaign=gbp',
        background: 'romantic/casa.png'
    },
    {
        id: 6,
        name: 'Minami Toronto',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/xaBJTDK4UkvB7iWx6',
        reservation: true,
        booking: 'https://www.opentable.ca/r/minami-restaurant-toronto?ref=16423',
        website: 'http://minamitoronto.com/',
        background: 'romantic/minami.png'
    },
    {
        id: 7,
        name: 'Byblos Downtown',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/eHnS1GaFm7kJq7Rz7',
        reservation: true,
        booking: 'https://www.opentable.ca/restref/client/?restref=112777&lang=en-CA&ot_source=Restaurant%20website&corrid=6df5770a-8882-44c9-9eb1-3705a4817ddd',
        website: 'https://byblosdowntown.com/',
        background: 'romantic/byblos.png'
    },
    {
        id: 8,
        name: 'J\'s Steak Frites',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/RGepNcE6Efu3qhQK9',
        reservation: true,
        booking: 'https://www.opentable.ca/r/js-steak-frites-toronto?ref=16423',
        website: 'https://jssteakfrites.ca/',
        background: 'romantic/jsteak.png'
    },
    {
        id: 9,
        name: 'Hy\'s Steakhouse & Cocktail Bar',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/Pkik22ionsRUhkzF6',
        reservation: true,
        booking: 'https://www.hyssteakhouse.com/reserve',
        website: 'http://www.hyssteakhouse.com/',
        background: 'romantic/hys.png'
    },
    {
        id: 10,
        name: '360 - The Restaurant at the CN Tower',
        rating: '4.1',
        location: 'https://maps.app.goo.gl/jsVZkaVAxDhVu934A',
        reservation: true,
        booking: 'https://www.sevenrooms.com/reservations/360Restaurant?_gl=1*1qcbd08*_ga*NjEyODM2MDM0LjE2OTU2NzEzMDE.*_ga_B77ELRE9WC*MTY5NTY3MTMwMC4xLjEuMTY5NTY3MTMyNS4zNS4wLjA.',
        website: 'https://www.cntower.ca/dine-at-360-restaurant/overview',
        background: 'romantic/360.png'
    }
]

const vegans = [
    {
        id: 1,
        name: 'PLANTA Queen',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/zJQMVseDRG12PfVE9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/planta-queen/Q1f1Ml5UQ3awzFHmSW_FYg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/planta-queen-toronto-714658/?utm_campaign=gpa',
        website: 'https://www.plantarestaurants.com/location/planta-queen-yorkville/',
        background: 'vegans/planta.png'
    },
    {
        id: 2,
        name: 'Fresh Kitchen + Juice Bar Eglinton',
        rating: '4.4',
        location: 'https://maps.app.goo.gl/MkSbZFGo6xUak7W36',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/fresh-kitchen-%2B-juice-bar-on-eglinton/UAoAH3ejR4e2EDmJfZcgbA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/fresh:-kitchen-+-juice-bar-toronto-152774/?utm_campaign=gpa',
        website: 'https://www.freshkitchens.ca/en/locations/on/toronto/101-eglinton-avenue-east',
        background: 'vegans/fresh.png'
    },
    {
        id: 3,
        name: 'Rosalinda Restaurant',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/DEZR8CnWuxo9bjMt6',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/rosalinda/xRl1pxRZXAqof-zrbVV2JQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&ps=1&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://rosalindarestaurant.com/',
        background: 'vegans/rosalinda.png'
    },
    {
        id: 4,
        name: 'Parka Food Co.',
        rating: '4.5',
        location: 'https://maps.app.goo.gl/P5F5HdQM4gpjvAuf9',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/parka-food-co/i5gWFaC0QQWzLunfo4TXKg?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION',
        doordash: 'https://www.doordash.com/store/parka-food-co.-toronto-348101/?event_type=autocomplete&pickup=false',
        website: 'https://www.parkafoodco.com/',
        background: 'vegans/parka.png'
    },
    {
        id: 5,
        name: 'Pizzeria Du',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/NraVVdvnEUsaB1PW7',
        delivery: false,
        ubereats: '',
        doordash: '',
        website: 'http://www.pizzeriadu.ca/',
        background: 'vegans/pizzeriadu.png'
    },
    {
        id: 6,
        name: 'Copper Branch',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/3ebYbDDWk4hAM8YX8',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/copper-branch-thornhill/TSW8X_Y4Sja0r_Bsma0TeA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: 'https://www.doordash.com/store/copper-branch-vaughan-655048/?utm_campaign=gpa',
        website: 'https://eatcopperbranch.com/',
        background: 'vegans/copper.png'
    },
    {
        id: 7,
        name: 'Buddha\'s Vegan Restaurant',
        rating: '4.6',
        location: 'https://maps.app.goo.gl/yyVJsxnEJdQHkvvf7',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/feed?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE',
        doordash: 'https://www.doordash.com/store/buddha\'s-vegan-restaurant-toronto-30282/?utm_campaign=gpa',
        website: 'http://www.buddharestaurant.ca/',
        background: 'vegans/buddha.png'
    },
    {
        id: 8,
        name: 'Hawker',
        rating: '4.8',
        location: 'https://maps.app.goo.gl/xPTtcHJvubJGpDvv5',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/store/hawker-toronto-24825175/?event_type=autocomplete&pickup=false',
        website: 'http://hawker.to/',
        background: 'vegans/hawker.png'
    },
    {
        id: 9,
        name: 'Vegan Danish Bakery on Queen',
        rating: '4.7',
        location: 'https://maps.app.goo.gl/57ByDHPAk9heXB568',
        delivery: true,
        ubereats: 'https://www.ubereats.com/ca/store/vegan-danish-bakery/QWwcZ_sIQuCAOKr6LXppmw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyMCUyMFBhcmxpYW1lbnQlMjBTdCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwNWFkMTkyLWM4MzktNDkyZi03NWE0LTI4NGIxZDNjMGMwNiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNjUzODgxNyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4zNjQwMDQ3JTdE&ps=1&utm_campaign=place-action-link&utm_medium=organic&utm_source=google',
        doordash: '',
        website: 'http://www.vegandanishbakery.com/',
        background: 'vegans/danish.png'
    },
    {
        id: 10,
        name: 'Kupfert & Kim',
        rating: '4.3',
        location: 'https://maps.app.goo.gl/pmtG3qtZBKsEpEPr9',
        delivery: true,
        ubereats: '',
        doordash: 'https://www.doordash.com/store/kupfert-&-kim-toronto-314306/?utm_campaign=gpa',
        website: 'http://www.kupfertandkim.com/',
        background: 'vegans/kupfert.png'
    },
]

const dishes = [
    {
        id: 1,
        name: 'Quesabirria con Consome',
        location: 'https://maps.app.goo.gl/nm5ERkzRisx9NJEL7',
        website: 'http://www.fondabalam.com/',
        background: 'dishes/fondabalam.png'
    },
    {
        id: 2,
        name: 'Jidori Chicken',
        location: 'https://maps.app.goo.gl/X5ZM3z3m1MNPkVbZA',
        website: 'http://www.akirabacktoronto.com/',
        background: 'dishes/akira.png'
    },
    {
        id: 3,
        name: 'Patatas Bravas',
        location: 'https://maps.app.goo.gl/kYL2YcpaGjsyNSgo9',
        website: 'https://www.madrinatapas.com/',
        background: 'dishes/patatas.png'
    },
    {
        id: 4,
        name: 'Khao Soi',
        location: 'https://maps.app.goo.gl/7jZmbJjFENPYWD6YA',
        website: 'http://www.paitoronto.com/',
        background: 'dishes/khao.png'
    },
    {
        id: 5,
        name: 'Gnochhi',
        location: 'https://maps.app.goo.gl/VpMEb56tUPPK7VdLA',
        website: 'http://www.sugotoronto.com/',
        background: 'dishes/gnocchi.png'
    },
    {
        id: 6,
        name: 'Beef Brisket',
        location: 'https://maps.app.goo.gl/rJhVpWEcaZtdSEwf9',
        website: 'https://smoquenbones.com/',
        background: 'dishes/brisket.png'
    },
    {
        id: 7,
        name: 'Baja Fish Taco',
        location: 'https://maps.app.goo.gl/FhqLuDY4sNJE6Ec99',
        website: 'https://www.instagram.com/wilburmexicana/?hl=en',
        background: 'dishes/baja.png'
    },
    {
        id: 8,
        name: 'The Vatican Burger',
        location: 'https://maps.app.goo.gl/C72t2UHkbmRNFiey8',
        website: 'https://www.theburgerspriest.com/en/locations/on/toronto/1120-queen-street-w',
        background: 'dishes/vatican.png'
    },
    {
        id: 9,
        name: 'NY Cheese',
        location: 'https://maps.app.goo.gl/Th96BxZFvBN5gZGd8',
        website: 'http://northofbrooklyn.com/',
        background: 'dishes/nycheese.png'
    },
    {
        id: 10,
        name: 'Bang Bang Broccoli',
        location: 'https://maps.app.goo.gl/zJQMVseDRG12PfVE9',
        website: 'https://www.plantarestaurants.com/location/planta-queen-yorkville/',
        background: 'dishes/bang.png'
    },
]

export { italians, coffees, pizzas, burgers, bars, bakeries, breakfast, healthy, finedining, romantic, vegans, dishes };