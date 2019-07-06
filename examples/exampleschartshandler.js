let json;

function examplesHandler() {
    let canvas;
    let del;
    var x = document.getElementById("examplesSelector").value;
    if (x === "bar") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }
                }
            ],
            "transform": [],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {
                        "type": "range",
                        "value": "width"
                    },
                    "domain": {
                        "data": "crimea",
                        "field": "x"
                    }
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {
                        "type": "range",
                        "value": [0, 380]
                    },
                    "domain": {
                        "data": "crimea",
                        "field": "y"
                    }
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {
                        "type": "range",
                        "value": "height"
                    },
                    "domain": {
                        "data": "crimea",
                        "field": "y"
                    }
                },
                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {
                        "type": "range",
                        "value": [
                            "#808080",
                            "#FF0000"
                        ]
                    },
                    "domain": {
                        "data": "crimea",
                        "field": "c"
                    }
                },
                {
                    "name": "widthscale",
                    "type": "log",
                    "range": {
                        "type": "range",
                        "value": [
                            3,
                            19
                        ]
                    },
                    "domain": {
                        "data": "crimea",
                        "field": "c"
                    }
                }
            ],
            "axes": {
                "type": "coord_cartesian",
                "properties": [
                    {
                        "type": "x",
                        "data": "crimea",
                        "field": "x",
                        "orient": "bottom",
                        "grid": true
                    },
                    {
                        "type": "y",
                        "data": "crimea",
                        "field": "y",
                        "orient": "left",
                        "grid": true
                    }
                ]
            },
            "geom": [
                {
                    "type": "Bar",
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",
                        "y": "yscale",
                        "color": "colorscale",
                        "width": 3,
                        "fillColor": "rgba(170, 170, 170, 0.1)",
                        "border": 100
                    }
                }
            ]

        };
        editor.set(json);
        //document.getElementById("canvas1").getContext('2d').translate(0,0);
        //document.getElementById("canvas1").getContext('2d').clearRect(0, 0, 1200, 500);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "arc") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": 60,
            "background": "rgba(170, 170, 170, 0.1)",
            "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
            "data": [
                {
                    "name": "troops",
                    "values": "csv/troops.csv",
                    "format": {
                        "type": "csv"
                    }

                },
                {
                    "name": "cities",
                    "values": "csv/cities.csv",
                    "format": {
                        "type": "csv"
                    }

                }
            ],
            "transform": [],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "troops", "field": "long"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 360]},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "x2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "cities", "field": "long"}
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "colorscale",
                    "type": "category20b",
                    "range": {
                        "type": "range",
                        "value": ["#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94"]
                    },
                    "domain": {"data": "cities", "field": "city"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "troops", "field": "survivors"}
                }


            ]
            , "axes": {
                "type": "coord_polar",   // put your type here first ..
                "properties": [
                    {
                        "type": "angle",
                        "data": "cities",
                        "field": "lat", // da el tdreg ele hyktab 3la circle
                        "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                        "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                        "grid": true,
                        "clockwise": false
                    },
                    {
                        "type": "radius",
                        "data": "cities",
                        "field": "long",// el kem ele hktbha 3la el axis
                        "radius": "x2scale",//position  ele haktab 3ndha el kem
                        "position": 20//the distance between el axis  and diameter " has defult  value"
                        // "grid": false
                    }]
            }
            , "geom": [

                {
                    "type": "Arc",
                    "data": "cities",
                    "properties": {
                        "angle": "yscale",
                        "radius": "x2scale",
                        "color": "colorscale",
                        "anticlockwise": true
                    }
                }

                ]
            , 


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "stackted") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/stacked.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [

                {
                    "function": "groupby", // function name
                    "properties": {
                        "data": "crimea",
                        //"length": 20,
                        "field": "x",
                        "yAxes": "y",
                        "y": "newY"

                    }
                }
            ],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "newY"}
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}//[17,153
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range", "value": ["#808080", "#FF0000"]},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian", 			 // put your type here first ..
                // "type": "coord_flib",
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "10px Arial",
                            "colour": "green"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "black"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " green",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "StackedBar",
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",
                        "y": "yscale",
                        "sort": "c",
                        "color": "colorscale",
                        "width": 5,
                        "fillColor": "colorscale"
                    }
                }

            ]
            , "guides": [

                {
                    "type": "legend",

                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "name": ["positive", "negative", ""], //array
                        // "field": ["green","blue","yellow"], // name of field colour or width scale //array
                        "field": "colorscale",
                        "symbols": {
                            // "gome_type":"line", //test line
                            //"line_weight":5,
                            //"line_lenght":20,
                            //"width":30,
                            // "height":10,
                            // __________________________________
                            "gome_type": "bar", //test bar
                            "width": 20,
                            "height": 10,
                            "line_weight": 2,//array
                            //_________________________________
                            // {
                            //"gome_type":"point", //test point
                            //"width":20,
                            //"height":10,
                            //"radius":3,//array

                            // },
                            //_________________________________
                            //{
                            /* "gome_type":"diamond", //test diamond
				   "width":20,
				   "height":20,
				   "line_weight":4,//array*/


                        }
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1040,
                            "y": 90,
                            "stroke_width": 90,
                            "stroke_height": 70,
                            // "line_width":10,
                        }
                    },

                },
                {
                    "type": "text",
                    "properties": {
                        "label": "relation bettween x and y",
                        "font": "20px toham",
                        "colour": "blue",
                        "position": {
                            "x": 500,
                            "y": 80
                        }
                    },
                }
            ]


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "vline") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/VLcrimea.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [

                
            ],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 380]},
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range", "value": ["#808080", "#FF0000"]},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian",   // put your type here first ..
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Point",
                    "data": "crimea",
                    "properties": {
                        //"groupby" : "x",
                        //"sortby" :"yscale",
                        "x": "xscale",
                        "y": "yscale",
                        "color": "colorscale",
                        "fillColor": "colorscale"
                    }
                },

                {
                    "type": "vline",
                    "data": "crimea",
                    "properties": {
                        //"groupby" : "x",
                        //"sortby" :"yscale",
                        "x": "xscale",
                        "y": "yscale",
                        "intersect": [21, 71] // you can enter your yscale direct or your array []

                    }

                }

            ]


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "hline") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/VLcrimea.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [

                
            ],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [60, 380]},
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range", "value": ["#808080", "#FF0000"]},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian",   // put your type here first ..
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Point",
                    "data": "crimea",
                    "properties": {
                        //"groupby" : "x",
                        //"sortby" :"yscale",
                        "x": "xscale",
                        "y": "yscale",
                        "color": "colorscale",
                        "fillColor": "colorscale"
                    }
                },
                {
                    "type": "hline",
                    "data": "crimea",
                    "properties": {
                        //"groupby" : "x",
                        //"sortby" :"yscale",
                        "x": "xscale",
                        "y": "yscale",
                        "intersect": "y"//[1,8],// you can enter your yscale direct or your array []

                    }

                }


            ]


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "vbar") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [

                
            ],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "crimea", "field": "y"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "x"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range", "value": ["#808080", "#FF0000"]},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian",   // put your type here first ..
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "bottom",
                        "grid": true
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "left",
                        "grid": true
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Bar",
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "dir": "vertical",
                        "color": "colorscale",
                        "width": 3,
                        "fillColor": "rgba(170, 170, 170, 0.1)",
                        "border": 100
                        /*"type": "StackedBar",
                    "data": "crimea",
                   "properties": {
                    "x": "xscale",
					"y": "yscale",
					"sort":"c",
					"color" : "colorscale",
                    "width" : 15 ,
					"fillColor":"colorscale"
				}
				/*"type": "vline",
                "data": "crimea",
                "properties": {
				    //"groupby" : "x",
					//"sortby" :"yscale",
                   "x": "xscale",
                   "y": "yscale",
				   "intersect":"yscale" // you can enter your yscale direct or your array []

                }
				*/
                    }
                }

            ]


        };

        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "hist") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-hist.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [

                {
                    //"lang": "R",    // function language
                    "function": "count", // function name
                    "properties": {
                        "data": "crimea",
                        //"length": 20,
                        "field": "x",
                        //"library" : "numbers",
                        "name": "Count"
                    }
                }
            ],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "Count"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range", "value": ["#808080", "#FF0000"]},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian",   // put your type here first ..
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "Count",
                        "orient": "left",
                        "grid": true
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Histogram",
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        //"dir":"vertical",
                        "color": "black",
                        "width": 3,
                        "fillColor": "green",
                        "border": 100
                        /*"type": "StackedBar",
                    "data": "crimea",
                   "properties": {
                    "x": "xscale",
					"y": "yscale",
					"sort":"c",
					"color" : "colorscale",
                    "width" : 15 ,
					"fillColor":"colorscale"
				}
				/*"type": "vline",
                "data": "crimea",
                "properties": {
				    //"groupby" : "x",
					//"sortby" :"yscale",
                   "x": "xscale",
                   "y": "yscale",
				   "intersect":"yscale" // you can enter your yscale direct or your array []

                }
				*/
                    }
                }

            ]


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "pie") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": 60,
            "background": "rgba(170, 170, 170, 0.1)",
            "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
            "data": [
                {
                    "name": "troops",
                    "values": "csv/troops.csv",
                    "format": {
                        "type": "csv"
                    }

                },
                {
                    "name": "cities",
                    "values": "csv/cities.csv",
                    "format": {
                        "type": "csv"
                    }

                }
            ],
            "transform": [
//            {
//                "lang": "R",    // function language
//                "function": "fibonnaci", // function name
//                "properties": {
//                    "data": "static",
//                    "length": 20,
//                    "field": "x",
//                    "library" : "numbers",
//                    "name": "fibonnaci_x"
//                }
//            }
            ],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "troops", "field": "long"}
                },
                {
                    "name": "yscale",
                    "type": "ordinal",
                    //  "range": [0,360],
                    "range": {"type": "rangePoints", "value": [10, 360]},
                    "domain": {"data": "cities", "field": "city"}
                },
                {
                    "name": "x2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "cities", "field": "long"}
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "colorscale",
                    "type": "category20b",
                    "range": {"type": "range"},
                    // "range": ["#808080","#ADD8E6","#CD5C5C","brown","#808080","black","white","#8FBC8F" ],
                    "domain": {"data": "cities", "field": "long"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "troops", "field": "survivors"}
                }


            ]
            , "axes": {
                "type": "coord_polar",   // put your type here first ..
                "properties": [
                    {
                        "type": "angle",
                        "data": "cities",
                        "field": "city", // da el tdreg ele hyktab 3la circle
                        "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                        "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                        "grid": true,
                        "clockwise": false,
                        "font_color": "#336600",
                        "coord_color": "#ff6666"
                    },
                    {
                        "type": "radius",
                        "data": "cities",
                        "field": "long",// el kem ele hktbha 3la el axis
                        "radius": "x2scale",//position  ele haktab 3ndha el kem
                        "position": 30//the distance between el axis  and diameter " has defult  value"
                        // "grid": false
                    }]
            }
            , "geom": [{
                "type": "Pie",
                "data": "cities",
                "properties": {
                    "angle": "yscale",
                    "color": "colorscale",
                    "anticlockwise": true
                }
            }]


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "pbar") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": 60,
            "background": "rgba(170, 170, 170, 0.1)",
            "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
            "data": [
                {
                    "name": "troops",
                    "values": "csv/troops.csv",
                    "format": {
                        "type": "csv"
                    }

                },
                {
                    "name": "cities",
                    "values": "csv/cities.csv",
                    "format": {
                        "type": "csv"
                    }

                }
            ],
            "transform": [
//            {
//                "lang": "R",    // function language
//                "function": "fibonnaci", // function name
//                "properties": {
//                    "data": "static",
//                    "length": 20,
//                    "field": "x",
//                    "library" : "numbers",
//                    "name": "fibonnaci_x"
//                }
//            }
            ],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "troops", "field": "long"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 210]},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "x2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "cities", "field": "long"}
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "colorscale",
                    "type": "category20c",
                    "range": {"type": "range"},
                    "domain": {"data": "cities", "field": "city"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "troops", "field": "survivors"}
                }


            ]
            , "axes": {
                "type": "coord_polar",   // put your type here first ..
                "properties": [
                    {
                        "type": "angle",
                        "data": "cities",
                        "field": "lat", // da el tdreg ele hyktab 3la circle
                        "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                        "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                        "grid": true,
                        "clockwise": false
                    },
                    {
                        "type": "radius",
                        "data": "cities",
                        "field": "long",// el kem ele hktbha 3la el axis
                        "radius": "x2scale",//position  ele haktab 3ndha el kem
                        "position": 20//the distance between el axis  and diameter " has defult  value"
                        // "grid": false
                    }]
            }
            , "geom": [

                {
                    "type": "Bar",
                    "data": "cities",
                    "properties": {
                        "angle": "yscale",
                        "radius": "x2scale",
                        "color": "colorscale",
                        "anticlockwise": true
                    }
                }

                ]
            , 


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "text") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": 60,
            "background": "rgba(170, 170, 170, 0.1)",
            "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
            "data": [
                {
                    "name": "troops",
                    "values": "csv/troops.csv",
                    "format": {
                        "type": "csv"
                    }

                },
                {
                    "name": "cities",
                    "values": "csv/cities.csv",
                    "format": {
                        "type": "csv"
                    }

                }
            ],
            "transform": [
//            {
//                "lang": "R",    // function language
//                "function": "fibonnaci", // function name
//                "properties": {
//                    "data": "static",
//                    "length": 20,
//                    "field": "x",
//                    "library" : "numbers",
//                    "name": "fibonnaci_x"
//                }
//            }
            ],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "troops", "field": "long"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 360]},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "x2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "cities", "field": "long"}
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "cities", "field": "city"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "troops", "field": "survivors"}
                }


            ]
            , "axes": {
                "type": "coord_polar",   // put your type here first ..
                "properties": [
                    {
                        "type": "angle",
                        "data": "cities",
                        "field": "lat", // da el tdreg ele hyktab 3la circle
                        "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                        "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                        "grid": true,
                        "clockwise": false,
                        "font_color": "#336600",
                        "coord_color": "#ff6666"
                    },
                    {
                        "type": "radius",
                        "data": "cities",
                        "field": "long",// el kem ele hktbha 3la el axis
                        "radius": "x2scale",//position  ele haktab 3ndha el kem
                        "position": 20,//the distance between el axis  and diameter " has defult  value"
                        "grid": false
                    }]
            }
            , "geom": [
                {
                    "type": "Text", //hline
                    "data": "cities",
                    "properties": {
                        "angle": "yscale",
                        "distance": "x2scale", //
                        "text": "city",
                        //  "fillColor" : "colorscale",
                    }

                }
                

                
                /* {
				"type": "vline", //hline
                "data": "cities",
                "properties": {
				   "intersect":"yscale",//[1,8],// you can enter your yscale direct or your array []
				   "color":"red"
                }

            }*/

                
                ]
            , 


        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);

    } else if (x === "yfacet") {
        json = {
            "id": "canvas1",
            "width": 700,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 300]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [20, 100]},//20,40
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "m"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_cartesian", 			 // put your type here first ..
                // "type": "coord_flib",
                "facets":
                    {
                        "type": "grid", //grid or wrap

                        "properties":
                            {
                                "margin": 30,
                                // "x_axis":{"field":"m", "data":"crimea"},
                                "y_axis": {"field": "m", "data": "crimea"}

                            }
                    },
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "6px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Diamond", //hline
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "color": "colorscale",
                    }

                }


            ], "guides": []
        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "xfacet") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 170]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [20, 140]},//20,40
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "m"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_cartesian", 			 // put your type here first ..
                // "type": "coord_flib",
                "facets":
                    {
                        "type": "grid", //grid or wrap

                        "properties":
                            {
                                "margin": 30,
                                "x_axis": {"field": "m", "data": "crimea"}//,
                                // "y_axis":{"field":"m", "data":"crimea"}

                            }
                    },
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "6px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Diamond", //hline
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "color": "colorscale",
                    }

                }

            ], "guides": []

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "image") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "imageData",
                    "values": "csv/imageData.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 450]},
                    "domain": {"data": "imageData", "field": "x1"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 380]},//
                    "domain": {"data": "imageData", "field": "x2"}//hist newY
                },
                {
                    "name": "x3scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x3"}//hist newY
                },
                {
                    "name": "x4scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x4"}//hist newY
                },
                {
                    "name": "x5scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x5"}//hist newY
                },
                {
                    "name": "x6scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x6"}//hist newY
                },
                {
                    "name": "x7scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x7"}//hist newY
                },
                {
                    "name": "x8scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x8"}//hist newY
                },
                {
                    "name": "x9scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x9"}//hist newY
                },
                {
                    "name": "x10scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x10"}//hist newY
                },
                {
                    "name": "x11scale",
                    "type": "linear",
                    "range": {"type": "range", "value": ["#d1d1d1", "#000000"]},//
                    "domain": {"data": "imageData", "field": "x11"}//hist newY
                },
                {
                    "name": "x12scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 25]},
                    "domain": {"data": "imageData", "field": "x12"}
                },
                {
                    "name": "x13scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [9, 15]},//
                    "domain": {"data": "imageData", "field": "x13"}//hist newY
                },
                {
                    "name": "x14scale",
                    "type": "category10",
                    "range": {"type": "range"},//
                    "domain": {"data": "imageData", "field": "x14"}//hist newY
                },

            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_cartesian", 			 // put your type here first ..
                // "type": "coord_flib",

                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "imageData", // scale for axis
                        "field": "x1",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "x13scale", "colour": "x14scale"},
                        "annotation": {
                            "title": "field X1",
                            "position": "middle",
                            "font": "10px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "imageData", // scale for axis
                        "field": "x2",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X2",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }

                ]
            }
            , "geom": [
                {
                    "type": "Image", //hline
                    "data": "imageData",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "pixels": [["x3scale", "x4scale", "x5scale"], ["x6scale", "x7scale", "x8scale"], ["x9scale", "x10scale", "x11scale"]],
                        "height": "x12scale",
                        "width": "x12scale"

                    }

                },

            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "imageData",
                        // "name": ["positive","negative",""], //array
                        // "field": ["green","blue","yellow"], // name of field colour or width scale //array
                        "field": "x3scale",
                        "symbols": {
                            "gome_type": "bar", //test bar
                            "width": 20,
                            "height": 10,
                            "line_weight": 2,//array,


                        }
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 630,
                            "y": 50,
                            "stroke_width": 120,
                            "stroke_height": 250,
                            // "line_width":10,
                        }
                    },

                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "polar_parallel") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-parallel.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 330]},
                    "domain": {"data": "crimea", "field": "name"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "economy (mpg)"}//hist newY
                },
                {
                    "name": "y1scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "cylinders"}//hist newY
                },//name,economy (mpg),cylinders,displacement (cc),power (hp),weight (lb),0-60 mph (s),year
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "displacement (cc)"}//hist newY
                },
                {
                    "name": "y3scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "power (hp)"}//hist newY
                },
                {
                    "name": "y4scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "weight (lb)"}//hist newY
                },
                {
                    "name": "y5scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "0-60 mph (s)"}//hist newY
                },
                {
                    "name": "y6scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},//
                    "domain": {"data": "crimea", "field": "year"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "crimea", "field": "year"}
                },
                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "year"}
                },
                {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "year"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_polar_parallel",// put your type here first ..
                "properties": [
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "economy (mpg)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "economy (mpg)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }
                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "cylinders",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "cylinders",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {"power": 2, "name": "power"}

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "displacement (cc)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "displacement (cc)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {"power": 2, "name": "power"}

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "power (hp)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "power (hp)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "weight (lb)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "weight (lb)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "0-60 mph (s)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "0-60 mph (s)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "year",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "year",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Line", //hline
                    "data": "crimea",
                    "properties": {
                        // "x": "xscale",//xscale
                        "y": ["yscale", "y1scale", "y2scale", "y3scale", "y4scale", "y5scale", "y6scale"],//yscale
                        "color": "colorscale",
                    }

                }

            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "line", //test line
                            "line_weight": 2,
                            "line_lenght": 20,
                            "width": 30,
                            "height": 10
                        }
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1000,
                            "y": 50,
                            "stroke_width": 120,
                            "stroke_height": 300,
                            // "line_width":10,
                        }
                    },

                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "parallel") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-parallel.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [

                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "economy (mpg)"}//hist newY
                },
                {
                    "name": "y1scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "cylinders"}//hist newY
                },//name,economy (mpg),cylinders,displacement (cc),power (hp),weight (lb),0-60 mph (s),year
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "displacement (cc)"}//hist newY
                },
                {
                    "name": "y3scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "power (hp)"}//hist newY
                },
                {
                    "name": "y4scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "weight (lb)"}//hist newY
                }
                ,
                {
                    "name": "y5scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "0-60 mph (s)"}//hist newY
                }
                ,
                {
                    "name": "y6scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},//
                    "domain": {"data": "crimea", "field": "year"}//hist newY
                },
                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "year"}
                }
            ]

            , "axes": {
                "type": "coord_parallel",
                "properties": [

                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "economy (mpg)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "economy (mpg)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "cylinders",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "cylinders",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "displacement (cc)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "displacement (cc)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "power (hp)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "power (hp)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "weight (lb)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "weight (lb)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "0-60 mph (s)",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "0-60 mph (s)",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "year",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "year",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Line", //hline
                    "data": "crimea",
                    "properties": {
                        // "x": "xscale",//xscale
                        "y": ["yscale", "y1scale", "y2scale", "y3scale", "y4scale", "y5scale", "y6scale"],//yscale
                        "color": "colorscale",
                    }

                }

            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "line", //test line
                            "line_weight": 2,
                            "line_lenght": 20,
                            "width": 30,
                            "height": 10
                        }
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1250,
                            "y": 50,
                            "stroke_width": 120,
                            "stroke_height": 300,
                            // "line_width":10,
                        }
                    },

                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "polar_point") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": 60,
            "background": "rgba(170, 170, 170, 0.1)",
            "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
            "data": [
                {
                    "name": "troops",
                    "values": "csv/troops.csv",
                    "format": {
                        "type": "csv"
                    }

                },
                {
                    "name": "cities",
                    "values": "csv/cities.csv",
                    "format": {
                        "type": "csv"
                    }

                }
            ],
            "transform": [],
            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "width"},
                    "domain": {"data": "troops", "field": "long"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [10, 360]},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "x2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 190]},
                    "domain": {"data": "cities", "field": "long"}
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "cities", "field": "lat"}
                },
                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "cities", "field": "city"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "troops", "field": "survivors"}
                }


            ]
            , "axes": {
                "type": "coord_polar",   // put your type here first ..
                "properties": [
                    {
                        "type": "angle",
                        "data": "cities",
                        "field": "lat", // da el tdreg ele hyktab 3la circle
                        "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                        "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                        "grid": true,
                        "clockwise": false,
                        "font_color": "#336600",
                        "coord_color": "#fff5555"//"#ff6666"
                    },
                    {
                        "type": "radius",
                        "data": "cities",
                        "field": "long",// el kem ele hktbha 3la el axis
                        "radius": "x2scale",//position  ele haktab 3ndha el kem
                        "position": 20,//the distance between el axis  and diameter " has defult  value"
                        "grid": false
                    }]
            }
            , "geom": [
                {
                    "type": "Point", //hline
                    "data": "cities",
                    "properties": {
                        "angle": "yscale",
                        "distance": "x2scale", //
                        "fillColor": "colorscale",
                    }

                }
            ]
            , "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "cities",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "point", //test point
                            "width": 20,
                            "height": 10,
                            "radius": 3,//array

                        },
                    },
                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "red",
                            "title_font": "16px Arial",
                        },
                        "position": {
                            "x": 270,
                            "y": 10,
                            "stroke_width": 0,
                            "stroke_height": 0,
                            // "line_width":10,
                        }
                    }
                },

            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "hbar_facet") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 310]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 160]},//
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 180]},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "m"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_cartesian",
                "facets":
                    {
                        "type": "grid", //grid or wrap

                        "properties":
                            {
                                "margin": 30,
                                "x_axis": {"field": "c", "data": "crimea"},
                                "y_axis": {"field": "c", "data": "crimea"}

                            }
                    },
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "6px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Bar", //hline
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "fillColor": "colorscale",
                    }

                }

            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "point", //test point
                            "width": 20,
                            "height": 10,
                            "radius": 3,//array

                        },
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1130,
                            "y": 50,
                            "stroke_width": 0,
                            "stroke_height": 0,
                            // "line_width":10,
                        }
                    },

                },
                {
                    "type": "text",
                    "properties": {
                        "label": "relation bettween x and y",
                        "font": "20px toham",
                        "colour": "blue",
                        "position": {
                            "x": 500,
                            "y": 80
                        }
                    },
                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "xyfacet") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 180]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 90]},//
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_cartesian",
                "facets":
                    {
                        "type": "grid", //grid or wrap

                        "properties":
                            {
                                "margin": 30,
                                "x_axis": {"field": "m", "data": "crimea"},
                                "y_axis": {"field": "c", "data": "crimea"}

                            }
                    },
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "6px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Point", //hline
                    "data": "crimea",
                    "properties": {
                        "x": "xscale",//xscale
                        "y": "yscale",//yscale
                        "fillColor": "colorscale",
                    }

                }
            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "point", //test point
                            "width": 20,
                            "height": 10,
                            "radius": 3,//array

                        },
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1130,
                            "y": 50,
                            "stroke_width": 0,
                            "stroke_height": 0,
                            // "line_width":10,
                        }
                    },

                },
                {
                    "type": "text",
                    "properties": {
                        "label": "relation bettween x and y",
                        "font": "20px toham",
                        "colour": "blue",
                        "position": {
                            "x": 500,
                            "y": 80
                        }
                    },
                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "parallel_facet") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-bar.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": [],

            "scales": [
                {
                    "name": "xscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 180]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 96]},//
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "y1scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 96]},//
                    "domain": {"data": "crimea", "field": "x"}//hist newY
                },
                {
                    "name": "y2scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 96]},//
                    "domain": {"data": "crimea", "field": "c"}//hist newY
                },
                {
                    "name": "y3scale",
                    "type": "linear",
                    "range": {"type": "range", "value": [0, 96]},//
                    "domain": {"data": "crimea", "field": "m"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "linear",
                    "range": {"type": "range", "value": "height"},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "m"}
                }, {
                    "name": "widthscale",
                    "type": "log",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }
            ]
            // "axes":"x" //x or y or both

            , "axes": {
                "type": "coord_parallel",
                "facets":
                    {
                        "type": "grid",

                        "properties":
                            {
                                "margin": 30,
                                "y_axis": {"field": "m", "data": "crimea"}

                            }
                    },
                "properties": [
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field x",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },

                    {

                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "orange"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " orange",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "c",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "brown"},
                        "annotation": {
                            "title": "Field c",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " black",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "m",
                        "orient": "left",
                        "grid": false,
                        "text": {"font": "10px tohma", "colour": "green"},
                        "annotation": {
                            "title": "Field m",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " green",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Line", //hline
                    "data": "crimea",
                    "properties": {
                        // "x": "xscale",//xscale
                        "y": ["yscale", "y1scale", "y2scale", "y3scale"],//yscale
                        "color": "colorscale",
                        "width": 2
                    }

                }
            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "point", //test point
                            "width": 20,
                            "height": 10,
                            "radius": 3,//array

                        },
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1160,
                            "y": 40,
                            "stroke_width": 0,
                            "stroke_height": 0,
                            // "line_width":10,
                        }
                    },

                },

            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    } else if (x === "point") {
        json = {
            "id": "canvas1",
            "width": 750,
            "height": 500,
            "margin": "",
            "background": "rgba(170, 170, 170, 0.1)",
            "data": [
                {
                    "name": "crimea",
                    "values": "csv/crimea-text.csv",
                    "format": {
                        "type": "csv"
                    }

                },

            ],
            "transform": []

            , "scales": [
                {
                    "name": "xscale",
                    "type": "ordinal",
                    "range": {"type": "rangePoints", "value": [60, 1130]},
                    "domain": {"data": "crimea", "field": "x"}
                },
                {
                    "name": "yscale",
                    "type": "ordinal",
                    "range": {"type": "rangePoints", "value": [60, 380]},
                    "domain": {"data": "crimea", "field": "y"}//hist newY
                },
                {
                    "name": "hscale",
                    "type": "ordinal",
                    "range": {"type": "rangePoints", "value": [60, 380]},
                    "domain": {"data": "crimea", "field": "y"}
                },

                {
                    "name": "colorscale",
                    "type": "category10",
                    "range": {"type": "range"},
                    "domain": {"data": "crimea", "field": "c"}
                }, {
                    "name": "widthscale",
                    "type": "linear",
                    "range": {"type": "range", "value": [3, 19]},
                    "domain": {"data": "crimea", "field": "c"}
                }


            ]
            , "axes": {
                "type": "coord_cartesian", 			 // put your type here first ..
                // "type": "coord_flib",
                "properties": [
                    {
                        "type": "x", // x axis
                        "data": "crimea", // scale for axis
                        "field": "x",
                        "grade": "text",
                        "orient": "bottom",
                        "grid": true,
                        "text": {"font": "15px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "field X",
                            "position": "middle",
                            "font": "10px Arial",
                            "colour": "blue"
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"

                            }


                        }
                    },
                    {
                        "type": "y", // y axis
                        "data": "crimea", // scale for axis
                        "field": "y",
                        "grade": "text",
                        "orient": "left",
                        "grid": true,
                        "text": {"font": "10px tohma", "colour": "blue"},
                        "annotation": {
                            "title": "Field Y",
                            "position": "edge",
                            "font": "10px Arial",
                            "colour": " blue",
                        },//edge or middle}
                        "transform": {
                            "function": "pow", // function name
                            "properties": {
                                "power": 2,
                                "name": "power"
                            }

                        }
                    }
                ]
            }
            , "geom": [
                {
                    "type": "Point",
                    "data": "crimea",
                    "properties": {
                        //"groupby" : "x",
                        //"sortby" :"yscale",
                        "x": "xscale",
                        "y": "yscale",
                        "color": "colorscale",
                        "fillColor": "colorscale"
                    }
                }


            ], "guides": [

                {
                    "type": "legend",
                    "domain": {
                        "type": "colour",//colour ,width scale,
                        "data": "crimea",
                        "field": "colorscale",
                        "symbols": {
                            "gome_type": "bar", //test bar
                            "width": 20,
                            "height": 10,
                            "line_weight": 2,//array

                        }
                    },

                    "properties": {
                        "title": {
                            "name": "key map",
                            //"title_position":"center",
                            "title_color": "black",
                            "title_font": "12px Arial",
                        },
                        "position": {
                            "x": 1050,
                            "y": 100,
                            "stroke_width": 0,
                            "stroke_height": 0,
                            // "line_width":10,
                        }
                    }
                }
            ]

        };
        editor.set(json);
        del = document.getElementById("graph");
        //del.removeChild(del.childNodes[0]);
        del.innerHTML = "";
        canvas = document.createElement('canvas');
        canvas.id = "canvas1";
        canvas.width = 750;
        canvas.height = 500;
        del.appendChild(canvas);
        GoG_Parser(json);
    }

}

