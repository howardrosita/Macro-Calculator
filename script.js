let gender = $(this).data("gender");
let weight = $("#weight").val();
let heightFeet = $("#heightFeet").val();
let heightInc = $("#heightInc").val();
let age = $("#age").val();
let ree;
let activityFactors;
let carbohydratesRatio = .34;
let proteinRatio = .33;
let FatsRatio = .33;
let currentAF = $(".activityFactorBtn:checked").val();
let weightGoal = $(".weightGoalBtn:checked").val();;

//get value of gender
$(".mcalGender div").click(function(){
    gender = $(this).data("gender");
});

$(".activityFactorBtn").click(function(){
    currentAF = $(".activityFactorBtn:checked").val();
});

$(".weightGoalBtn").click(function(){
    weightGoal = $(".weightGoalBtn:checked").val();;
});

$("#calcBtn").click(function(){
    if(gender == "male"){
        ree = Math.round(66.47 + 13.75 * (weight/2.2) + 5 * ((heightInc*2.54)+(heightFeet*30.48))-6.76*age);
        activityFactors = {
            resting: 1,
            sendentary: 1.3,
            light: 1.6,
            moderate: 1.7,
            verActive: 2.1,
            extremelyActive: 2.4,
        }
    }else{
        ree = Math.round(655.1 + 9.65 * (weight/2.2) + 1.84 * ((heightInc*2.54)+(heightFeet*30.48))-4.368*age);
        activityFactors = {
            resting: 1,
            sendentary: 1.3,
            light: 1.5,
            moderate: 1.6,
            verActive: 1.9,
            extremelyActive: 2.2,
        }
    }
    
    let tee = ree * activityFactors[currentAF] + parseInt(weightGoal);
    
    let calCarbohydrates = Math.round(carbohydratesRatio * tee);
    let calProtein = Math.round(proteinRatio * tee);
    let calFats = Math.round(FatsRatio * tee);
    
    let gramsCarbohydrates = Math.round(calCarbohydrates/4);
    let gramsProtein = Math.round(calProtein/4);
    let gramsFats = Math.round(calFats/4);
    
    console.log(currentAF);
    console.log(activityFactors[currentAF]);
    console.log("Gender: " + gender);
    console.log("REE: " + ree);
    console.log("TEE: " + tee);
    console.log("Calories Carbohydrates: " + calCarbohydrates);
    console.log("Calories Protein: " + calProtein);
    console.log("Calories Fats: " + calFats);
    console.log("Grams Carbohydrates: " + gramsCarbohydrates);
    console.log("Grams Protein: " + gramsProtein);
    console.log("Grams Fats: " + gramsFats);

    let htmlTemplate =
    "<div><div>Carbohydrates**</div><div>Calories: " +
    calCarbohydrates + "</div><div> Grams: " + 
    gramsCarbohydrates + "</div></div>" + 
    "<div><div>Proteins</div><div>Calories: " +
    calProtein + "</div><div>Grams: " + 
    gramsProtein + "</div></div>" + 
    "<div><div>Fats</div><div>Calories: " +
    calFats + "</div><div> Grams: " + 
    gramsFats + "</div></div>"

    $(".macroResult").html(htmlTemplate);

});