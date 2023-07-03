import todoListImg from "../../assets/todolist.avif"
import teslaLandingImg from "../../assets/teslalanding.avif"
  
  
const projects =[
    
    {
        title:["Todo List for Maidana Propiedades", "Lista de tareas para Maidana Propiedades"],
        texts:["HTML", "CSS", "JS", "React.Js"],
        btns:[
                {"text":["VIEW PROJECT", "VER PROYECTO"],"disabled":true},
                {"text":["VIEW CODE", "VER CODIGO"], "whereTo":"https://github.com/MartinMaidana23/Lista-de-tareas-MaidanaPropiedades"}
            ],
        img:todoListImg
    },
    {
        title:["Tesla Landing Page Clone", "Clon de la landing page de Tesla"],
        texts:["HTML", "Tailwind CSS", "JS", "Astro"],
        btns:[
                {"text":["VIEW PROJECT", "VER PROYECTO"], "whereTo":"https://benevolent-froyo-ba6be2.netlify.app/"},
                {"text":["VIEW CODE", "VER CODIGO"], "whereTo":"https://github.com/MartinMaidana23/landing-tesla-clon"}
            ],
        img:teslaLandingImg
    }
]

export default projects
