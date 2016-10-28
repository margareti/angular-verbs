// Encoding: UTF-8


var verbsApp = angular.module('verbs', []);

// angular.module('verbs', [
//   'ui.router',
//   'angular-jwt'
// ]).config(function ($urlRouterProvider) {
//   $urlRouterProvider.otherwise('/login');
// });

verbsApp.controller('verbsController', function verbsController($scope) {

  $scope.checkboxes = {};

  $scope.getChecked = function() {
    console.log($scope.checkboxes);   
  }
  $scope.selection = {};

  $scope.toggleVerb = function(item) {
    if ($scope.selection[item.verb]) {
      delete $scope.selection[item.verb];
    } else {
      $scope.selection[item.verb] = item;
    }
    console.log($scope.selection);
  }

  $scope.vocab = [  
   {  
      "verb":"be",
      "past":[  
         "was/were",
         "been"
      ],
      "russian":"быть",
      "level":"1",
      "letter":"B"
   },
   {  
      "verb":"become",
      "past":[  
         "became",
         "become"
      ],
      "russian":"cтановиться",
      "level":"2",
      "letter":"B, C, D"
   },
   {  
      "verb":"begin",
      "past":[  
         "began",
         "begun"
      ],
      "russian":"начинать",
      "level":"1",
      "letter":"B"
   },
   {  
      "verb":"bet",
      "past":[  
         "bet"
      ],
      "russian":"делать ставки",
      "level":"4",
      "letter":"B"
   },
   {  
      "verb":"bite",
      "past":[  
         "bit",
         "bitten"
      ],
      "russian":"кусаться",
      "level":"3",
      "letter":"B, C"
   },
   {  
      "verb":"bleed",
      "past":[  
         "bled"
      ],
      "russian":"кровоточить",
      "level":"4",
      "letter":"B"
   },
   {  
      "verb":"blow",
      "past":[  
         "blew",
         "blown"
      ],
      "russian":"дуть",
      "level":"4",
      "letter":"B"
   },
   {  
      "verb":"break",
      "past":[  
         "broke",
         "broken"
      ],
      "russian":"ломать",
      "level":"1",
      "letter":"B"
   },
   {  
      "verb":"bring",
      "past":[  
         "brought"
      ],
      "russian":"приносить",
      "level":"1",
      "letter":"B"
   },
   {  
      "verb":"build",
      "past":[  
         "built"
      ],
      "russian":"строить",
      "level":"3",
      "letter":"B, C"
   },
   {  
      "verb":"burn",
      "past":[  
         "burnt"
      ],
      "russian":"жечь",
      "level":"4",
      "letter":"B"
   },
   {  
      "verb":"buy",
      "past":[  
         "bought"
      ],
      "russian":"покупать",
      "level":"1",
      "letter":"B"
   },
   {  
      "verb":"can",
      "past":[  
         "could"
      ],
      "russian":"быть способным",
      "level":"1",
      "letter":"C"
   },
   {  
      "verb":"catch",
      "past":[  
         "caught"
      ],
      "russian":"ловить",
      "level":"3",
      "letter":"B, C"
   },
   {  
      "verb":"choose",
      "past":[  
         "chose",
         "chosen"
      ],
      "russian":"выбирать",
      "level":"1",
      "letter":"C"
   },
   {  
      "verb":"come",
      "past":[  
         "came",
         "come"
      ],
      "russian":"приходить",
      "level":"1",
      "letter":"C"
   },
   {  
      "verb":"cost",
      "past":[  
         "cost"
      ],
      "russian":"стоить",
      "level":"2",
      "letter":"B, C, D"
   },
   {  
      "verb":"cut",
      "past":[  
         "cut"
      ],
      "russian":"ломать",
      "level":"4",
      "letter":"C, D"
   },
   {  
      "verb":"deal",
      "past":[  
         "dealt"
      ],
      "russian":"справляться с чем-то",
      "level":"4",
      "letter":"C, D"
   },
   {  
      "verb":"do",
      "past":[  
         "did",
         "done"
      ],
      "russian":"делать",
      "level":"1",
      "letter":"D, E"
   },
   {  
      "verb":"draw",
      "past":[  
         "drew",
         "drawn"
      ],
      "russian":"рисовать",
      "level":"4",
      "letter":"C, D"
   },
   {  
      "verb":"dream",
      "past":[  
         "dreamt",
         "dreamt"
      ],
      "russian":"мечтать",
      "level":"4",
      "letter":"C, D"
   },
   {  
      "verb":"drink",
      "past":[  
         "drank",
         "drunk"
      ],
      "russian":"пить",
      "level":"1",
      "letter":"D, E"
   },
   {  
      "verb":"drive",
      "past":[  
         "drove",
         "driven"
      ],
      "russian":"водить машину",
      "level":"2",
      "letter":"B, C, D"
   },
   {  
      "verb":"eat",
      "past":[  
         "ate",
         "eaten"
      ],
      "russian":"есть",
      "level":"1",
      "letter":"D, E"
   },
   {  
      "verb":"fall",
      "past":[  
         "fell",
         "fallen"
      ],
      "russian":"падать",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"feel",
      "past":[  
         "felt"
      ],
      "russian":"чувствовать",
      "level":"2",
      "letter":"F, G"
   },
   {  
      "verb":"fight",
      "past":[  
         "fought"
      ],
      "russian":"бороться",
      "level":"3",
      "letter":"F"
   },
   {  
      "verb":"find",
      "past":[  
         "found"
      ],
      "russian":"находить",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"fly",
      "past":[  
         "flew",
         "flown"
      ],
      "russian":"летать",
      "level":"3",
      "letter":"F"
   },
   {  
      "verb":"forget",
      "past":[  
         "forgot",
         "forgotten"
      ],
      "russian":"забывать",
      "level":"2",
      "letter":"F, G"
   },
   {  
      "verb":"forgive",
      "past":[  
         "forgave",
         "forgiven"
      ],
      "russian":"прощать",
      "level":"2",
      "letter":"F, G"
   },
   {  
      "verb":"freeze",
      "past":[  
         "froze",
         "frozen"
      ],
      "russian":"замерзать",
      "level":"3",
      "letter":"F"
   },
   {  
      "verb":"get",
      "past":[  
         "got",
         "gotten"
      ],
      "russian":"получать",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"give",
      "past":[  
         "gave",
         "given"
      ],
      "russian":"давать",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"go",
      "past":[  
         "went",
         "gone"
      ],
      "russian":"идти/ехать",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"grow",
      "past":[  
         "grew",
         "grown"
      ],
      "russian":"расти",
      "level":"2",
      "letter":"F, G"
   },
   {  
      "verb":"hang",
      "past":[  
         "hung"
      ],
      "russian":"висеть",
      "level":"3",
      "letter":"H"
   },
   {  
      "verb":"have",
      "past":[  
         "had"
      ],
      "russian":"иметь",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"hear",
      "past":[  
         "heard"
      ],
      "russian":"слышать",
      "level":"1",
      "letter":"F, G, H"
   },
   {  
      "verb":"hide",
      "past":[  
         "hid",
         "hidden"
      ],
      "russian":"прятать",
      "level":"3",
      "letter":"H"
   },
   {  
      "verb":"hit",
      "past":[  
         "hit"
      ],
      "russian":"ударять",
      "level":"3",
      "letter":"H"
   },
   {  
      "verb":"hold",
      "past":[  
         "held"
      ],
      "russian":"держать",
      "level":"4",
      "letter":"H, L, R"
   },
   {  
      "verb":"hurt",
      "past":[  
         "hurt"
      ],
      "russian":"обижать",
      "level":"3",
      "letter":"H"
   },
   {  
      "verb":"keep",
      "past":[  
         "kept"
      ],
      "russian":"хранить",
      "level":"2",
      "letter":"K, L, M"
   },
   {  
      "verb":"know",
      "past":[  
         "knew",
         "known"
      ],
      "russian":"знать",
      "level":"1",
      "letter":"K, L, M"
   },
   {  
      "verb":"lay",
      "past":[  
         "laid"
      ],
      "russian":"лежать",
      "level":"4",
      "letter":"H, L, R"
   },
   {  
      "verb":"lead",
      "past":[  
         "led"
      ],
      "russian":"вести за собой",
      "level":"3",
      "letter":"L, R"
   },
   {  
      "verb":"leave",
      "past":[  
         "left"
      ],
      "russian":"оставлять/покидать",
      "level":"2",
      "letter":"K, L, M"
   },
   {  
      "verb":"lend",
      "past":[  
         "lent"
      ],
      "russian":"давать взаймы",
      "level":"4",
      "letter":"H, L, R"
   },
   {  
      "verb":"let",
      "past":[  
         "let"
      ],
      "russian":"разрешать",
      "level":"2",
      "letter":"K, L, M"
   },
   {  
      "verb":"light",
      "past":[  
         "lit"
      ],
      "russian":"зажигать",
      "level":"4",
      "letter":"H, L, R"
   },
   {  
      "verb":"lose",
      "past":[  
         "lost"
      ],
      "russian":"терять",
      "level":"1",
      "letter":"K, L, M"
   },
   {  
      "verb":"make",
      "past":[  
         "made"
      ],
      "russian":"создавать",
      "level":"1",
      "letter":"K, L, M"
   },
   {  
      "verb":"mean",
      "past":[  
         "meant"
      ],
      "russian":"означать",
      "level":"2",
      "letter":"K, L, M"
   },
   {  
      "verb":"meet",
      "past":[  
         "met"
      ],
      "russian":"встречать",
      "level":"1",
      "letter":"K, L, M"
   },
   {  
      "verb":"pay",
      "past":[  
         "paid"
      ],
      "russian":"платить",
      "level":"2",
      "letter":"P, R"
   },
   {  
      "verb":"put",
      "past":[  
         "put"
      ],
      "russian":"класть/ставить",
      "level":"1",
      "letter":"P, R"
   },
   {  
      "verb":"read",
      "past":[  
         "read"
      ],
      "russian":"читать",
      "level":"1",
      "letter":"P, R"
   },
   {  
      "verb":"ride",
      "past":[  
         "rode",
         "ridden"
      ],
      "russian":"ездить",
      "level":"2",
      "letter":"P, R"
   },
   {  
      "verb":"ring",
      "past":[  
         "rang",
         "rung"
      ],
      "russian":"звонить",
      "level":"4",
      "letter":"H, L, R"
   },
   {  
      "verb":"rise",
      "past":[  
         "rose",
         "risen"
      ],
      "russian":"подниматься",
      "level":"3",
      "letter":"L, R"
   },
   {  
      "verb":"run",
      "past":[  
         "ran",
         "run"
      ],
      "russian":"бежать",
      "level":"1",
      "letter":"P, R"
   },
   {  
      "verb":"say",
      "past":[  
         "said"
      ],
      "russian":"говорить",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"see",
      "past":[  
         "saw",
         "seen"
      ],
      "russian":"видеть",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"sell",
      "past":[  
         "sold",
         "sold"
      ],
      "russian":"продавать",
      "level":"2",
      "letter":"S"
   },
   {  
      "verb":"send",
      "past":[  
         "sent"
      ],
      "russian":"отправлять",
      "level":"2",
      "letter":"S"
   },
   {  
      "verb":"set",
      "past":[  
         "set"
      ],
      "russian":"ставить",
      "level":"2",
      "letter":"S"
   },
   {  
      "verb":"shake",
      "past":[  
         "shook",
         "shaken"
      ],
      "russian":"трясти",
      "level":"3",
      "letter":"S"
   },
   {  
      "verb":"shine",
      "past":[  
         "shone"
      ],
      "russian":"блестеть",
      "level":"4",
      "letter":"S"
   },
   {  
      "verb":"shoot",
      "past":[  
         "shot"
      ],
      "russian":"стрелять",
      "level":"4",
      "letter":"S"
   },
   {  
      "verb":"show",
      "past":[  
         "showed",
         "shown"
      ],
      "russian":"показывать",
      "level":"2",
      "letter":"S"
   },
   {  
      "verb":"shut",
      "past":[  
         "shut"
      ],
      "russian":"закрывать",
      "level":"3",
      "letter":"S"
   },
   {  
      "verb":"sing",
      "past":[  
         "sang",
         "sung"
      ],
      "russian":"петь",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"sink",
      "past":[  
         "sank",
         "sunk"
      ],
      "russian":"тонуть",
      "level":"3",
      "letter":"S"
   },
   {  
      "verb":"sit",
      "past":[  
         "sat"
      ],
      "russian":"сидеть",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"sleep",
      "past":[  
         "slept"
      ],
      "russian":"спать",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"speak",
      "past":[  
         "spoke",
         "spoken"
      ],
      "russian":"говорить",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"spend",
      "past":[  
         "spent"
      ],
      "russian":"тратить",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"spill",
      "past":[  
         "spilled",
         "spilt"
      ],
      "russian":"проливать",
      "level":"3",
      "letter":"S"
   },
   {  
      "verb":"spoil",
      "past":[  
         "spoilt"
      ],
      "russian":"портить",
      "level":"4",
      "letter":"S"
   },
   {  
      "verb":"spread",
      "past":[  
         "spread"
      ],
      "russian":"расправлять",
      "level":"4",
      "letter":"S"
   },
   {  
      "verb":"stand",
      "past":[  
         "stood"
      ],
      "russian":"стоять",
      "level":"2",
      "letter":"S"
   },
   {  
      "verb":"steal",
      "past":[  
         "stole",
         "stolen"
      ],
      "russian":"красть",
      "level":"3",
      "letter":"S"
   },
   {  
      "verb":"stick",
      "past":[  
         "stuck"
      ],
      "russian":"прилипать",
      "level":"4",
      "letter":"S"
   },
   {  
      "verb":"swim",
      "past":[  
         "swam",
         "swum"
      ],
      "russian":"плавать",
      "level":"1",
      "letter":"S"
   },
   {  
      "verb":"take",
      "past":[  
         "took",
         "taken"
      ],
      "russian":"брать",
      "level":"2",
      "letter":"T, U, W"
   },
   {  
      "verb":"teach",
      "past":[  
         "taught"
      ],
      "russian":"преподавать",
      "level":"2",
      "letter":"T, U, W"
   },
   {  
      "verb":"tell",
      "past":[  
         "told"
      ],
      "russian":"рассказывать",
      "level":1,
      "letter":"T"
   },
   {  
      "verb":"think",
      "past":[  
         "thought"
      ],
      "russian":"думать",
      "level":"1",
      "letter":"T"
   },
   {  
      "verb":"throw",
      "past":[  
         "threw"
      ],
      "russian":"бросать",
      "level":"4",
      "letter":"T, U"
   },
   {  
      "verb":"understand",
      "past":[  
         "understood"
      ],
      "russian":"понимать",
      "level":"2",
      "letter":"T, U, W"
   },
   {  
      "verb":"upset",
      "past":[  
         "upset"
      ],
      "russian":"расстраивать",
      "level":"4",
      "letter":"T, U"
   },
   {  
      "verb":"wake",
      "past":[  
         "woke",
         "woken"
      ],
      "russian":"просыпаться",
      "level":"3",
      "letter":"W"
   },
   {  
      "verb":"wear",
      "past":[  
         "wore",
         "worn"
      ],
      "russian":"носить",
      "level":"3",
      "letter":"W"
   },
   {  
      "verb":"win",
      "past":[  
         "won"
      ],
      "russian":"выигрывать",
      "level":"3",
      "letter":"W"
   },
   {  
      "verb":"write",
      "past":[  
         "wrote",
         "written"
      ],
      "russian":"писать",
      "level":"2",
      "letter":"T, U, W"
    } 
  ]
  $scope.levels = [];

  angular.forEach($scope.vocab, function(el) {
    var current = el;
    if (!$scope.levels[current.level - 1]) {
      $scope.levels[current.level - 1] = {};
    }
    if (!$scope.levels[current.level - 1][el.letter]) {
      $scope.levels[current.level - 1][el.letter] = [];
    }
    $scope.levels[current.level - 1][el.letter].push(el);
  })
  console.log($scope.levels)
});