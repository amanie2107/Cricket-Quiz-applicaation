var quiz = angular.module("quizApp",["googlechart"]);

quiz.controller("quizCtrl",['$scope', function($scope){
	
	$scope.answers ={};
	$scope.ansCount = 0;
	$scope.selectedData ={};
	$scope.selectAllQuesion= false;
	$scope.quizData = [
	{
		"ques":"1. When was the last time India won the cricket world cup ? ",
			"options":[{ "id":"1",
			"option":"2007"},
			{"id":"2","option":"2009"},
			{"id":"3","option":"2010"},
			{"id":"4","option":"2011"}
		],
		"ans":"2011"
	},
	{
		"ques":"2. What is the highest individual score by a batsman in Test Cricket ? ",
			"options":[{ "id":"1",
			"option":"400"},
			{"id":"2","option":"375"},
			{"id":"3","option":"380"},
			{"id":"4","option":"410"}
		],
		"ans":"400"
	},
	{
		"ques":"3. Who has won the most number of cricket world cup  ? ",
			"options":[{ "id":"1",
			"option":"India"},
			{"id":"2","option":"England"},
			{"id":"3","option":"South Africa"},
			{"id":"4","option":"Austalia"}
			],
		"ans":"Austalia"
	},
	{
		"ques":"4. How many international centuries Sachin has under his name in ODI ? ",
		"options":[{ "id":"1",
			"option":"51"},
			{"id":"2","option":"49"},
			{"id":"2","option":"50"},
			{"id":"2","option":"101"}
			],
		"ans":"49"
	}
];


 $scope.selectedItemChanged = function(){
    $scope.selectAllQuesion = false;
  };

  $scope.result = function(){

  	$scope.ansCount = 0;
    for(var i=0;i<$scope.quizData.length;i++)
    {
    	if(!$scope.selectedData[i])
    	{
    		$scope.selectAllQuesion = true;
    		break;
    	}
    	else
    	{
    		if($scope.selectedData[i] == $scope.quizData[i].ans)
    		{
    			$scope.ansCount++;
    		}
    	}
    }
    	if($scope.ansCount > 0)
    	{
    		drawTopX();
    	}
    console.log("dddd" + $scope.ansCount);
  }; 

  $scope.clearData = function(){
    $scope.selectedData = {};
     $scope.myChartObject.data = {"cols": [
        {id: "t",  label: "a",type: "string"},
        {id: "s", label: "Count", type: "number"}
    ], "rows": [
        {c: [
            {v: "Correct"},
            {v: 0},
        ]},
        {c: [
            {v: "Incorrect"},
            {v: 0}
        ]}
    ]};

  };


function drawTopX() {
	console.log("hi");
	$scope.myChartObject = {};
    
    $scope.myChartObject.type = "ColumnChart";
    
    

    $scope.myChartObject.data = {"cols": [
        {id: "t",  label: "a",type: "string"},
        {id: "s", label: "Count", type: "number"}
    ], "rows": [
        {c: [
            {v: "Correct"},
            {v: $scope.ansCount},
        ]},
        {c: [
            {v: "Incorrect"},
            {v: $scope.quizData.length - $scope.ansCount}
        ]}
    ]};

    $scope.myChartObject.options = {
        'title': 'Quiz Analysis'
    };
  }


}]);