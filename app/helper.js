var verbs = {
    'be': ['was/were', 'been'],
    'become': ['became', 'become'],
    'begin': ['began', 'begun'],
    'bet': [ 'bet'],
    'bite': ['bit', 'bitten'],
    'bleed': ['bled'],
    'blow': ['blew', 'blown'],
    'break': ['broke', 'broken'],
    'bring': ['brought'],
    'build': ['built'],
    'burn': ['burnt'],
    'buy': ['bought'],

    'can': ['could'],
    'catch': ['caught'],
    'choose': ['chose', 'chosen'],
    'come': ['came', 'come'],
    'cost': ['cost'],
    'cut': ['cut'],

    'deal': ['dealt'],
    'do': ['did', 'done'],
    'draw': ['drew', 'drawn'],
    'dream': ['dreamt', 'dreamt'],
    'drink': ['drank', 'drunk'],
    'drive': ['drove', 'driven'],

    'eat': ['ate', 'eaten'],
    'fall': ['fell', 'fallen'],
    'feel': ['felt'],
    'fight': ['fought'],
    'find': ['found'],
    'fly': ['flew', 'flown'],
    'forget': ['forgot', 'forgotten'],
    'forgive': ['forgave', 'forgiven'],
    'freeze': ['froze', 'frozen'],

    'get': ['got', 'gotten'],
    'give': ['gave', 'given'],
    'go': ['went', 'gone'],
    'grow': ['grew', 'grown'],

    'hang': ['hung'],
    'have': ['had'],
    'hear': ['heard'],
    'hide': ['hid', 'hidden'],
    'hit': ['hit'],
    'hold': ['held'],
    'hurt': ['hurt'],
    'keep': ['kept'],
    'know': ['knew', 'known'],

    'lay': ['laid'],
    'lead': ['led'],
    'leave': ['left'],
    'lend': ['lent'],
    'let': ['let'],
    'light': ['lit'],
    'lose': ['lost'],
    'make': ['made'],
    'mean': ['meant'],
    'meet': ['met'],
    'pay': ['paid'],
    'put': ['put'],
    'read': ['read'],
    'ride': ['rode', 'ridden'],
    'ring': ['rang', 'rung'],
    'rise': ['rose', 'risen'],
    'run': ['ran', 'run'],

    'say': ['said'],
    'see': ['saw', 'seen'],
    'sell': ['sold', 'sold'],
    'send': ['sent'],
    'set': ['set'],
    'shake': ['shook', 'shaken'],
    'shine': ['shone'],
    'shoot': ['shot'],
    'show': ['showed', 'shown'],
    'shut': ['shut'],
    'sing': ['sang', 'sung'],
    'sink': ['sank', 'sunk'],
    'sit': ['sat'],
    'sleep': ['slept'],
    'speak': ['spoke', 'spoken'],
    'spend': ['spent'],
    'spill': ['spilled', 'spilt'],
    'spoil': ['spoilt'],
    'spread': ['spread'],
    'stand': ['stood'],
    'steal': ['stole', 'stolen'],
    'stick': ['stuck'],
    'swim': ['swam', 'swum'],
    'take': ['took', 'taken'],
    'teach': ['taught'],
    'tell': ['told'],
    'think': ['thought'],
    'throw': ['threw'],
    'understand': ['understood'],
    'upset': ['upset'],
    'wake': ['woke', 'woken'],
    'wear': ['wore', 'worn'],
    'win': ['won'],
    'write': ['wrote', 'written']
  }