// create the editor
const container = document.getElementById('jsoneditor');
const options = {
    modes: ['text', 'code', 'tree', 'form', 'view'],
    mode: 'code',
    ace: ace
};
json = {
    "id": "canvas1",
    "width": 750,
    "height": 500,
    "margin": 60,
    "background": "rgba(170, 170, 170, 0.1)",
    "define": ["function testeval1(){ return 1;}", "var GLOBAL = 1;"],
    "data": [
        {
            "name": "troops",
            "values": "csv/troops.csv",
            "format": {
                "type": "csv"
            }

        },
        {
            "name": "cities",
            "values": "csv/cities.csv",
            "format": {
                "type": "csv"
            }

        }
    ],
    "transform": [
//            {
//                "lang": "R",    // function language
//                "function": "fibonnaci", // function name
//                "properties": {
//                    "data": "static",
//                    "length": 20,
//                    "field": "x",
//                    "library" : "numbers",
//                    "name": "fibonnaci_x"
//                }
//            }
    ],
    "scales": [
        {
            "name": "xscale",
            "type": "linear",
            "range": {"type": "range", "value": "width"},
            "domain": {"data": "troops", "field": "long"}
        },
        {
            "name": "yscale",
            "type": "linear",
            "range": {"type": "range", "value": [10, 360]},
            "domain": {"data": "cities", "field": "lat"}
        },
        {
            "name": "x2scale",
            "type": "linear",
            "range": {"type": "range", "value": [0, 190]},
            "domain": {"data": "cities", "field": "long"}
        },
        {
            "name": "y2scale",
            "type": "linear",
            "range": {"type": "range", "value": "height"},
            "domain": {"data": "cities", "field": "lat"}
        },
        {
            "name": "colorscale",
            "type": "category10",
            "range": {"type": "range", "value": ["#808080"]},
            "domain": {"data": "cities", "field": "city"}
        }, {
            "name": "widthscale",
            "type": "log",
            "range": {"type": "range", "value": [3, 19]},
            "domain": {"data": "troops", "field": "survivors"}
        }


    ]
    , "axes": {
        "type": "coord_polar",   // put your type here first ..
        "properties": [
            {
                "type": "angle",
                "data": "cities",
                "field": "lat", // da el tdreg ele hyktab 3la circle
                "angle": "yscale",//el angles el hrsmaha 34an el tdreg
                "radius": 190, // it's option for user to detrimine the radius of circle  but he should  aware about the height when he  use it , if the user don't write it it has defult value
                "grid": true,
                "clockwise": false
            },
            {
                "type": "radius",
                "data": "cities",
                "field": "long",// el kem ele hktbha 3la el axis
                "radius": "x2scale",//position  ele haktab 3ndha el kem
                "position": 20//the distance between el axis  and diameter " has defult  value"
                // "grid": false
            }]
    }
    , "geom": [

        {
            "type": "Arc",
            "data": "cities",
            "properties": {
                "angle": "yscale",
                "radius": "x2scale",
                "color": "colorscale",
                "anticlockwise": true
            }
        }

        ]
    , 


};

var editor = new JSONEditor(container, options, json);
// get json
document.getElementById('getJSON').onclick = function () {
    const json = editor.get();
    //alert(JSON.stringify(json, null, 2));
    const del = document.getElementById("graph");
    del.innerHTML = "";
    const canvas = document.createElement('canvas');
    canvas.id = "canvas1";
    canvas.width = 750;
    canvas.height = 500;
    del.appendChild(canvas);
    GoG_Parser(json);
    d3.scale.log().domain([1000, 4000]).range([35, 350]);
};
