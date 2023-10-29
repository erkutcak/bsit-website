const recipes = [
    {
        id: 1,
        name: 'Tiramisu',
        background: 'recipes/tiramisu1.png',
        textcon: 'When it comes to indulgent desserts, few can rival the classic allure of Tiramisu. With each delectable spoonful, it transports us to the heart of Italy. For those with a sweet tooth, a cherished Tiramisu recipe is a must-have in their culinary repertoire. After experimenting with numerous variations, I\'ve uncovered one of the finest renditions. Join me as I guide you through each step, ensuring you create one of the most exquisite Tiramisu desserts you\'ve ever experienced. This recipe offers flexibility, allowing you to craft it in a large serving dish or as individual portions. While both options have their merits, I tend to favor the latter. Individual servings are not only convenient to store but also extend the delectable shelf life of this dessert. If your ingredients are at the ready, there\'s nothing standing in your way of creating an exceptional Tiramisu! Let\'s get started!',
        ingredients: [
            {
                category: 'Ladyfingers',
                items: [
                    '4 eggs',
                    '⅔ cup (133gr) granulated sugar',
                    '1 cup (120gr) all-purpose flour',
                    '½ tbsp baking powder'
                ],
            },
            {
                category: 'Coffee Mix',
                items: [
                    '1 cup (240ml) water',
                    '2 tbsp espresso',
                ],
            },
            {
                category: 'Sabayon Sauce',
                items: [
                    '4 egg yolks',
                    '1 cup (235gr) heavy cream',
                    '¼ cup (50gr) granulated sugar',
                    'Pinch of salt',
                    '1 cup (225gr) mascarpone cheese',
                    '⅓ cup (80gr) coffee liqueur',
                ],
            },
            {
                category: 'Decorate',
                items: [
                    '2 tsp cocoa powder',
                ],
            },
        ],
        instructions: [
            {
                category: 'Ladyfingers',
                directions: [
                    'Preheat the oven to 400F (200C) and line a baking tray with parchment paper.',
                    'In a large bowl, beat egg whites until stiff peaks form. Gradually add 2 tsp sugar and continue beating until the mixture is homogeneous.',
                    'In a separate bowl, beat egg yolks and the remaining sugar until pale and homogeneous.',
                    'Combine the egg white and egg yolk mixtures, then transfer the mixture to a piping bag.',
                    'Pipe approximately 3-inch biscuits onto the prepared baking tray.',
                    'Bake until golden brown, about 8-10 minutes.',            
                ],
            },
            {
                category: 'Coffee Mix',
                directions: [
                    'Add 1 cup water to the espresso.',
                ],
            },
            {
                category: 'Sabayon Sauce',
                directions: [
                    'In a heatproof medium bowl, combine eggs, granulated sugar, coffee liqueur, and salt.',
                    'Place a saucepan on medium heat, add 100ml water, and bring it to a boil.',
                    'Reduce the heat and place the egg bowl over the saucepan, ensuring the bowl doesn\'t touch the water.',
                    'Whisk continuously for 6-7 minutes until the mixture thickens and becomes pale.',
                    'Remove from heat and let it cool for 10 minutes.',
                    'In another bowl, whisk the liquid cream and mascarpone cheese until smooth.',                 
                ],
            },
            {
                category: 'Plating!',
                directions: [
                    'Dip the ladyfingers in the coffee mixture and arrange them on a serving plate.',
                    'Spread a layer of the prepared sabayon sauce over the lady fingers.',
                    'Repeat the layers, ending with a layer of sabayon sauce.',
                    'Refrigerate the plate for at least 4 hours to set.',
                    'Before serving, sprinkle cocoa powder over the dessert for a finishing touch. Note: Ensure you sprinkle the cocoa powder just before serving to maintain its appearance.',
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Levain Cookie (8 massive cookies)',
        background: '',
        textcon: 'At long last, I\'ve cracked the code to recreate the iconic Levain Bakery\'s renowned cookie recipe, a beloved treat adored by nearly every visitor to New York. If you\'ve yet to experience the pure bliss of these cookies, prepare to forget everything you thought you knew about this delectable treat. Embrace the sensational world of Levain cookies, where each bite boasts a perfect balance of crispy, chewy, soft, and irresistibly melty goodness.',
        ingredients: [
            '1 cup (225gr) cold unsalted butter (cut into cubes)',
            '1 cup (180gr) brown sugar',
            '½ cup (100gr) granulated sugar',
            '2 large eggs',
            '3 cups (360gr) all-purpose flour',
            '1 tsp salt',
            '1 tsp corn starch',
            '1 tsp baking soda',
            '2 cups (400gr) milk chocolate & bitter chocolate chips',
            '2 cups (250gr) chopped walnuts',
        ],
        instructions: [
            'Preheat the oven to 410F (210C).',
            'In a large bowl, mix the butter, white sugar, and brown sugar until smooth and creamy.',
            'Add the eggs one at a time, ensuring each one is thoroughly mixed into the batter.',
            'In another bowl, combine the dry ingredients: flour, salt, cornstarch, baking soda, and vanilla extract.',
            'Gradually add the dry ingredients to the wet ingredients, mixing until a cohesive dough forms.',
            'Fold in the chocolate chips and walnuts to distribute them evenly throughout the dough.',
            'Line a baking sheet with parchment paper. Divide the dough into 8 equal pieces and place them on the prepared baking sheet.',
            'Refrigerate the dough for 20 minutes to firm it up.',
            'Bake in the preheated oven for 12 minutes or until the cookies are golden brown around the edges.',
            'Remove from the oven and allow the cookies to cool on the baking sheet for at least 10 minutes before transferring them to a wire rack to cool completely.',
            'Serve and enjoy your freshly baked cookies!',
        ],
    },
    {
        id: 3,
        name: 'San Sebastian Cheesecake',
        background: '',
        textcon: 'After numerous attempts to capture the essence of the finest San Sebastian Cheesecake, I\'ve discovered a recipe that comes remarkably close to the original. Join me on a journey to savor the delectable delight of San Sebastian Cheesecake, a treasured dessert hailing from the enchanting region of San Sebastian in Spain.',
        ingredients: [
            '1¾ cups (350gr) granulated sugar',
            '4½ cups (1000gr) cream cheese (room temp)',
            '¼ tsp salt',
            '5 large eggs',
            '2 cups (470gr) heavy cream',
            '¼ cup (30gr) all-purpose flour',
        ],
        instructions: [
            'Preheat the oven to 440F (230C).',
            'In a mixing bowl, beat the cream cheese until smooth and creamy.',
            'In a separate bowl, combine flour and cream, mixing until you achieve a homogeneous consistency.',
            'In another bowl, beat the eggs, sugar, and salt together until well combined.',
            'Line the cheesecake pan with parchment paper.',
            'Gradually add the flour and cream mixture to the whipped cream cheese, blending them together.',
            'Once combined, add the egg mixture and stir thoroughly until well incorporated.',
            'Pour the batter into the prepared cheesecake pan.',
            'Bake in the preheated oven for 20 minutes.',
            'After 20 minutes, reduce the oven temperature to 390 Fahrenheit (200  Celsius) and bake for an additional 3 minutes. The top should be slightly burnt, and the center should have a slightly liquid consistency.',
            'Remove the cheesecake from the oven and allow it to cool at room temperature. Afterward, refrigerate it for at least 8 hours or until it is thoroughly chilled and set.',
            'When ready to serve, take the cheesecake out of the refrigerator, slice a piece, and enjoy the delicious taste of San Sebastian Cheesecake.',
        ],
    },
    {
        id: 4,
        name: 'Fudge Brownie',
        background: '',
        textcon: 'As an ardent baker, I must confess that in my initial forays into the world of baking, perfecting the brownie was a formidable challenge. I yearned for a brownie that possessed a fudgy allure without overwhelming intensity. The quest to strike this harmonious balance proved to be a journey in itself. However, I\'ve triumphed in discovering the recipe that achieves this delicate equilibrium. If you\'re in search of a brownie that doesn\'t weigh you down, yet boasts that desired fudgy texture, you\'re in for a treat with this one.',
        ingredients: [
            '1½ cup (300gr) bitter chocolate',
            '⅔ cup (150gr) unsalted butter (cut into cubes)',
            '3 large eggs',
            '1¼ (225gr) granulated sugar',
            '⅔ cup (93 gr) all-purpose flour',
            '2 tbsp cacao powder',
            '½ tsp salt',
        ],
        instructions: [
            'Preheat the oven to 350F (180C).',
            'In a mixing bowl, beat the eggs and sugar thoroughly until well combined.',
            'In a separate heatproof bowl, melt the chocolate using the bain-marie method. Add the butter to the melted chocolate and mix until you achieve a homogeneous consistency.',
            'Gradually add the chocolate-butter mixture to the egg mixture, stirring continuously until the batter is smooth and well combined.',
            'Line a baking dish with parchment paper and pour the batter into it.',
            'Bake in the preheated oven for 25 minutes or until a toothpick inserted into the center comes out clean.',
            'Allow the baked mixture to cool to room temperature inside the baking dish for about an hour.',
            'After cooling, carefully remove the dessert from the dish using the parchment paper.',
            'Slice and serve your delicious baked treat!',
        ],
    }
]

export { recipes }