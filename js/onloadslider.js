function olay(layout){
		for(i=1;i<=4;i++){
			if(i==3) continue;
			var select_lay=d3.select(".lay"+i);
			var select_col=d3.select(".lay"+i).selectAll(".a");
			//debugger;
			select_col.selectAll("*").remove();
			//debugger;
			select_lay.classed("hidden",true);
		}
		var select_lay=d3.select("."+layout);
		select_lay.classed("hidden",false);
		//debugger;
		var select_col=select_lay.select(".row").selectAll(".a");
		//debugger;
		var num_of_layout=+layout.substr(layout.length-1);
		//debugger;
		select_col.each(function(d,i){
			display_options(this,num_of_layout);
		});
	}
function press(but){
		//debugger;
		var lay=d3.select(but).attr("class");
		var layout="lay"+lay.substr(0,lay.indexOf(" "));
		//debugger;
		d3.selectAll(".btn1").classed("active",false);
		d3.select(but).classed("active",true);
		olay(layout);
	}
function loadall1(){
	//alert("SC");
        var tooltip = d3.select('.toolt1');

        var width =500,
            height = 670;
			
        var svg = d3.select(".map1").append("svg")
            .attr("width", width)
            .attr("height", height);
         var scale2=d3.scale.linear()
                    .domain([59,350])
                    .range(["#deebf7","#3182bd"]);

        var scale3=d3.scale.linear()
                    .domain([50,310])
                    .range([2,1]);
        /*var scale2=d3.scale.linear()
                    .domain([0,2159880])
                    .range(["#1B4F72","#3498DB","#EBF5FB"]);

        var scale3=d3.scale.linear()
                    .domain([140206,2159880])
                    .range([2,1]);*/
        //debugger;
        var margin_data;
        var cberror;
        d3.tsv("csv/a.txt",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/districts.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [300,300];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
						   .style("opacity","0.8")
						   .style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SC);})
                           //debugger;
                           .style("stroke","black")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this.parentNode.appendChild(this)).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SC);})
						   .style("stroke","black").style("stroke-width","3").style("opacity","1");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 20) +
                                        'px; top:' + (mouse[1] +200) + 'px')

                                .html("District: "+margin_data[+(d.properties.ID_2)-101].NAME_2+"\nSC: "+ margin_data[+(d.properties.ID_2)-101].SC +"\nPopulation: "+margin_data[+(d.properties.ID_2)-101].POPULATION)
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SC);})
                            .style("stroke","black").style("stroke-width","1").style("opacity","0.8");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.ID_2
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].POPULATION<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.ID_2)-101].POPULATION);
                else
                  return 0.01;
                    });
          });
}
}
function loadall2(){
	//alert("PHC");
        var tooltip = d3.select('.toolt2');

        var width =500,
            height = 670;
        

        var win;
        var cberror;
        


        var svg = d3.select(".map2").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
         var scale2=d3.scale.linear()
                    .domain([6,58])
                    .range(["#e5f5e0","#31a354"]);

        var scale3=d3.scale.linear()
                    .domain([5,60])
                    .range([2,1]);
        var margin_data;
        var cberror;
        d3.tsv("csv/a.txt",function(error,data){
                          cberror=error;
                          margin_data=data;
        
        d3.json("csv/districts.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [300,300];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
						   .style("opacity","0.8")
						   .style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).PHC);})
                           //debugger;
                           .style("stroke","black")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this.parentNode.appendChild(this)).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).PHC);})
						   .style("stroke","black").style("stroke-width","3").style("opacity","1");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 20) +
                                        'px; top:' + (mouse[1] +200) + 'px')

                                .html("District: "+margin_data[+(d.properties.ID_2)-101].NAME_2+"\nPHC: "+ margin_data[+(d.properties.ID_2)-101].PHC +"\nPopulation: "+margin_data[+(d.properties.ID_2)-101].POPULATION)
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).PHC);})
                            .style("stroke","black").style("stroke-width","1").style("opacity","0.8");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.ID_2
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].POPULATION<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.ID_2)-101].POPULATION);
                else
                  return 0.01;
                    });
          });
}
}

