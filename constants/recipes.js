const recipes = [
    {
        name: 'Tiramisu',
        background: 'recipes/tiramisu1.png',
        textcon: 'When we think of dessert, the first thing that comes up to our mind is Tiramisu, which can take us to Italy with one spoon, and I think everyone who loves dessert should have a delicious Tiramisu recipe they keep in their recipe book. Luckily, after trying many recipes, I found one of the best. Follow along my instructions step-by-step and make one of the best Tiramisu you have ever made! \n Depending on your preference, you can make this recipe in a large bowl or in individual portions. I always recommend individual servings, as they are easier to store, and you can keep them longer without spoiling. We can start if your ingredients are ready, there is nothing holding you back from making a great Tiramisu!',
        ingredients: [
            {
                category: 'Ladyfingers',
                items: [
                    '4 eggs',
                    '2/3 cup white sugar',
                    '1 cup all-purpose flour',
                    '½ tbsp baking powder'
                ],
            },
            {
                category: 'Coffee Mix',
                items: [
                    '240 ml water',
                    '2 tbsp espresso powder',
                ],
            },
            {
                category: 'Sabayon Sauce',
                items: [
                    '4 egg yolks',
                    '235 g cream',
                    '50 g granulated sugar',
                    'Pinch of salt',
                    '225 g mascarpone cheese',
                    '80 g coffee liqueur',
                ],
            },
            {
                category: 'Decorate',
                items: [
                    '2 tsp cocoa',
                ],
            },
        ],
        instructions: [
            {
                category: 'Ladyfingers',
                directions: [
                    'Preheat the oven to 400 degrees F.',
                    'Line a baking tray with parchment paper.',
                    'Put egg whites in a large bowl and beat with a mixer. Add 2 tsp sugar and continue beating until you get a homogeneous mixture.',
                    'Beat egg yolks and remaining sugar in a separate bowl until you get a homogeneous mixture and a pale coßlor.',
                    'Combine the two mixtures and transfer them to the piping bag.',
                    'Pipe approximately 3-inch biscuits on the baking tray.',
                    'Bake it until golden brown, about 8-10 minutes.',             
                ],
            },
            {
                category: 'Coffee Mix',
                directions: [
                    'Dissolve the instant coffee or espresso in hot water.',
                ],
            },
            {
                category: 'Sabayon Sauce',
                directions: [
                    'Put the eggs, granulated sugar, coffee liqueur, and salt in a heatproof medium bowl.',
                    'Put a saucepan on the stove on medium heat, put 100ml water in it, and wait for to boil.',
                    'When it boils, reduce the heat, and place the egg bowl on the saucepan (TIP: the bowl should not touch the water.)',
                    'Start whisking continuously for about 6-7 minutes. You can also use a mixer at this stage, and the mixture will get pale.',
                    'When it thickens, remove it from the stove and wait for it to cool for about 10 minutes.',
                    'Meanwhile, whisk the liquid cream and mascarpone cheese until you get a homogenous mixture. It should have a smooth consistency.',
                    'Add the egg mixture to the whipped cream mascarpone and mix with a spatula.',                   
                ],
            },
            {
                category: 'Final',
                directions: [
                    'First, dip the ladyfingers in the coffee mixture and arrange them on a serving plate. Spread the sabayon sauce on the ladyfingers.',
                    'Repeat this step a few times, then, put the plate in the refrigerator for at least 4 hours.',
                    'Sprinkle cocoa before serving.',
                    'Be sure to pour the cocoa on it before the service. Otherwise, it will not look nice.',
                ],
            },
        ],
    },
    {
        name: 'Levain Cookie (8 massive cookies)',
        background: '',
        textcon: 'I\'ve finally reached the famous New York bakery Levain\'s cookies recipe that almost everyone who visits New York loves after long trials.\n If you haven\'t tried it before, forget all the cookies you know and savor the crispy, chewy, soft, and melty goodness of Levain cookie.',
        ingredients: [
            '1 cup cold butter (cut into cubes)',
            '1 cup brown sugar',
            '½ cup white sugar',
            '2 large eggs',
            '3 cups all-purpose flour',
            '1 tsp salt',
            '1 tsp cornstarch',
            '1 tsp baking soda',
            '2 cups milk &amp; bitter chocolate chips',
            '2 cups chopped walnuts',
        ],
        instructions: [
            'Preheat 210 degrees',
            'Mix the butter, and both sugar until smooth.',
            'Add in the eggs one at a time and mix each one thoroughly.',
            'Mix dry ingredients in another bowl (flour, salt, cornstarch, baking soda, vanilla)',
            'Combine dry and wet ingredients until dough is formed.',
            'Fold in chocolate chips and walnuts.',
            'Line a baking sheet and divide 8 pieces.',
            'Refrigerate for 20 minutes.',
            'Oven 12 minutes',
            'Before serving allow to cool at least 10 minutes',
        ],
    },
    {
        name: 'San Sebastian Cheesecake',
        background: '',
        textcon: 'I\'ve tried many times to make the best San Sebastian recipe, and among the ones I tried, I found the one that comes closest to the original. Here is one of my favorite desserts, the delightful taste of San Sebastian Cheesecake from the wonderful region of San Sebastian in Spain!',
        ingredients: [
            '1¾ cups (350 gr) sugar',
            '2¼ pounds cream cheese (should be room temperature)',
            '¼ teaspoon salt',
            '5 large eggs',
            '2 cups (480 mL) heavy cream',
            '¼ cup (30 gr) all-purpose flour',
        ],
        instructions: [
            'Preheat 230 degrees',
            'First, beat the cream cheese.',
            'In a separate bowl, mix flour and cream until you achieve a homogeneous consistency.',
            'In another bowl, beat the eggs, sugar, and salt.',
            'Add parchment paper to the cheesecake pan.',
            'Add flour and cream mixture into whipped cream cheese.',
            'After mixing, add the egg mixture and stir again.',
            'Bake at 230 degrees Celsius in a preheated oven for 20 minutes.',
            'Then reduce the temperature to 200 degrees Celsius and bake for another 3 minutes before removing it from the oven.',
            'When you take it out of the oven, the top should be slightly burnt and have a liquid consistency. Let it cool outside, then refrigerate for at least 8 hours.',
            'When you take it out of the refrigerator and slice a piece, enjoy the delicious taste of San Sebastian Cheesecake.',
        ],
    },
    {
        name: 'Fudge Brownie',
        background: '',
        textcon: 'As someone who loves baking, I should admit that in my early trials, the most challenging dessert was brownie for me. I prefer my brownies to be fudgy, but not intense. I struggled a lot to find a recipe that strikes the perfect balance and finally, I found it. If you\'re looking for a brownie that is not too heavy, and has that fudgy texture, you must definitely give this one a try.',
        ingredients: [
            '300 gr bitter chocolate',
            '150 gr butter (cut into cubes)',
            '3 large eggs',
            '225 gr sugar',
            '⅔ cup un (93 gr)',
            '13 gr cacao powder',
            '3-4 gr salt',
        ],
        instructions: [
            'Preheat 180 degrees',
            'Beat the eggs and sugar thoroughly.',
            'In a separate bowl, melt the chocolate using the bain-marie method, then add the butter.',
            'Mix until you achieve a homogeneous consistency and add it to the egg mixture.',
            'Mix again until it\'s homogenous, then pour it into a baking dish lined with parchment paper.',
            'Bake for 25 minutes and let it cool to room temperature.',
            'After about an hour, remove it from the dish.',
        ],
    }
]