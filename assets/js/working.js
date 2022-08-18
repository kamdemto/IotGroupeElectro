
/* Outage */

var options = {
    series: [{
    name: 'Outage',
    data: [18, 17, 16, 15, 14, 12, 6]
  }, {
    name: 'sector',
    data: [6, 7, 8, 8, 9, 10, 12]
  }],
    chart: {
    type: 'bar',
    height: 400,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: ''
  },
  xaxis: {
    categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val 
      }
    }
  },
  fill: {
    opacity: 1
  
 
  },colors: ['#303e67', '#f5af13'],
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#oustage"), options);
  chart.render();

 /* working */

var options = {
    series: [{
    name: 'Working',
    data: [18, 17, 16, 15, 14, 12, 6]
  }, {
    name: 'No Working',
    data: [6, 7, 8, 8, 9, 10, 12]
  }],
    chart: {
    type: 'bar',
    height: 400,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: ''
  },
  xaxis: {
    categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val 
      }
    }
  },
  fill: {
    opacity: 1
  
 
  },colors: ['#303e67', '#f5af13'],
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#working"), options);
  chart.render();

 /* fuel overview */
 var options = {
    series: [{
    name: 'Refilled',
    data: [44, 25, 57,21]
  }, {
    name: 'Theft',
    data: [76, 85, 101,10]
  }, {
    name: 'Availlable',
    data: [35, 41, 36,8]
  }, {
    name: 'Consumption',
    data: [35, 14, 26,6]
  }],
    chart: {
    type: 'bar',
    height: 400
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      
    },
  },
  dataLabels: {
    enabled: false
  },colors: ['#303e67', '#f5af13','#28a745','#6c757d'],
  
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Fuel Number', 'Fuel Quantity', 'Estimated Cost',],
  },
  yaxis: {
    title: {
      text: 'Volum (L)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val 
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#fueloverview"), options);
  chart.render();

 /*End Fuel Overview */

 /*refilled fuel*/

 var options = {
  series: [{
  name: 'Quantity :',
  data: [30, 25, 20, 17, 16, 15, 8]
},{
  name: 'Event :',
  data: [0,10, 5, 0, 9, 11, 2]
}],
  chart: {
  type: 'bar',
  height: 400,
  /*stacked: true,
  stackType: '100%'*/
},
plotOptions: {
  bar: {
    horizontal: true,
    columnWidth: '80%',
  },
}, dataLabels: {
  enabled: false,
  
  },
stroke: {
  width: 1,
  colors: ['#fff']
},

xaxis: {
  categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],
  title: {
    text: 'Volum (L)'
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val 
    }
  }
},
fill: {
  opacity: 1


},colors: ['#303e67', '#f5af13'],
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};
var chart = new ApexCharts(document.querySelector("#refilledfuel"), options);
chart.render();



 /*End refilled Fuel */

 /* Theft fuel */
 var options = {
  series: [{
  name: 'Quantity',
  data: [10 ,14 , 14, 20, 20, 45, 60]
},{
  name: 'Event :',
  data: [0,10, 5, 0, 9, 11, 2]
}],
  chart: {
  type: 'bar',
  height: 400,
  /*stacked: true,
  stackType: '100%'*/
},
plotOptions: {
  bar: {
    horizontal: true,
    columnWidth: '80%',
  },
}, dataLabels: {
  enabled: false,
  
  },
stroke: {
  width: 1,
  colors: ['#fff']
},


xaxis: {
  categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],

  title: {
    text: 'Volum (L)'
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val 
    }
  }
},
fill: {
  opacity: 1


},colors: ['#303e67', '#f5af13'],
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};
var chart = new ApexCharts(document.querySelector("#theftfuel"), options);
chart.render();


 /*End Theft Fuel*/

 /* Consumption */
 var options = {
  series: [{
  name: 'Quantity',
  data: [30,25 , 14, 10, 8, 6, 4]
}],
  chart: {
  type: 'bar',
  height: 400,
  /*stacked: true,
  stackType: '100%'*/
},
plotOptions: {
  bar: {
    horizontal: true,
    columnWidth: '80%',
  },
}, dataLabels: {
  enabled: false,
  
  },
stroke: {
  width: 1,
  colors: ['#fff']
},
xaxis: {
  categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],
  title: {
    text: 'Volum (L)'
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val +" L"
    }
  }
},
fill: {
  opacity: 1


},colors: ['#303e67'],
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};
var chart = new ApexCharts(document.querySelector("#consumptionfuel"), options);
chart.render();
 /*End Consumptiom*/

  /* Last fuel  */
  var options = {
    series: [{
    name: 'Quantity',
    data: [10,25 , 14, 31, 8, 6, 40]
  }],
    chart: {
    type: 'bar',
    height: 400,
    /*stacked: true,
    stackType: '100%'*/
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '80%',
    },
  }, dataLabels: {
    enabled: false,
    
    },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  
  xaxis: {
    categories: ["Generator 1", "Generator 2", "Generator 3", "Generator 4", "Generator 5", "Generator 6", "Order"],
    title: {
      text: 'Volum (L)'
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val +" L"
      }
    }
  },
  fill: {
    opacity: 1
  
  
  },colors: ['#303e67'],
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };
  var chart = new ApexCharts(document.querySelector("#lastefuel"), options);
  chart.render();
   /*End lastest Fuel*/

   /*trend fleet*/
       
   var options = {
    colors: ['#303e67', '#f5af13','#6c757d' ,'#28a745'],
    series: [{
    name: 'Refilled',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Theft',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
  , {
    name: 'Consumption',
    data: [61, 90, 24, 32, 34, 22, 51]
  }, {
    name: 'Available',
    data: [19, 45, 15, 90, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'line'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 2,
    dashArray: 0, 
  },
  xaxis: {
    type: 'datetime',
    categories: ["2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#fueltrend"), options);
  chart.render();
   /*End Trend Fleet*/


   /* fuel Trends */

  
      
   var options = {
    colors: ['#303e67', '#f5af13','#cc0000'],
    series: [{
    name: 'Total',
    data: [100, 52, 28, 80, 42, 100, 20]
  }, {
    name: 'Started',
    data: [80, 32, 8, 75, 34, 52, 18]
  }
  , {
    name: 'Stopped',
    data: [20, 20, 20, 5, 8, 48, 2]
  }],
    chart: {
    height: 350,
    type: 'line'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 2,
    dashArray: 0, 
  },
  xaxis: {
    type: 'datetime',
      categories: ["2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy '
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#fleettrend"), options);
  chart.render();




   /*End Fuel trends*/


   /* working hour */
   var options = {
    colors: ['#303e67', '#f5af13','#6c757d' ,'#28a745'],
    series: [{
    name: 'Duration of working',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Duration of power outage',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
  ],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 2,
    dashArray: 0, 
  },
  xaxis: {
    type: 'datetime',
      categories: ["2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy '
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#workinghourtrend"), options);
  chart.render();


   /*ENd working hours trend*/

   /* Maintenance Trends */
   var options = {
    colors: ['#303e67', '#f5af13','#6c757d' ,'#28a745'],
    series: [{
    name: 'Nb Done',
    data: [31, 40, 28, 51, 42, 109, 50]
  }, {
    name: 'Nb Expired',
    data: [11, 32, 45, 80, 34, 52, 41]
  }
  ],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 2,
    dashArray: 0, 
  },
  xaxis: {
    type: 'datetime',
      categories: ["2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy '
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#maintenanceTrend"), options);
  chart.render();


   /* End Maintenance */


   /*Map overview*/
   const dataSource = {
    chart: {
      showlegend: 0,
      caption: "Co-working Locations of WeWork in Different Countries",
      nullentityfillcolor: "#757DE8",
      showmarkerlabels: "0",
      showentitytooltip: "0",
      showentityhovereffect: "0",
      theme: "fusion"
    },
    markers: {
      items: [
        {
          id: "lon",
          shapeid: "we-anchor",
          x: "190.23",
          y: "350.9",
          label: "Chile",
          value: "1",
          tooltext: "In Chile, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "atl",
          shapeid: "we-anchor",
          x: "130.14",
          y: "140.9",
          label: "USA",
          value: "25",
          tooltext: "In USA, WeWork has <b>$value</b> co-working locations</b>",
          labelpos: "left"
        },
        {
          id: "ind",
          shapeid: "we-anchor",
          x: "500.14",
          y: "203.9",
          label: "India",
          value: "3",
          tooltext: "In India, WeWork has <b>$value</b> co-working locations",
          labelpos: "bottom"
        },
        {
          id: "Aus",
          shapeid: "we-anchor",
          x: "628.14",
          y: "305.9",
          label: "Autralia",
          value: "3",
          tooltext: "In Australia, WeWork has <b>$value</b> co-working locations"
        },
        {
          id: "china",
          shapeid: "we-anchor",
          x: "573.14",
          y: "161.9",
          label: "China",
          value: "6",
          tooltext: "In China, WeWork has <b>$value</b> co-working locations"
        },
        {
          id: "Thi",
          shapeid: "we-anchor",
          x: "553.14",
          y: "211.9",
          label: "Thailand",
          value: "1",
          tooltext: "In Thailand, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "Sing",
          shapeid: "we-anchor",
          x: "560.14",
          y: "231.9",
          label: "Singapore",
          value: "1",
          tooltext: "In Singapore, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "Indo",
          shapeid: "we-anchor",
          x: "570.14",
          y: "250.9",
          label: "Indonesia",
          value: "1",
          tooltext: "In Indonesia, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "sKorea",
          shapeid: "we-anchor",
          x: "603.14",
          y: "155.9",
          label: "South Korea",
          value: "1",
          tooltext: "In South Korea, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "jap",
          shapeid: "we-anchor",
          x: "633.14",
          y: "145.9",
          label: "Japan",
          value: "1",
          tooltext: "In Japan, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "isrl",
          shapeid: "we-anchor",
          x: "445.14",
          y: "165.9",
          label: "Isreal",
          value: "5",
          tooltext: "In Israel, WeWork has <b>$value</b> co-working locations"
        },
        {
          id: "ire",
          shapeid: "we-anchor",
          x: "325.14",
          y: "105.9",
          label: "Ireland",
          value: "1",
          tooltext: "In Ireland, WeWork has <b>$value</b> co-working location",
          labelpos: "left"
        },
        {
          id: "pol",
          shapeid: "we-anchor",
          x: "365.14",
          y: "118.9",
          label: "Poland",
          value: "1",
          tooltext: "In Poland, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "spain",
          shapeid: "we-anchor",
          x: "330.14",
          y: "145.9",
          label: "Spain",
          value: "2",
          tooltext: "In Spain, WeWork has <b>$value</b> co-working locations"
        },
        {
          id: "Mexico",
          shapeid: "we-anchor",
          x: "130.14",
          y: "190.9",
          label: "Mexico",
          value: "1",
          tooltext: "In Mexico, WeWork has <b>$value</b> co-working location"
        },
        {
          id: "Brazil",
          shapeid: "we-anchor",
          x: "250.14",
          y: "260.9",
          label: "Brazil",
          value: "3",
          tooltext: "In Brazil, WeWork has <b>$value</b> co-working locations"
        }
      ],
      shapes: [
        {
          id: "we-anchor",
          type: "image",
          url:
            "https://cdn3.iconfinder.com/data/icons/iconic-1/32/map_pin_fill-512.png",
          xscale: "4",
          yscale: "4"
        }
      ]
    }
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "maps/world",
      renderAt: "mapoverview",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  });

   /* End Map Overview*/