function loadall3(){
	//alert("CHC");
        var tooltip = d3.select('.toolt3');

        var width =500,
            height = 670;
        

        var win;
        var cberror;
        


        var svg = d3.select(".map3").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
         var scale2=d3.scale.linear()
                    .domain([1,11])
                    .range(["#fee6ce","#e6550d"]);

        var scale3=d3.scale.linear()
                    .domain([1,11])
                    .range([2,1]);
        /*var scale2=d3.scale.linear()
                    .domain([0,2159880])
                    .range(["#1B4F72","#3498DB","#EBF5FB"]);

        var scale3=d3.scale.linear()
                    .domain([140206,2159880])
                    .range([2,1]);*/
        //debugger;
        var margin_data;
        var cberror;
        d3.tsv("csv/a.txt",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/districts.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [300,300];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
						   .style("opacity","0.8")
						   .style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).CHC);})
                           //debugger;
                           .style("stroke","black")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this.parentNode.appendChild(this)).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).CHC);})
						   .style("stroke","black").style("stroke-width","3").style("opacity","1");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 20) +
                                        'px; top:' + (mouse[1] +200) + 'px')

                                .html("District: "+margin_data[+(d.properties.ID_2)-101].NAME_2+"\nCHC: "+ margin_data[+(d.properties.ID_2)-101].CHC +"\nPopulation: "+margin_data[+(d.properties.ID_2)-101].POPULATION)
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).CHC);})
                            .style("stroke","black").style("stroke-width","1").style("opacity","0.8");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.ID_2
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].POPULATION<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.ID_2)-101].POPULATION);
                else
                  return 0.01;
                    });
          });
}
}

function loadall4(){
        var tooltip = d3.select('.toolt4');

        var width =500,
            height = 670;
        

        var win;
        var cberror;
        


        var svg = d3.select(".map4").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
         var scale2=d3.scale.linear()
                    .domain([0,5])
                    .range(["#efedf5","#756bb1"]);

        var scale3=d3.scale.linear()
                    .domain([0,5])
                    .range([2,1]);
        
        var margin_data;
        var cberror;
        d3.tsv("csv/a.txt",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/districts.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [300,300];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
						   .style("opacity","0.8")
						   .style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SDH);})
                           //debugger;
                           .style("stroke","black")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this.parentNode.appendChild(this)).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SDH);})
						   .style("stroke","black").style("stroke-width","3")
						   .style("opacity","1.0");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 20) +
                                        'px; top:' + (mouse[1] +200) + 'px')

                                .html("District: "+margin_data[+(d.properties.ID_2)-101].NAME_2+"\nSDH: "+ margin_data[+(d.properties.ID_2)-101].SDH +"\nPopulation: "+margin_data[+(d.properties.ID_2)-101].POPULATION)
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).SDH);})
							.style("opacity","0.8").style("stroke-width","1")
                            .style("stroke","black");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.ID_2
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].POPULATION<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.ID_2)-101].POPULATION);
                else
                  return 0.01;
                    });
          });
}
}


function loadall5(){
	//alert("DH");
        var tooltip = d3.select('.toolt5');

        var width =500,
            height = 670;
        

        var win;
        var cberror;
        


        var svg = d3.select(".map5").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
         var scale2=d3.scale.linear()
                    .domain([1,2])
                    .range(["#fee0d2","#de2d26"]);

        
        var margin_data;
        var cberror;
        d3.tsv("csv/a.txt",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/districts.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [300,300];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
						   .style("opacity","0.8")
						   .style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).DH);})
                           //debugger;
                           .style("stroke","black")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this.parentNode.appendChild(this)).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).DH);})
						   .style("stroke","black").style("stroke-width","3")
						   .style("opacity",'1');
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 20) +
                                        'px; top:' + (mouse[1] +200) + 'px')

                                .html("District: "+margin_data[+(d.properties.ID_2)-101].NAME_2+"\nDH: "+ margin_data[+(d.properties.ID_2)-101].DH +"\nPopulation: "+margin_data[+(d.properties.ID_2)-101].POPULATION)
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2((margin_data[+(d.properties.ID_2)-101]).DH);})
                            .style("stroke","black").style("opacity","0.8").style("stroke-width","1");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.ID_2
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].POPULATION<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.ID_2)-101].POPULATION);
                else
                  return 0.01;
                    });
          });
}
}
function barChart(){
	var svg1 = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg1.attr("width") - margin.left - margin.right,
    height = +svg1.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("csv/a.txt", function(d) {
  d.DH = +d.DH;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.NAME_2; }));
  y.domain([0, d3.max(data, function(d) { return d.DH; })]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("DH");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.NAME_2); })
      .attr("y", function(d) { return y(d.DH); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.DH); });
});
	
}

