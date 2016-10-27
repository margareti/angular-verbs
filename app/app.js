
var verbsApp = angular.module('verbs', []);

verbsApp.controller('verbsController', function verbsController($scope) {

  $scope.levels = [{
    name: 'Level 1',
    contents: [{
        letter: 'B',
        words: ['be', 'begin', 'break', 'bring', 'buy']
      }, {
        letter: 'C',
        words: ['can', 'choose', 'come']
      }, {
        letter: 'D, E',
        words: ['do', 'drink', 'eat']
      }, {
        letter: 'F, G, H',
        words: ['fall', 'find', 'get', 'give', 'go', 'have', 'hear']
      }, {
        letter: 'K, L, M',
        words: ['know', 'lose', 'make', 'meet']
      }, {
        letter: 'P, R',
        words: ['put', 'read', 'run']
      }, {
        letter: 'S',
        words: ['say', 'see', 'sing', 'sit', 'sleep', 'speak', 'spend', 'swim']
      }, {
        letter: 'T',
        words: ['tell', 'think']
      }
    ]
  }, {
    name: 'Level 2',
    contents: [{
      letter: 'B, C, D',
      words: ['become', 'cost', 'drive']
    }, {
      letter: 'F, G',
      words: ['feel', 'forget', 'forgive', 'grow']
    }, {
      letter: 'K, L, M',
      words: ['keep', 'leave', 'let', 'mean']
    }, {
      letter: 'P, R',
      words: ['pay', 'ride']
    }, {
      letter: 'S',
      words: ['sell', 'send', 'set', 'show', 'stand']
    }, {
      letter: 'T, U, W',
      words: ['take', 'teach', 'understand', 'write']
    }]
  }, {
    name: 'Level 3',
    contents: [{
      letter: 'B, C',
      words: ['bite', 'build', 'catch']
    }, {
      letter: 'F',
      words: ['fight', 'fly', 'freeze']
    }, {
      letter: 'H',
      words: ['hang', 'hide', 'hit', 'hurt']
    }, {
      letter: 'L, R',
      words: ['lead', 'rise']
    }, {
      letter: 'S',
      words: ['shake', 'shut', 'sink', 'spill', 'steal']
    }, {
      letter: 'W',
      words: ['wake', 'win', 'wear']
    }]
  }, {
    name: 'Level 4',
    contents: [{
      letter: 'B',
      words: ['bet', 'bleed', 'blow', 'burn']
    }, {
      letter: 'C, D',
      words: ['cut', 'deal', 'draw', 'dream']
    }, {
      letter: 'H, L, R',
      words: ['hold', 'lend', 'light', 'lay', 'ring']
    }, {
      letter: 'S',
      words: ['shine', 'shoot', 'split', 'spoil', 'spread', 'stick']
    }, {
      letter: 'T, U',
      words: ['throw', 'upset'] 
    }]
  }]

  $scope.translation = {
    'be': 'быть',
    'become': 'cтановиться',
    'begin': 'начинать',
    'bet': 'делать ставки',
    'bite': 'кусаться',
    'bleed': 'кровоточить',
    'blow': 'дуть',
    'break': 'ломать',
    'bring': 'приносить',
    'build': 'строить',
    'burn': 'жечь',
    'buy': 'покупать',

    'can': 'быть способным',
    'catch': 'ловить',
    'choose': 'выбирать',
    'come': 'приходить',
    'cost': 'стоить',
    'cut': 'ломать',

    'deal': 'справляться с чем-то',
    'do': 'делать',
    'draw': 'рисовать',
    'dream': 'мечтать',
    'drink': 'пить',
    'drive': 'водить машину',

    'eat': 'есть',
    'fall': 'падать',
    'feel': 'чувствовать',
    'fight': 'бороться',
    'find': 'находить',
    'fly': 'летать',
    'forget': 'забывать',
    'forgive': 'прощать',
    'freeze': 'замерзать',

    'get': 'получать',
    'give': 'давать',
    'go': 'идти/ехать',
    'grow': 'расти',

    'hang': 'висеть',
    'have': 'иметь',
    'hear': 'слышать',
    'hide': 'прятать',
    'hit': 'ударять',
    'hold': 'держать',
    'hurt': 'обижать',
    'keep': 'хранить',
    'know': 'знать',

    'lay': 'лежать',
    'lead': 'вести за собой',
    'leave': 'оставлять/покидать',
    'lend': 'давать взаймы',
    'let': 'разрешать',
    'light': 'зажигать',
    'lose': 'терять',
    'make': 'создавать',
    'mean': 'означать',
    'meet': 'встречать',
    'pay': 'платить',
    'put': 'класть/ставить',
    'read': 'читать',
    'ride': 'ездить',
    'ring': 'звонить',
    'rise': 'подниматься',
    'run': 'бежать',

    'say': 'говорить',
    'see': 'видеть',
    'sell': 'продавать',
    'send': 'отправлять',
    'set': 'ставить',
    'shake': 'трясти',
    'shine': 'блестеть',
    'shoot': 'стрелять',
    'show': 'показывать',
    'shut': 'закрывать',
    'sing': 'петь',
    'sink': 'тонуть',
    'sit': 'сидеть',
    'sleep': 'спать',
    'speak': 'говорить',
    'spend': 'тратить',
    'spill': 'проливать',
    'spoil': 'портить',
    'spread': 'расправлять',
    'stand': 'стоять',
    'steal': 'красть',
    'stick': 'прилипать',
    'swim': 'плавать',
    'take': 'брать',
    'teach': 'преподавать',
    'tell': 'рассказывать',
    'think': 'думать',
    'throw': 'бросать',
    'understand': 'понимать',
    'upset': 'расстраивать',
    'wake': 'просыпаться',
    'wear': 'носить',
    'win': 'выигрывать',
    'write': 'писать'
  }

});