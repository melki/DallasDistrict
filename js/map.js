function go() {

    d3.xml("data/dallas.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;

        $("#map").html("");
        var a = document.getElementById("map").appendChild(xml.documentElement);

        var paths = d3.selectAll("path");
        
        var color = d3.scale.category20();
        

        randomMove = [];
        for (var i = 0; i < 14; i++) {
            randomMove[i] = { 'x': Math.random() * 1000 - 500, 'y': Math.random() * 1000 - 500 };
        }
        

        console.log(randomMove)

        //paths.attr('transform', function(d,i){return "translate(" + randomMove[i].x + "," + randomMove[i].y + ")";  });



        paths.style("opacity", 0)
            .style("fill", function(d, i) {
                return color(i)
            });

        paths.attr('transform', function(d,i){return "translate(" + (randomMove[i].x) + "," + (randomMove[i].y) + ")";  });


        paths.transition()
           
            .duration(function(d, i) {
                return i * 400;
            })
            .style("opacity", .7)
            .duration(1500)
            .attr('transform', "translate(-148,-253)");

        paths
          .on("click",function(){
            d = d3.select(this);
            $("#isdName").html(d.attr('name'));
            
            
            
          })
          .on("mouseover", function(d, i) {
            d = d3.select(this);
            d.transition()
                .duration(100)
                .style('opacity', 1);
                
        }).on("mouseout", function(d, i) {
            d = d3.select(this);
            d.transition()
                .duration(100)
                .style('opacity', '.7');
                
        });









    });
}


go()