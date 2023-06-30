import todoListImg from "../../assets/todolist.avif"
import teslaLandingImg from "../../assets/teslalanding.avif"
  
  
const projects =[
    {
        title:["Congelados Escobar E-Commerce | Final bootcamp proyect ", "E-Commerce Congelados Escobar | Proyecto final del bootcamp"],
        texts:["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDb"],
        btns:[
                {"text":["VIEW PROJECT", "VER PROYECTO"],"disabled":true},
                {"text":["VIEW CODE", "VER CODIGO"], "whereTo":"https://github.com/MartinMaidana23/proyecto-final"}
            ],
        img:todoListImg
    },
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
