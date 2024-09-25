

                           


(function() {

"use.strict"

    
angular.module("app",[])
    .controller("ctr", fctr);
fctr.$inject=["$scope"];
    


function fctr($scope){
    $scope.search =function (){
       

        if ( $scope.teamName===""){
         $scope.matches ="";
        }
        else{
             $scope.matches = matches;
            }

        
    };

    $scope.teamName="";
   
    
  

    

     matches=  [    {  
                       team1: "TJF",
                       team2: "OFFEE FC",
                       date : " 04 Aout ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "0",
                       goal2 : "0",
                       phase:"Match 1"
                     
                       },
                    {  team1: "FOUL TEKNIK",
                       team2: "BEL PLEZI",
                       date : "27 Aout ",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "0",
                       goal2 : "0",
                        phase:"Match 1"
                     
                       },
                      {  team1: "FIGE FC",
                       team2: "JANMET FC",
                       date : "05 Aout ",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 1"
                     
                       },
                       {  team1: "T. NEWSTAR",
                       team2: "FC FICA",
                       date : "07 Aout  ",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "3",
                         phase:"Match 1"
                     
                       },
                {  team1: "OFFEE FC",
                       team2: "RACING DE BIARRY",
                       date : "08 Aout ",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                         phase:"Match 2"
                     
                       },
                {  team1: "TJF",
                       team2: "BEL PLEZI",
                       date : "11 Aout ",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                 {  team1: "JANMET FC",
                       team2: "ASJT",
                       date : "09 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "6",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                
                 {  team1: "FIGE FC",
                       team2: "T. NEWSTAR",
                       date : "12 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                        phase:"Match 2"
                     
                       },
                {  team1: "FOUL TEKNIK",
                       team2: "RACING DE BIARRY",
                       date : "13 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                       phase:"Match 3"
                     
                       },
                 {  team1: "BEL PLEZI",
                       team2: "OFFEE FC",
                       date : "15 Aout",
                       hours: "Forfait",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "3",
                        phase:"Match 3"
                     
                       },
                 {  team1: "FICA FC",
                       team2: "ASJT",
                       date : "14 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                       phase:"Match 3"
                     
                       },
                 {   team1: "JANMET FC",
                       team2: "T. NEWSTAR",
                       date : "16 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "2",
                        phase:"Match 3"
                     
                       },
                 {  team1: "BEL PLEZI",
                       team2: "RACING DE BIARRY",
                       date : "19 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 4"
                     
                       },
                 
                 {  team1: "TJF",
                       team2: "FOUL TEKNIK",
                       date : "21 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                   phase:"Match 4"
                     
                       },
               
                     
                 {   team1: "FIGE FC",
                       team2: "ASJT",
                       date : "28 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "1",
                        phase:"Match 4"
                     
                       },
                 
                 {  team1: "JANMET FC",
                       team2: "FICA FC",
                       date : "20 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "0",
                       goal2 : "0",
                        phase:"Match 4"
                     
                       },
                 {   team1: "OFFEE FC",
                       team2: "FOUL TEKNIK",
                       date : "23 Aout",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "3",
                       goal2 : "0",
                        phase:"Match 5"
                     
                       },
                
              
                
                 {   team1: "TJF",
                       team2: "RACING DE BIARRY",
                       date : "26 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "1",
                        phase:"Match 5"
                     
                       },
                 {      team1: "ASJT",
                       team2: "T. NEWSTAR",
                       date : "22 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0",
                       goal2 : "2",
                        phase:"Match 5"
                     
                       },
                 {   team1: "FICA FC",
                       team2: "FIGE FC",
                       date : "25 Aout",
                       hours: "FM",
                       class1: "lost",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "1",
                       phase:"Match 5"
                     
                       },
                    
                   
                
                
                  { 
                       no:"20",
                       team1: "R. DE BIARRY",
                       team2: "FIGE FC",
                       date : "1er Sept",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                        phase:"Match 6"
                     
                       },
                 { 
                       no:"21",
                       team1: "JANMET FC",
                       team2: "TJF",
                       date : "03 Sept",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "0",
                        phase:"Match 6"
                     
                       },
                 { 
                       no:"22",
                       team1: "FICA FC",
                       team2: "FOUL TEKNIK",
                       date : "05 Sept",
                       hours: "AP",
                       class1: "lost",
                       class2: "win",
                       goal1 : "0 (2)",
                       goal2 : "0 (4)",
                        phase:"Match 6"
                     
                       },
                 { 
                       no:"23",
                       team1: "OFFEE FC",
                       team2: "T. NEWSTAR",
                       date : "06 Sept",
                       hours: "FM",
                       class1: "win",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                        phase:"Match 6"
                     
                       },
                
                
                 { 
                        no:"24",
                        team1: "R. DE BIARRY",
                        team2: "JANMET FC",
                        date : "09 Sept",
                        hours: "AP",
                        class1: "lost",
                        class2: "win",
                        goal1 : "1 (2)",
                        goal2 : "1 (4)",
                         phase:"Match 7"
                      
                        },


                 { 
                        no:"25",
                        team1: "FOUL TEKNIK",
                        team2: "OFFEE FC",
                        date : "10 Sept",
                        hours: "FM",
                        class1: "lost",
                        class2: "win",
                        goal1 : "0",
                        goal2 : "1",
                         phase:"Match 7"
                            
                              },


                 { 
                        no:"26",
                        team1: "JANMET FC",
                        team2: "OFFEE FC",
                        date : "24 Sept",
                        hours: "AP",
                        class1: "win",
                        class2: "lost",
                        goal1 : "0 (5)",
                        goal2 : "0 (4)",
                         phase:"Match 8"
                                  
                                    }

                   
                   ];
                    

 $scope.matchesGroup = matches;


     $scope.buteurs = [

         { goal: "5",
            name: "Miralson",
            team: "FC JANMET"},
          { goal: "2",
            name: "Chelguens",
            team: "T. NEWSTAR"},
          { goal: "2",
            name: "Amidel",
            team: "FC JANMET"},
         
         





         
     ];




    
}    







    
})();
















