'use strick'

var bois = [
  { "brinco": "ABM12223", "peso1": "397,99", "peso2": "435,96", "peso3": "534,76" },
  { "brinco": "FDFVFF23", "peso1": "345,67", "peso2": "410,49", "peso3": "578,76" },
  { "brinco": "ABMDFGC3", "peso1": "367,87", "peso2": "458,09", "peso3": "504,76" },
  { "brinco": "FSGHDS23", "peso1": "365,54", "peso2": "460,89", "peso3": "575,76" }
];
var app = angular.module('appBalanca', []);

app.config(function($routeProvider) {
  $routeProvider.
    when('/Home', {
      templateUrl: 'templates/home.html',
      controller: 'ctrlHome'
    }).
    when('/NewBull', {
      templateUrl: 'templates/newbull.html',
      controller: 'ctrlNewBull'
    }).
    when('/NewWeighing', {
      templateUrl: 'templates/newweighing.html',
      controller: 'ctrlNewWeighing'
    }).      
    when('/ConBull', {
      templateUrl: 'templates/conbull.html',
      controller: 'ctrlConBull'
    }).      
    when('/ConAll', {
      templateUrl: 'templates/conall.html',
      controller: 'ctrlConAll'
    }).  
    when('/ConWeighing', {
      templateUrl: 'templates/conweighing.html',
      controller: 'ctrlConWeighing'
    }).
    when('/AbaterBull', {
      templateUrl: 'templates/abaterbull.html',
      controller: 'ctrlAbaterBull'
    }).     
    otherwise({
      redirectTo: '/Home'
	});
});

app.controller('ctrlHome', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlBalanca', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlConBull', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlNewWeighing', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlConWeighing', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlAbaterBull', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlConAll', ['$scope', function ($scope) {

  angular.extend($scope, {
    bois: bois
  });

  $scope.evolucao = function(peso1, peso2) {    
    return (parseInt(peso2) - parseInt(peso1)) + " Kg" + " - " + (((parseInt(peso2) - parseInt(peso1)) * 100) / parseInt(peso1)).toFixed(0) + "%";
  };

  $scope.gerarPDF = function() {        
    var doc = new jsPDF();
    var imgData = 'data:image/jpeg;base64,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';
    var doc = new jsPDF();
    doc.setFontSize(30);
    doc.addImage(imgData, 'JPEG', 15, 10, 40, 20);
    doc.text(75, 25, "Rancho Bom");
    $scope.popular(doc);    
    doc.save("Relatorio.pdf");
  }; 

  $scope.popular = function(doc){    
    doc.setFontSize(14);
    doc.text(10, 45, "Brinco");        
    doc.text(40, 45, "01/03");
    doc.text(60, 45, "05/04");
    doc.text(80, 45, "Evolução");
    doc.text(115, 45, "04/06");
    doc.text(135, 45, "Evolução");
    doc.text(172, 45, "Geral");

    var linha = 55;
    var coluna = [10,40,60,80,115,135,172];
    var _coluna = 0;
    
    doc.setFontSize(12);
    
    for(var i = 0; $scope.bois.length > i; i++){          
      doc.text(coluna[_coluna], linha, $scope.bois[i].brinco);
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.bois[i].peso1);
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.bois[i].peso2);
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.evolucao($scope.bois[i].peso1, $scope.bois[i].peso2));
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.bois[i].peso3);
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.evolucao($scope.bois[i].peso2, $scope.bois[i].peso3));
      _coluna++;
      doc.text(coluna[_coluna], linha, $scope.evolucao($scope.bois[i].peso1, $scope.bois[i].peso3));
      linha = linha + 10;
      _coluna = 0;

    }
  };
  
}]);

app.controller('ctrlNewBull', ['$scope', function ($scope) {

  angular.extend($scope, {
    brinco: ""    
  });

  $('#nascimento').datepicker({
    autoclose: true,
    format: "dd/mm/yyyy"
  });

  $scope.salvar = function(){
    alert("Salvo com sucesso!");
  };

  $scope.limpar = function(){
     angular.extend($scope, {
      brinco: ""      
    });
  };

}]);