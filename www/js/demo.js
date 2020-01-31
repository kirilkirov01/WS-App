type = ['primary', 'info', 'success', 'warning', 'danger'];
    $("#times1").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })
    $("#times2").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })
    $("#times3").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })
    $("#times4").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })  
    $("#times5").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })  
    $("#times6").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })  
    $("#times7").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })  
    $("#times8").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    })
    $("#times9").click(function(){
      setCookie("timeSpan",$(this).attr("value"),1)
            timGlobal = $(this).attr("value")
    }) 
demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 3.3,
            suggestedMax: 4.2,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    let url
    var labels
    var temp_data
    var hum_data
    var hi_data
    var dp_data
    var dps_data
    var absPres_data
    var relPres_data
    var volt_data
    var zamb_data
    var acc_data
    var trend_data

    function setLabels(val){
      labels = val
    }
    function setTemp(val){
      temp_data = val
    }
    function setHum(val){
      hum_data = val
    }
    function setHi(val){
      hi_data = val
    }
    function setDp(val){
      dp_data=val
    }
    function setDps(val){
      dps_data=val
    }
    function setAbsPres(val){
      absPres_data = val
    }
    function setRelPres(val){
      relPres_data=val
    }
    function setVolt(val){
      volt_data=val
    }
    function setZamb(val){
      zamb_data=val
    }
    function setAcc(val){
      acc_data=val
    }
    function setTrend(val){
      trend_data=val
    }

    var time
    var ws
    if(checkCookie("timeSpan")) {
      time = getCookie("timeSpan")
    }else {
      time = "6.hours.ago"  
    }
    if (checkCookie("WeatherStation")){
      ws=getCookie("WeatherStation")
    }else{
      ws= 1;
    }
    function updateData(){
      // if(checkCookie("timeSpan")) {
        // time = getCookie("timeSpan")
      // }else {
        time = timGlobal;
      // }
      // if (checkCookie("WeatherStation")){
      //   ws=getCookie("WeatherStation")
      // }else{
        ws= wsGlobal;
      // }
      url = "https://weather-station-server.herokuapp.com/getAll?weatherStation="+ws+"&timeSpan="+time

      $.ajax({url: url, type: "POST", success: function(result){
        console.log(result)
        let labels = _.pluck(result,"created_at")
        labels.forEach(function(v ,index, arr){
          arr[index] = new Date(v).getHours() +":"+ new Date(v).getMinutes() + " " + new Date(v).getDate()+"/"+ (new Date(v).getMonth() + 1);
        });
        setLabels(labels);
        setTemp(_.pluck(result,"temperatures"));
        setHum(_.pluck(result,"humidity"));
        setHi(_.pluck(result,"heatIndex"));
        setRelPres(_.pluck(result,"relativePressure"));
        setAbsPres(_.pluck(result,"absolutePressure"));
        setDp(_.pluck(result,"dewPoint"));
        setDps(_.pluck(result,"dewPointSpread"));
        setVolt(_.pluck(result,"voltageBattery"));
        setZamb(_.last(_.pluck(result,"zambrettisWords")));
        setAcc(_.last(_.pluck(result,"accuracyInPercents")));
        setTrend(_.last(_.pluck(result,"tendInWords")));
        let hi = ""
        if (hi_data == undefined) {
          hi = "</h2><h2 class='card-title'> Heat Index: "+hi_data[hi_data.length - 1]+" °C"
        }
        $(".firstGrText").html("Temperature: "+temp_data[temp_data.length - 1]+" °C"+ hi);      
        $(".secondGrText").html("Humidity: "+hum_data[hum_data.length - 1]+" %");
        $(".presG").html("<i class='tim-icons icon-bell-55 text-primary'></i> Relative: "+relPres_data[relPres_data.length - 1]+ " HPa</h3><h3 class='card-title'> Absolute: "+absPres_data[absPres_data.length-1]+" HPa");
        $(".DPG").html("<i class='tim-icons icon-send text-success '></i> Dew Point: "+dp_data[dp_data.length-1]+" °C</h3><h3 class='card-title'>"+" Dew Point Spread: "+dps_data[dps_data.length-1]+" °C")
        $(".voltG").html("<i class='tim-icons icon-delivery-fast text-info '></i> Current Voltage: "+volt_data[volt_data.length-1]+" V")
        $("#zamb").html(zamb_data);
        $("#acc").html(acc_data);
        $("#trend").html(trend_data);

        var data = myChartData.config.data;
        data.datasets[0].data = temp_data;
        data.datasets[1].data = hi_data;
        data.labels = labels;
        myChartData.update();

        var humi_data = myHumData.config.data;
        humi_data.datasets[0].data = hum_data;
        humi_data.labels = labels;
        myHumData.update();

        var pres_data = presChart.config.data;
        pres_data.datasets[0].data = absPres_data;
        pres_data.datasets[1].data = relPres_data;
        pres_data.labels = labels;
        presChart.update();

        var dpChart_data = dpChart.config.data;
        dpChart_data.datasets[0].data = dp_data;
        dpChart_data.datasets[1].data = dps_data;
        dpChart_data.labels = labels;
        dpChart.update();

        var voltChart_data = voltChart.config.data;
        voltChart_data.datasets[0].data = volt_data;
        voltChart.data.labels = labels;
        voltChart.update();
      }});


    }

    function initData(wsLocal, timLocal){
      url = "https://weather-station-server.herokuapp.com/getAll?weatherStation="+wsLocal+"&timeSpan="+timLocal

      $.ajax({url: url, type: "POST", async:false, success: function(result){
       console.log(result)
        let labels = _.pluck(result,"created_at")
        labels.forEach(function(v ,index, arr){
          arr[index] = new Date(v).getHours() +":"+ new Date(v).getMinutes() + " " + new Date(v).getDate()+"/"+ (new Date(v).getMonth()+1);
        });
        setLabels(labels);
        setTemp(_.pluck(result,"temperatures"));
        setHum(_.pluck(result,"humidity"));
        setHi(_.pluck(result,"heatIndex"));
        setRelPres(_.pluck(result,"relativePressure"));
        setAbsPres(_.pluck(result,"absolutePressure"));
        setDp(_.pluck(result,"dewPoint"));
        setDps(_.pluck(result,"dewPointSpread"));
        setVolt(_.pluck(result,"voltageBattery"));
        setZamb(_.last(_.pluck(result,"zambrettisWords")));
        setAcc(_.last(_.pluck(result,"accuracyInPercents")));
        setTrend(_.last(_.pluck(result,"tendInWords")));
      }});
      let hi = ""
      if (hi_data == undefined) {
        hi = "</h2><h2 class='card-title'> Heat Index: "+hi_data[hi_data.length - 1]+" °C"
      }
      $(".firstGrText").html("Temperature: "+temp_data[temp_data.length - 1]+" °C"+ hi);      
      $(".secondGrText").html("Humidity: "+hum_data[hum_data.length - 1]+" %");     
      $(".presG").html("<i class='tim-icons icon-bell-55 text-primary'></i> Relative: "+relPres_data[relPres_data.length - 1]+ " HPa</h3><h3 class='card-title'> Absolute: "+absPres_data[absPres_data.length-1]+" HPa");
      $(".DPG").html("<i class='tim-icons icon-send text-success '></i> Dew Point: "+dp_data[dp_data.length-1]+" °C</h3><h3 class='card-title'>"+" Dew Point Spread: "+dps_data[dps_data.length-1]+" °C")
      $(".voltG").html("<i class='tim-icons icon-delivery-fast text-info '></i> Current Voltage: "+volt_data[volt_data.length-1]+" V")
      $("#zamb").html(zamb_data);
      $("#acc").html(acc_data);
      $("#trend").html(trend_data);
    }
    initData(wsGlobal, timGlobal);

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');

    $(".voltG").html("<i class='tim-icons icon-delivery-fast text-info '></i> Current Voltage: "+volt_data[volt_data.length-1]+" V")
    var voltChart_data = {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      labels: labels,
      datasets: [
      {
        label: "Volts",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: '#1f8ef1',
        borderWidth: 3,
        borderDash: [],
        borderDashOffset: 0.0,
        data: volt_data,
      }
      ]
    }
    var voltChart = new Chart(ctx,{
      type:"bar",
      data: voltChart_data,
      options: gradientBarChartConfiguration
    }
    );


    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');


    $(".presG").html("<i class='tim-icons icon-bell-55 text-primary'></i> Relative: "+relPres_data[relPres_data.length - 1]+ " HPa</h3><h3 class='card-title'> Absolute: "+absPres_data[absPres_data.length-1]+" HPa");

    var pres_data = {
      labels: labels,
      datasets: [{
        label: "Absolute Pressure",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 3,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 1,
        data: absPres_data,
      },
      {
        label: "Relative Pressure",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ffff66',
        borderWidth: 3,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ffff66',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ffff66',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 1,
        data: relPres_data,
      }]
    };

    var presChart = new Chart(ctx, {
      type: 'line',
      data: pres_data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');

    $(".DPG").html("<i class='tim-icons icon-send text-success '></i> Dew Point: "+dp_data[dp_data.length-1]+" °C</h3><h3 class='card-title'>"+" Dew Point Spread: "+dps_data[dps_data.length-1]+" °C")

    var dpChart_data = {
      labels: labels,
      datasets: [{
        label: "Dew Point",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00ffff',
        borderWidth: 3,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00ffff',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00ffff',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 1,
        data: dp_data,
      },
      {
        label: "Dew Point Spread",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 3,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 1,
        data: dps_data,
      }

      ]
    };

    var dpChart = new Chart(ctxGreen, {
      type: 'line',
      data: dpChart_data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });

    if (checkCookie("WeatherStation")){
      let ws=getCookie("WeatherStation")
      $("#"+(ws-1)).addClass("active")
        for(let i = 0; i<3; i++){
          if((ws-1)==i)continue;
          else $("#"+i).removeClass("active")
        }
      let hi = ""
      if (hi_data == undefined) {
        hi = "</h2><h2 class='card-title'> Heat Index: "+hi_data[hi_data.length - 1]+" °C"
      }
      $(".firstGrText").html("Temperature: "+temp_data[temp_data.length - 1]+" °C"+ hi);      
      $(".secondGrText").html("Humidity: "+hum_data[hum_data.length - 1]+" %");
    }

    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    var config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Temperature",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00ff66',
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00ff66',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00ff66',
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: temp_data,
        },
        {
          label: "Heat Index",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#66ff66',
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#66ff66',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#66ff66',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: hi_data,
        },

        ]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);

    var ctx = document.getElementById("chartBig2").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    var config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Humidity",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#0066ff',
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#0066ff',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#0066ff',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: hum_data,
        },

        ]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myHumData = new Chart(ctx, config);


    $("#zamb").html(zamb_data);
    $("#acc").html(acc_data);
    $("#trend").html(trend_data);

    $("#0").click(function() {
      setCookie("WeatherStation", 1,"1")
      wsGlobal = 1;
      updateData();      
    });

    $("#1").click(function() {
      setCookie("WeatherStation", 2,"1")
      wsGlobal = 2; 
      updateData();
    });

    $("#2").click(function() {
      setCookie("WeatherStation", 3, "1")
      wsGlobal = 3;
      updateData();
    });
    $("#3").click(function() {
      setCookie("WeatherStation", 4, "1")
      wsGlobal = 4;
      updateData();
    });
    function autoUpdate() {
    // runs every 60 sec and runs on init.
      if(!(checkCookie("weatherStation"))){
        setCookie("WeatherStation", 1,"1")
      }
      updateData();
    }
    setInterval(autoUpdate, 60*1000*2);

  },



};
