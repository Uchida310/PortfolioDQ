particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":30,//こ???数値を変更すると紙吹雪の数が増減できる
      "density":{
        "enable":false,
        "value_area":400
      }
    },
    "color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが???来???
    },
    "shape":{
      "type":"star",
      "stroke":{
        "width":0,
      }
      /*"polygon":{
        "nb_sides":5//多角形の角???数
      }*/
      },
      "opacity":{
        "value":1,
        "random":false,
        "anim":{
          "enable":true,
          "speed":10,
          "opacity_min":0,
          "sync":false
        }
      },
      "size":{
        "value":7,
        "random":true,//サイズをランダ???に
        "anim":{
          "enable":true,
          "speed":1,
          "size_min":0.8,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
      },
      "move":{
        "enable":true,
      "speed":3,//こ???数値を小さくすると???っくりな動きにな???
      "direction":"bottom",//下に向かって落ち???
      "random":false,//動きはランダ???にならな???ように
      "straight":false,//動きをとどめな???
      "out_mode":"out",//画面の外に出るよ???に描???
      "bounce":false,//跳ね返りな???
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
        },
        "onclick":{
          "enable":false,
        },
        "resize":true
      },
    },
    "retina_detect":true
  });