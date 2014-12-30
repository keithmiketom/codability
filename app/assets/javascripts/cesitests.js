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
                        y: 20,
                        sliced: true,
                        selected: true
                    },
                    ['5-10 Years',    11.43],
                    ['10-15 Years',     20],
                    ['15-20 Years',   8.57],
                    ['20+ Years',   40]
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
            data: [13, 8, 15, 18, 21, 22, 3, 11, 2, 2, 2, 4]

        }, {
            name: 'Both',
            data: [34, 37, 34, 30, 27, 23, 35, 38, 36, 42, 41, 41 ]

        }, {
            name: 'Just Art/Design',
            data: [3, 3, 2, 2, 3, 2, 12, 2, 13, 5, 5, 3 ]

        }, {
            name: 'None',
            data: [1, 3, 0, 1, 0, 4, 1, 0, 0, 2, 3, 3 ]

        }]
    });
  //build
              $('#chartcesi2b').highcharts({
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
            data: [3, 1, 19, 5, 19, 1, 8, 8, 2, 4, 10, 3 ]

        }, {
            name: 'Both',
            data: [42, 31, 29, 43, 12, 5, 41, 38, 39, 37, 29, 40 ]

        }, {
            name: 'Just Art/Design',
            data: [5, 19, 3, 2, 3, 17, 2, 1, 9, 3, 3, 8 ]

        }, {
            name: 'None',
            data: [1, 0, 0, 1, 17, 28, 0, 3, 1, 7, 9, 0 ]

        }]
    });
     
            
        // Build the chart
        $('#chartcesi3').highcharts({
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
                    ['Irish',   6.12],
                    ['English',   4.08],
                    ['Maths',   16.33],
                    ['History',   4.08],
                    ['Geography',   14.29],
                    ['MFL',   4.08],
                    ['Music',   0],
                    ['Art',   4.08],
                    ['DCG',   0],
                    ['Science',   18.37],
                    ['Woodwork',   4.08],
                    ['Metalwork',   0],
                    ['Technology',   0],
                    ['Religion',   0],
                    ['CSPE',   0],
                    ['SPHE',   2.04],
                    ['Resource/LS',   2.04],
                    ['ICT - Programs', 4.08],
                    ['ICT - Coding', 4.08],
                    ['Business/0ther',   8.16],
                    ['n/a', 4.08]
 
                ]
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
                        ['Irish',   2.22],
                        ['English', 3.33],
                        ['Maths', 12.22],
                        ['History', 6.67],
                        ['Geography', 1.11],
                        ['MFL', 1.11],
                        ['Music', 1.11],
                        ['Art', 1.11],
                        ['Technical Graphics',    1.11],
                        ['Woodwork', 1.11],
                        ['Metalwork', 1.11],
                        ['Technology', 4.44],
                        ['Science', 4.44],
                        ['Religion', 4.44],
                        ['CSPE', 7.78],
                        ['SPHE', 4.44],
                        ['Resource/LS',     2.22],
                        ['ICT Programs',     20],
                        ['ICT Coding',   8.89],
                        ['Other/Business',   7.78],
                        ['n/a', 3.33]
                        
                    ]
                }]
            });
             // add COding words nad phrases qs
             //build
              $('#chartcesi3b').highcharts({
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
            data: [2, 3, 11, 6, 1, 2, 1, 1, 1, 1, 0, 4, 4, 4, 7, 4, 2, 18, 8, 7, 3 ]

        }
        ]
    });
          // Build the chart
        $('#chartcesi5').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Are you registered to teach your second subject with teaching council?'
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
                	['Yes', 61.3],
                    ['No',   22.73],
                    ['Don\'t know', 15.91 ]
                    
                    
                ]
            }]
        });
            // Build
            $('#chartcesi6').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'What ICT Skills do you have/tools can you use? '
            },
            subtitle: {
                text: 'Source: CESI Survey'
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
                data: [2, 8, 7, 7, 14, 1, 1, 17 ]
    
            }, {
                name: 'Disagree',
                data: [2, 8, 3, 2, 16, 0, 0, 11]
    
            }, {
                name: 'Aware of but not used',
                data: [10, 20, 14, 9, 8, 1, 4, 9]
    
            },{
                name: 'Agree',
                data: [18, 6, 15, 23, 6, 5, 11, 6]
    
            }, {
                name: 'Strongly Agree',
                data: [13, 3, 6, 4, 1, 38, 29, 2]
    
            }]
        });  
            // add COding words nad phrases qs
             //build
              $('#chartcesi7').highcharts({
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
                'Sass/ LESS',
                'JavaScript/  jQuery/  CoffeeScript',
                'Angular.js',
                'Node.js',
                'Scratch/ Logo',
                'C#',
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
            data: [6, 13, 27, 19, 34, 33, 5, 26, 29, 23, 29 ]

        }, {
            name: 'Insignificant',
            data: [5, 5, 10, 10, 7, 6, 5, 9, 8, 11, 8 ]

        }, {
            name: 'Neutral',
            data: [11, 11, 6, 8, 4, 6, 6, 7, 5, 7, 6 ]

        },{
            name: 'Significant',
            data: [19, 13, 2, 6, 0, 0, 16, 2, 3, 3, 0 ]

        }, {
            name: 'Very Significant',
            data: [4, 3, 0, 2, 0, 0, 13, 1, 0, 1, 2 ]

        }]
    });
  //build
              $('#chartcesi7b').highcharts({
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
                'Ruby/ Rails',
                'PHP/ Wordpress',
                'MySQL/ Postgres',
                'Java/ Scala',
                'VB/ ASP.net',
                'Drupal',
                'Azure',
                'Cloud',
                'Git',
                'Jade/ HAML'
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
            data: [19, 30, 8, 22, 21, 18, 23, 34, 15, 32, 34 ]

        }, {
            name: 'Insignificant',
            data: [13, 9, 3, 7, 9, 10, 10, 6, 3, 4, 6]

        }, {
            name: 'Neutral',
            data: [8, 3, 12, 10, 6, 9, 3, 4, 13, 5, 3 ]

        },{
            name: 'Significant',
            data: [3, 3, 14, 3, 6, 7, 6, 0, 9, 3, 1 ]

        }, {
            name: 'Very Significant',
            data: [2, 0, 8, 3, 3, 1, 3, 1, 5, 1, 1]

        }]
    });

 
  
        // Build the chart
        $('#chartcesi8').highcharts({
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
                name: 'Are you aware?',
                data: [
                    ['No',   31.11],
                    ['Yes', 68.89]
                ]
            }]
        });
        // Build the chart
            $('#chartcesi9').highcharts({
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
                    name: 'What areas of ICT',
                    data: [
                        ['Digital Media Literacy',   25],
                        ['Programming and Coding',    12.8],
                        ['Scratch/CoderDojo',    18.94],
                        ['AUTOCAD',   14.39],
                        ['Digital Graphics',     4.55],
                        [ 'ECDL', 24.24 ],
                        ['Don\'t know',   0.76]
                        
                    ]
                }]
            });
            
      		            
        // Build the chart
              $('#chartcesi10').highcharts({
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
                      name: 'Opinion',
                      data: [
                      	  ['Yes', 16.67],
                          ['Yes - with help and training', 76.19 ],
                          ['No',   7.14]

                          
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
                'TG/ DCG',
                'Woodwork',
                'Metalwork/ Engineering',
                'Technology',
                'Science',
                'Religion',
                'CSPE',
                'SPHE',
                'Resource',
                'Business + other',
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
            data: [2, 9, 14, 8, 5, 3, 4, 5, 15, 9, 7, 9, 11, 4, 3, 2, 7, 15, 3 ]

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
                'TG/ DCG',
                'Woodwork',
                'Metalwork/ Engineering',
                'Technology',
                'Science',
                'Religion',
                'CSPE',
                'SPHE',
                'Resource',
                'Business + Other',
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
            name: '0-10',
            data: [1, 2, 2, 3, 0, 0, 1, 0, 4, 0, 1, 2, 3, 1, 1, 1, 2, 2, 0 ]

        }, {
            name: '10-15',
            data: [0, 0, 3, 0, 1, 0, 0, 1, 2, 1, 0, 1, 3, 0, 0, 1, 0, 5, 1 ]

        },{
            name: '15-20',
            data: [0, 0, 2, 1, 0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 0, 0, 2, 2, 0]

        },        {
            name: '20+',
            data: [1, 7, 7, 4, 4, 3, 3, 3, 8, 7, 4, 4, 4, 2, 2, 0, 3, 6, 2 ]

        
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
			                    
			                ['Irish', 1.35],
			                ['English', 9.46],
			                ['Maths', 9.46],
			                ['History', 5.41],
			                ['Geography', 5.41],
			                ['MFL', 4.05],
			                ['Music', 4.05],
			                ['Art', 4.05],
			                ['TG/DCG', 10.81],
			                ['Woodwork', 9.46],
			                ['Metalwork/Engineering', 5.41],
			                ['Technology', 5.41],
			                ['Science', 5.41],
			                ['Religion', 2.7],
			                ['CSPE', 2.7],
			                ['SPHE', 0],
			                ['Resource', 4.05],
			                ['Business + Other', 8.11],
			                ['n/a', 2.7]
                        
                        
                    ]
                }]
            });
            
     $('#chartcesi12').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Evaluate the following phrases in realtion to Programming and Coding (P+C)'
        },
        subtitle: {
            text: 'Part 1'
        },
        xAxis: {
            categories: [
                'P+C is Hard',
                'P+C has nothing to do with Art',
                'P+C has much cross Curricular potential',
                'P+C can improve literacy and numeracy',
                'The NCCA Draft Syllabus is easy to understand',
                'There are elements I could teach without knowing code',
                'Iwould be willing to teach P+C',
                'Coding is a skill I would like to learn',
                'Programming and Coding could be cross curricular'
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
            data: [3, 10, 1, 1, 1, 1, 2, 1, 1 ] 

        }, {
            name: 'Disagree',
            data: [14, 19, 0, 0, 5, 2, 2, 2, 0 ]

        }, {
            name: 'Neutral',
            data: [17, 10, 6, 5, 15, 10, 2, 7, 4 ]

        }, 
        {
            name: 'Agree',
            data: [8, 3, 20, 19, 16, 18, 14, 12, 22 ]

        }, {
            name: 'Strongly Agree',
            data: [0, 0, 15, 17, 5, 11, 22, 20, 15 ]

        }]
    });
    //next
     $('#chartcesi12b').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Evaluate the following phrases in realtion to Programming and Coding'
        },
        subtitle: {
            text: 'part 2'
        },
        xAxis: {
            categories: [
                'Knowing Flash makes P+C easier',
                'Animation has transferable skills to P+C',
                'My Students would love to learn P+C',
                'P+C is important in Irish Society',
                'You need impressive labs to teach P+C',
                'I have all the skills needed to start learning P+C',
                'Learning P+C to teach would make me more employable',
                'Principals will want teachers to teach P+C in schools in next 5 years',
                'P+C will become an important subject in schools'
                
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
            data: [5, 0, 0, 0, 6, 3, 1, 1, 1 ] 

        }, {
            name: 'Disagree',
            data: [3, 3, 4, 2, 22, 10, 2, 1, 1  ]

        }, {
            name: 'Neutral',
            data: [28, 9, 7, 11, 9, 6, 8, 5, 12 ]

        }, 
        {
            name: 'Agree',
            data: [6, 26, 22, 15, 5, 12, 20, 16, 14 ]

        }, {
            name: 'Strongly Agree',
            data: [0, 4, 9, 14, 0, 11, 11, 19, 14 ]
        }]
    });
 // Build the chart
        $('#chartcesi13').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Do you think a coding aptitude test would give confidence to those who may be starting to learn how to code?'
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
                name: 'Opinion',
                data: [
                {
                        name: 'Yes',
                        y: 43.9,
                        sliced: true,
                        selected: true
                   },
                    ['No',   19.51],
                    ['No Opinion',   36.59]
                    
                ]
            }]
        });
        // Build the chart
        $('#chartcesi13b').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'With no opinion excluded.'
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
                name: 'Opinion',
                data: [
                {
                        name: 'Yes',
                        y: 69.23,
                        sliced: true,
                        selected: true
                   },
                    ['No',   30.77]
                    
                ]
            }]
        });
    
        
     // Build the chart
        $('#chartcesi14').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Do you feel being able to teach programming and coding (ICT) would make a teacher more employable?'
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
                name: 'Opinion',
                data: [
                {
                        name: 'Yes',
                        y: 90.24,
                        sliced: true,
                        selected: true
                   },
                    ['No',   7.32],
                    ['No Opinion',   2.44]
                    
                ]
            }]
        });
        
//
    });

});



//Cesi Data//      