// Solution / Решение

const aliBaba = trying =>
    [ // Массив сообщений
        "Ali Baba didn't get the treasure and he was still a poor man.", // Первый элемент массива - сообщение о статусе 0
        "Ali Baba got a lot of treasure and he was finally killed by the robbers.", // Второй элемент массива - сообщение о статусе 1
        "Ali Baba got a lot of treasures and he lived a rich life." // Третий элемент массива - сообщение о статусе 2
    ]
    [ // Доступ к элементу массива по индексу, который вычисляется в следующей строке.
    trying.reduce((a, t) => // Использование метода reduce для определения статуса.
        t === "Open, Sesame!" && a === 0 // Если условие открытия выполняется и статус равен 0...
            ? 1 : t === "Shut, Sesame!" && a === 1 // Если условие закрытия выполняется и статус равен 1...
                ? 2 : a, 0) // ...вернуть соответствующий статус (0, 1 или 2), иначе вернуть текущий статус.
    ]; // Завершение перебора элементов массива по вычисленному индексу.


// Tests

const trying = ["Open, Millet!", "Open, Maize!", "Open, Soybean!",
    "Oh, Damn! I'm going to smash you into pieces!",
    "Shut, Sesame!", "Open, Sesame!", "Haha, I'm so smart!"];

console.log(aliBaba(trying)); // Ali Baba got a lot of treasure and he was finally killed by the robbers.

/*

Story
In a town in Persia there dwelt two brothers, one named Cassim, the other Ali Baba. 
Ali Baba is a poor man , he had to maintain his wife and children by cutting wood in a neighboring forest and selling it in the town.

One day, when Ali Baba was in the forest, he saw a troop of men on horseback, 
coming toward him in a cloud of dust. He was afraid they were robbers, and climbed into a tree for safety. 
When they came up to him and dismounted, he counted forty of them. 
They unbridled their horses and tied them to trees.

The finest man among them, whom Ali Baba took to be their captain, 
went a little way among some bushes, and said, 
"Open, Sesame!" so plainly that Ali Baba heard him.

A door opened in the rocks, and having made the troop go in, he followed them, 
and the door shut again of itself. They stayed some time inside, and Ali Baba, 
fearing they might come out and catch him, was forced to sit patiently in the tree. 
At last the door opened again, and the Forty Thieves came out. 
As the Captain went in last he came out first, and made them all pass by him; 
he then closed the door, saying, "Shut, Sesame!"

Every man bridled his horse and mounted, the Captain put himself at their head, 
and they returned as they came.

Then Ali Baba climbed down and went to the door concealed among the bushes, 
and trying to shout, "Open, Sesame!" and it flew open. 
The Alibaba found here is the place where the robbers collect their treasures. 
He took out a lot of treasures.

Using the words, "Shut, Sesame!" he closed the door and went home. 
Because he knew that if he did not close the door, 
the robbers would soon find someone to take away their treasures, 
and he would be killed.

Descrption
Below, you will see a forgetful Ali Baba. 
He can only remember the name of a plant in the words of the robber. 
But... Millet? Maize? Soybean? Damn! He needs to try again and again...

Please predict the fate of Ali Baba:

If he opens the door and closes the door successfully:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!",
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!",
 "Shut, Sesame!","Haha, I'm so smart!"]

Return the forecast result:
Ali Baba got a lot of treasures and he lived a rich life.
If he opens the door successfully but he did not closes the door:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!", 
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!"]

*/

/*

История
В одном из городов Персии жили два брата, одного звали Кассим, другого Али-Баба. 
Али-Баба - бедный человек, он содержал жену и детей тем, что рубил дрова в соседнем лесу и продавал их в городе.

Однажды, когда Али-Баба был в лесу, он увидел отряд мужчин на лошадях, 
приближающийся к нему в облаке пыли. Он испугался, что это разбойники, и для безопасности залез на дерево. 
Когда они подъехали к нему и сошли, он насчитал их сорок человек. 
Они распрягли своих лошадей и привязали их к деревьям.

Самый лучший из них, которого Али-Баба принял за их капитана, 
отошел немного в сторону среди кустов и сказал, 
"Откройся, Сезам!" - так отчетливо, что Али-Баба услышал его.

В скалах открылась дверь, и, заставив отряд войти, он последовал за ними, 
и дверь снова закрылась сама собой. Некоторое время они оставались внутри, и Али-Баба, 
опасаясь, что они могут выйти и поймать его, был вынужден терпеливо сидеть на дереве. 
Наконец дверь снова открылась, и Сорок разбойников вышли наружу. 
Поскольку капитан вошел последним, он вышел первым и заставил их всех пройти мимо него; 
Затем он закрыл дверь, сказав: "Заткнись, Сезам!".

Каждый запряг свою лошадь и сел на нее, а капитан встал во главе их, 
и они вернулись, как пришли.

Тогда Али-Баба слез вниз и подошел к двери, скрытой в кустах, 
и попытался крикнуть: "Откройся, Сезам!" - и она распахнулась. 
Али-Баба нашел здесь место, где разбойники собирают свои сокровища. 
Он вытащил много сокровищ.

Со словами "Закрой, Сезам!" он закрыл дверь и отправился домой. 
Потому что он знал, что если он не закроет дверь, 
грабители скоро найдут кого-нибудь, кто заберет их сокровища, 
и его убьют.

Descrption
Ниже вы видите забывчивого Али-Бабу. 
Он помнит только название растения со слов разбойника. 
Но... Просо? Кукуруза? Соя? Проклятье! Ему нужно пробовать снова и снова...

Пожалуйста, предскажите судьбу Али Бабы:

Если он откроет дверь и успешно закроет ее:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!",
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!",
 "Shut, Sesame!","Haha, I'm so smart!"]

Верните результат прогноза:
Али-Баба получил много сокровищ и прожил богатую жизнь.
Если он успешно откроет дверь, но не закроет ее:

 ["Open, Millet!","Open, Maize!","Open, Soybean!",
 "Oh, Damn! I'm going to smash you into pieces!",
 "Open, Sesame!","God bless! A lot of treasures!", 
 "Why do I have only two hands?","Shut, Maize!",
 "Shut, Soybean!","Please shut! Dear Mr. door!"]

*/