 $(function () {

    $(document).ready(function () {

        // Build the chart
        $('#chartcesi1').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'What would best describe the length of your professional teaching career to date?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Career Length',
                data: [
                    
                    {
                        name: '0-5 Years NQT',
                        y: 19.4,
                        sliced: true,
                        selected: true
                    },
                    ['5-10 Years',    12.9],
                    ['10-15 Years',     19.4],
                    ['15-20 Years',   8.1],
                    ['20+ Years',   40.3]
                ]
            }]
        });
                   //here
            //build
              $('#chartcesi2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What do you associate the following words and phrases with:'
        },
        subtitle: {
            text: 'Part 1'
        },
        xAxis: {
            categories: [
                'Problem Solving',
                'Literacy Development',
                'Numeracy Development',
                'Logical Analysis',
                'Mathematical Skills',
                'Scientific Analysis',
                'Brief Design',
                'Providing Solutions',
                'Creativity',
                'Confidence Building',
                'Team Work',
                'Project Management'
                
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Just Science/Computing',
            data: [1, 3, 12, 19, 15, 45, 0, 1, 0, 0, 2, 5]

        }, {
            name: 'Both',
            data: [60, 65, 51, 52, 59, 30, 50, 72, 53, 58, 61, 59 ]

        }, {
            name: 'Just Art/Design',
            data: [15, 2, 2, 5, 2, 0, 25, 3, 23, 17, 11, 9]

        }, {
            name: 'None',
            data: [0, 6, 1, 0, 0, 1, 1, 0, 0, 1, 2 ,3 ]

        }]
    });
  //build
              $('#chartcesi3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What do you associate the following words and phrases with'
        },
        subtitle: {
            text: 'Part 2'
        },
        xAxis: {
            categories: [
                'Tools for Communication',
                'Self Expression',
                'Valued by Society',
                'Worthwhile',
                'Hard to Learn',
                'Must be born with skills',
                'Useful to Society',
                'Important to Learn',
                'Neccessary for wholistic development',
                'Increases Vocabulary',
                'Improves writing skills',
                'Caters to a variety of learners'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Just Science/Computing',
            data: [1, 0, 39, 1, 20, 2, 2, 2, 0, 1, 7, 1 ]

        }, {
            name: 'Both',
            data: [62, 28, 34, 70, 30, 8, 73, 71, 50, 68, 49, 60 ]

        }, {
            name: 'Just Art/Design',
            data: [12, 48, 2, 4, 1, 10, 0, 2, 21, 4, 8, 13 ]

        }, {
            name: 'None',
            data: [1, 0 , 1, 1, 29, 56, 1, 1, 5, 3, 12, 2 ]

        }]
    });
     
            
        // Build the chart
        $('#chartcesi4').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'What is your Primary Subject?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'I teach',
                data: [
                    ['Irish',   6.38],
                    ['English',   4.26],
                    ['Maths',   17.02],
                    ['History',   2.13],
                    ['Geography',   14.89],
                    ['MFL',   4.26],
                    ['Music',   0],
                    ['Art',   4.26],
                    ['DCG',   0],
                    ['Science',   17.02],
                    ['Woodwork',   4.26],
                    ['Metalwork',   0],
                    ['Technology',   0],
                    ['Religion',   0],
                    ['CSPE',   0],
                    ['SPHE',   2.13],
                    ['Resource/LS',   2.13],
                    ['ICT - Programs', 4.26],
                    ['ICT - Coding', 4.26],
                    ['0ther',   8.51],
                    ['n/a', 4.26]
 
                ]
            }]
        });
        
            // Build the chart
            $('#chartcesi5').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'If you teach a second subject, what do you teach?'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Second Subject',
                    data: [
                        ['Irish',   2.3],
                        ['English', 3.45],
                        ['Maths', 21.74],
                        ['History', 13.04],
                        ['Geography', 0],
                        ['MFL', 1.15],
                        ['Music', 1.15],
                        ['Art', 1.15],
                        ['Technical Graphics',    1.15],
                        ['Woodwork', 1.15],
                        ['Metalwork', 1.15],
                        ['Technology', 4.6],
                        ['Science', 4.6],
                        ['Religion', 4.6],
                        ['CSPE', 6.9],
                        ['SPHE', 4.6],
                        ['Resource/LS',     2.3],
                        ['ICT Programs',     20.69],
                        ['ICT Coding',   9.2],
                        ['Other/Business',   8.05],
                        ['n/a', 3.45]
                        
                    ]
                }]
            });
             // add COding words nad phrases qs
             //build
              $('#chartcesi4b').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What is your second subject?'
        },
        subtitle: {
            text: 'Number view'
        },
        xAxis: {
            categories: [
                'Irish',
                'English', 
                'Maths',
				'History',
				'Geography',
				'MFL', 
				'Music',
				'Art', 
				'TG/DCG', 
				'Woodwork', 
				'Metalwork',
				'Technology', 
				'Science', 
				'RE',
				'CSPE', 
				'SPHE', 
				'Resource',
				'ICT Programs', 
				'ICT Coding', 
				'Other | Business',
				'n/a'
                
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Numbers Teaching',
            data: [2, 3, 10, 6, 0, 2, 1, 1, 1, 1, 0, 4, 4, 4, 6, 4, 2, 18, 8, 7, 3 ]

        }
        ]
    });
          // Build the chart
        $('#chartcesi6').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Are you registerd to teach your second subject with teaching council?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'registered?',
                data: [
                	['Yes', 57.9],
                    ['No',   26.3],
                    ['Don\'t know', 15.8 ]
                    
                    
                ]
            }]
        });
            // Build
            $('#chartcesi7').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'What ICT Skills do you have/tools can you use? '
            },
            subtitle: {
                text: 'Source: ATAI Survey'
            },
            xAxis: {
                categories: [
                    'Photo Manupulation',
                    'Vector based ',
                    'Animation Tools',
                    'WYSIWYG editors',
                    'Coding tools',
                    'Office tools',
                    'Edmodo/Moodle',
                    'IDE'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Response'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Strongly Disagree',
                data: [2, 8, 6, 6, 13, 1, 1, 17 ]
    
            }, {
                name: 'Disagree',
                data: [2, 8, 3, 2, 16, 0, 0, 11]
    
            }, {
                name: 'Aware of but not used',
                data: [10, 18, 13, 9, 8, 1, 4, 8]
    
            },{
                name: 'Agree',
                data: [18, 6, 15, 5, 5, 10, 5]
    
            }, {
                name: 'Strongly Agree',
                data: [11, 3, 6, 4, 1, 36, 28, 2]
    
            }]
        });  
            // add COding words nad phrases qs
             //build
              $('#chart55cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Do you have significant knowledge on any of the following computer languages, tools or terminology?'
        },
        subtitle: {
            text: 'Part 1'
        },
        xAxis: {
            categories: [
                '(X)HTML',
                'CSS',
                'Sass/LESS',
                'JavaScript | jQuery | CoffeeScript',
                'jQuery',
                'Angular.js',
                'Node.js',
                'CoffeeScript',
                'Scratch | Logo',
                'C#,
                'Objective-C',
                'C++',
                'Perl'
                
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Very Insignificant',
            data: [6, 13, 26, 19, 33, 32, 5, 26, 29, 23, 29 ]

        }, {
            name: 'Insignificant',
            data: [5, 4, 9, 9, 6, 5, 4, 7, 6, 9, 6 ]

        }, {
            name: 'Neutral',
            data: [11, 11, 6, 7, 4, 6, 6, 7, 5, 7, 6 ]

        },{
            name: 'Significant',
            data: [17, 12, 2, 6, 0, 0, 16, 2, 3, 3, 0 ]

        }, {
            name: 'Very Significant',
            data: [4, 3, 0, 2, 0, 0, 12, 1, 0, 1, 2 ]

        }]
    });
  //build
              $('#chart56cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Do you have significant knowledge on any of the following computer languages, tools or terminology?'
        },
        subtitle: {
            text: 'Part 2'
        },
        xAxis: {
            categories: [
                'Python',
                'Ruby/Rails',
                'PHP/Wordpress',
                'MySWL/Postgres',
                'Java/Scala',
                'VB/ASP,
                'Drupal',
                'Azure',
                'Cloud',
                'Git',
                'Jade | HAML'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Very Insignificant',
            data: [19, 30, 8, 22, 21, 18, 23, 34, 15, 33, 32 ]

        }, {
            name: 'Insignificant',
            data: [11, 8, 3, 6, 8, 9, 9, 5, 3, 3, 6]

        }, {
            name: 'Neutral',
            data: [8, 2, 12, 10, 6, 8, 3, 3, 12, 4, 3 ]

        },{
            name: 'Significant',
            data: [3, 3, 13, 2, 5, 7, 5, 0, 9, 3, 1 ]

        }, {
            name: 'Very Significant',
            data: [2, 0, 7, 3, 3, 1, 3, 1, 4, 1, 1]

        }]
    });

 
  
        // Build the chart
        $('#chart6cesi').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Are you aware of the NCCA Draft Syllabus in Programming and coding?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Are you aware of the NCCA Draft Syllabus in Programming and coding?',
                data: [
                    ['No',   71.05],
                    ['Yes', 28.95]
                ]
            }]
        });
        // Build the chart
            $('#chart7cesi').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'What areas of ICT are currently taught in your school?'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'What areas of ICT are currently taught in your school?',
                    data: [
                        ['Digital Media Literacy',   21.62],
                        ['Programming and Coding',    5.41],
                        ['Scratch/CoderDojo',    6.76],
                        ['AUTOCAD',   13.51],
                        ['Digital Graphics',     12.84],
                         {
                            name: 'ECDL',
                            y: 33.78,
                            sliced: true,
                            selected: true
                        },
                        ['Don\'t know',   6.08]
                        
                    ]
                }]
            });


        // Build the chart
              $('#chart8cesi').highcharts({
                  chart: {
                      plotBackgroundColor: null,
                      plotBorderWidth: null,
                      plotShadow: false
                  },
                  title: {
                      text: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?'
                  },
                  tooltip: {
                      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: false
                          },
                          showInLegend: true
                      }
                  },
                  series: [{
                      type: 'pie',
                      name: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?',
                      data: [
                          ['No',   22.81],
                          ['Yes - with help and training', 68.42 ],
                          ['Yes', 8.77]
                          
                      ]
                  }]
              });
              //
              $('#chart9cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
        },
        subtitle: {
            text: 'Detailed Column Chart overall'
        },
        xAxis: {
            categories: [
                'Irish',
                'English',
                'Maths',
                'History',
                'Geography',
                'MFL',
                'Music',
                'Art',
                'Technical Graphics/DCG',
                'Woodwork',
                'Metalwork/Engineering',
                'Technology',
                'Science',
                'Religion',
                'CSPE',
                'SPHE',
                'Resource',
                'Other',
                'n/a'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Total',
            data: [22, 31, 28, 3, 5, 4, 3, 5, 4, 18, 4, 30, 22, 14 ]

          }]
    });
              //
              $('#chart91cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
        },
        subtitle: {
            text: 'Detailed Column Chart by career length'
        },
        xAxis: {
            categories: [
                'Irish',
                'English',
                'Maths',
                'History',
                'Geography',
                'MFL',
                'Music',
                'Art',
                'Technical Graphics/DCG',
                'Woodwork',
                'Metalwork/Engineering',
                'Technology',
                'Science',
                'Religion',
                'CSPE',
                'SPHE',
                'Resource',
                'Other',
                'n/a'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [ {
            name: '0-5',
            data: [3, 6, 7, 1, 1, 0, 0, 0, 0, 4, 1, 7, 7, 1]

        }, {
            name: '5-10',
            data: [7, 10, 8, 0, 2, 3, 2, 2, 2, 6, 2, 8, 7, 5]

        },{
            name: '10-15',
            data: [2, 2, 3, 0, 0, 1, 1, 1, 1, 2, 0, 4, 1, 3]

        },        {
            name: '15+',
            data: [10, 13, 10, 2, 2, 0, 0, 2, 1, 6, 11, 7, 5]

        
        }]
    });
    
    // pie chart above chart
    // Build the chart
            $('#chart11cesi').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'What primary subject(s), do your colleagues teaching computers teach in your school?',
                    data: [
                        
                        ['Science',    11.4],
                        ['Maths',    16.06],
                        ['Business',   14.51],
                        ['Irish',     1.55],
                        ['English', 2.59],
                        ['MFL',     2.07],
                        ['History',   1.55],
                        ['Geography',     2.59],
                        ['Religion',     2.07],
                        ['Technology',     9.33],
                        ['Music',     2.07],
                        ['DGC',   15.54],
                        ['Art/Craft/Design',   11.4],
                        ['Other',   7.25]
                        
                    ]
                }]
            });
    
     // Build the chart
        $('#chart16cesi').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Do you feel being able to teach programming and coding (ICT) would make an art teacher more employable?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Do you feel being able to teach programming and coding (ICT) would make a teacher more employable?',
                data: [
                    ['No',   8.33],
                    ['No Opinion',   2.78],
                    {
                        name: 'Yes',
                        y: 88.89,
                        sliced: true,
                        selected: true
                    }
                ]
            }]
        });
        
             // Build the chart
              $('#chart10cesi').highcharts({
                  chart: {
                      plotBackgroundColor: null,
                      plotBorderWidth: null,
                      plotShadow: false
                  },
                  title: {
                      text: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?'
                  },
                  tooltip: {
                      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: false
                          },
                          showInLegend: true
                      }
                  },
                  series: [{
                      type: 'pie',
                      name: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?',
                      data: [
                          ['No',   16.22],
                          ['Yes - with help and training', 81.08 ],
                          ['Yes', 2.7]
                          
                      ]
                  }]
              });
              
           
        //next
         $('#chart12cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How effective do you feel the following tools would be to learning Programming and Coding (ICT) - mark out of 5?'
        },
        subtitle: {
            text: 'Source: ATAI Survey'
        },
        xAxis: {
            categories: [
                'Self-taught Material',
                'Video Tutorials',
                'Online work thread',
                'Downloadable Content',
                'Group Forum',
                'Profile with badges/rewards',
                'Links to advanced content',
                'Progress Tracking',
                'Commenting'
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '1 Star',
            data: [6, 3, 4, 2, 5, 11, 3, 4, 6 ]

        },{
            name: '2 Stars',
            data: [4, 3, 8, 6, 6, 7, 4, 7, 6 ]

        },{
            name: '3 Stars',
            data: [14, 7, 12, 8, 8, 13, 11, 9, 13 ]

        },{
            name: '4 Stars',
            data: [16, 8, 16, 19, 12, 8, 15, 14, 13 ]

        },{
            name: '5 Stars',
            data: [9, 28, 9, 14, 18, 7, 16, 12, 10 ]

        }]
       
    });
           //
           $('#chart12cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How effective do you feel the following tools would be to learning Programming and Coding (ICT) - mark out of 5?'
        },
        subtitle: {
            text: 'Source: ATAI Survey'
        },
        xAxis: {
            categories: [
                'Self-taught Material',
                'Video Tutorials',
                'Online work thread',
                'Downloadable Content',
                'Group Forum',
                'Profile with badges/rewards',
                'Links to advanced content',
                'Progress Tracking',
                'Commenting'
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '1 Star',
            data: [6, 3, 4, 2, 5, 11, 3, 4, 6 ]

        },{
            name: '2 Stars',
            data: [4, 3, 8, 6, 6, 7, 4, 7, 6 ]

        },{
            name: '3 Stars',
            data: [14, 7, 12, 8, 8, 13, 11, 9, 13 ]

        },{
            name: '4 Stars',
            data: [16, 8, 16, 19, 12, 8, 15, 14, 13 ]

        },{
            name: '5 Stars',
            data: [9, 28, 9, 14, 18, 7, 16, 12, 10 ]

        }]
       
    });
           //
           $('#chart13cesi').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How do you feel you engage with the following types of learning methods?'
        },
        subtitle: {
            text: '-'
        },
        xAxis: {
            categories: [
                'Self-Taught',
                'Instructed Class',
                'Video Content',
                'Online Workbook',
                'Online Tutorial',
                'Peer Led Initiatives',
                'One-on-one Tuition',
                'Group Forums',
                'CPD/Inservice',
                'Books/Guides',
                'Physical Workshop',
                'Online Workshop'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Response'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Strongly Disagree',
            data: [2, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2 ] 

        }, {
            name: 'Disagree',
            data: [2, 0, 1, 7, 6, 1, 0, 3, 3, 8, 1, 7 ]

        }, {
            name: 'Neutral',
            data: [11, 4, 6, 15, 10, 8, 1, 13, 11, 14, 2, 11]

        }, 
        {
            name: 'Agree',
            data: [21, 20, 19, 22, 28, 26, 22, 18, 21, 22, 23]

        }, {
            name: 'Strongly Agree',
            data: [12, 23, 7, 5, 10, 10, 20, 8, 14, 4, 24, 5 ]

        }]
    });
    //next
    });

});

//Cesi Data//      