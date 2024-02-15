$(".clear").hide();

var seaAnimals=["https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2021/07/070721_JC_otter-muscles_feat.jpg","https://sealconservancy.org/images/HarborSeal4.jpg","https://s3.animalia.bio/animals/photos/medium/original/antarctica.webp"];

var captions =["Sea Otter", "Harbor Seal", "Emperor Penguin"];
//for(var animal of seaAnimals){ 
  //      $(".coconut").append("<img src=" + animal + ">");     
// }
$.each(seaAnimals, function(index, value) {
    $("#coconut").append("<div class='image-container'><img src='" + value + "'>" + "<figcaption>" + captions[index] + "</figcaption></div>");
        }); //used online resources
$(".add").click(function() {
    var news = $(".picture-url").val();
    var pops = $(".cap").val();
    seaAnimals.push(news);
    captions.push(pops);
    $("#coconut").append("<div class='image-container'><img src='" + news + "'>" + "<figcaption>" + pops + "</figcaption></div>");
    $(".numImages").text(seaAnimals.length);
    $(".clear").show();
    if (news === "" || pops === "") {
         alert("Please add an image link and caption!  :(");
    }
    $('.picture-url, .cap').val('');
});

$(".clear").click(function() {
    seaAnimals.pop();
    $(".gallery .image-container:last-child").remove();
    $(".numImages").text(seaAnimals.length);
});