var translation = {
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

var levels = [{
    name: '1',
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
    name: '2',
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
    name: '3',
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
    name: '4',
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


function createObj() {
  var arr = {};
  for (var i = 0; i < levels.length; i ++) {
    var level = levels[i].name;
    var contents = levels[i].contents;
    for (var ii = 0; ii < contents.length; ii ++) {
      var content = contents[ii];
      var letter = content.letter
      for (var iii = 0; iii < content.words.length; iii ++) {
        var word = content.words[iii];
        arr[word] = {};
        arr[word].letter = letter;
        arr[word].level = level;
        console.log('level is ', level)
      }
    }
  }
  return JSON.stringify(arr);
}

//console.log(createObj());


var consolidated = {"tell":{"letter": "T", "level": 1}, "be":{"letter":"B","level":"1"},"begin":{"letter":"B","level":"1"},"break":{"letter":"B","level":"1"},"bring":{"letter":"B","level":"1"},"buy":{"letter":"B","level":"1"},"can":{"letter":"C","level":"1"},"choose":{"letter":"C","level":"1"},"come":{"letter":"C","level":"1"},"do":{"letter":"D, E","level":"1"},"drink":{"letter":"D, E","level":"1"},"eat":{"letter":"D, E","level":"1"},"fall":{"letter":"F, G, H","level":"1"},"find":{"letter":"F, G, H","level":"1"},"get":{"letter":"F, G, H","level":"1"},"give":{"letter":"F, G, H","level":"1"},"go":{"letter":"F, G, H","level":"1"},"have":{"letter":"F, G, H","level":"1"},"hear":{"letter":"F, G, H","level":"1"},"know":{"letter":"K, L, M","level":"1"},"lose":{"letter":"K, L, M","level":"1"},"make":{"letter":"K, L, M","level":"1"},"meet":{"letter":"K, L, M","level":"1"},"put":{"letter":"P, R","level":"1"},"read":{"letter":"P, R","level":"1"},"run":{"letter":"P, R","level":"1"},"say":{"letter":"S","level":"1"},"see":{"letter":"S","level":"1"},"sing":{"letter":"S","level":"1"},"sit":{"letter":"S","level":"1"},"sleep":{"letter":"S","level":"1"},"speak":{"letter":"S","level":"1"},"spend":{"letter":"S","level":"1"},"swim":{"letter":"S","level":"1"}," ":{"letter":"T","level":"1"},"think":{"letter":"T","level":"1"},"become":{"letter":"B, C, D","level":"2"},"cost":{"letter":"B, C, D","level":"2"},"drive":{"letter":"B, C, D","level":"2"},"feel":{"letter":"F, G","level":"2"},"forget":{"letter":"F, G","level":"2"},"forgive":{"letter":"F, G","level":"2"},"grow":{"letter":"F, G","level":"2"},"keep":{"letter":"K, L, M","level":"2"},"leave":{"letter":"K, L, M","level":"2"},"let":{"letter":"K, L, M","level":"2"},"mean":{"letter":"K, L, M","level":"2"},"pay":{"letter":"P, R","level":"2"},"ride":{"letter":"P, R","level":"2"},"sell":{"letter":"S","level":"2"},"send":{"letter":"S","level":"2"},"set":{"letter":"S","level":"2"},"show":{"letter":"S","level":"2"},"stand":{"letter":"S","level":"2"},"take":{"letter":"T, U, W","level":"2"},"teach":{"letter":"T, U, W","level":"2"},"understand":{"letter":"T, U, W","level":"2"},"write":{"letter":"T, U, W","level":"2"},"bite":{"letter":"B, C","level":"3"},"build":{"letter":"B, C","level":"3"},"catch":{"letter":"B, C","level":"3"},"fight":{"letter":"F","level":"3"},"fly":{"letter":"F","level":"3"},"freeze":{"letter":"F","level":"3"},"hang":{"letter":"H","level":"3"},"hide":{"letter":"H","level":"3"},"hit":{"letter":"H","level":"3"},"hurt":{"letter":"H","level":"3"},"lead":{"letter":"L, R","level":"3"},"rise":{"letter":"L, R","level":"3"},"shake":{"letter":"S","level":"3"},"shut":{"letter":"S","level":"3"},"sink":{"letter":"S","level":"3"},"spill":{"letter":"S","level":"3"},"steal":{"letter":"S","level":"3"},"wake":{"letter":"W","level":"3"},"win":{"letter":"W","level":"3"},"wear":{"letter":"W","level":"3"},"bet":{"letter":"B","level":"4"},"bleed":{"letter":"B","level":"4"},"blow":{"letter":"B","level":"4"},"burn":{"letter":"B","level":"4"},"cut":{"letter":"C, D","level":"4"},"deal":{"letter":"C, D","level":"4"},"draw":{"letter":"C, D","level":"4"},"dream":{"letter":"C, D","level":"4"},"hold":{"letter":"H, L, R","level":"4"},"lend":{"letter":"H, L, R","level":"4"},"light":{"letter":"H, L, R","level":"4"},"lay":{"letter":"H, L, R","level":"4"},"ring":{"letter":"H, L, R","level":"4"},"shine":{"letter":"S","level":"4"},"shoot":{"letter":"S","level":"4"},"split":{"letter":"S","level":"4"},"spoil":{"letter":"S","level":"4"},"spread":{"letter":"S","level":"4"},"stick":{"letter":"S","level":"4"},"throw":{"letter":"T, U","level":"4"},"upset":{"letter":"T, U","level":"4"}}

function consolidate() {
  var newArr = [];
  var verb = Object.keys(verbs);

  verb.forEach(function(el) {
    var newV = {};
    newV.verb = el;
    newV.past = verbs[el];
    newV.russian = translation[el];
    if (!consolidated[el]) {
      console.log(el)
    }
    else {
      newV.level = consolidated[el]['level'];
      newV.letter = consolidated[el]['letter'];
    }
    newArr.push(newV);
  })
  return JSON.stringify(newArr);
  console.log(consolidated[el]);
}
console.log(consolidate());







