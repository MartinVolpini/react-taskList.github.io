import  { useEffect , useState } from 'react'

//Utils..
import { generateId } from '../../../utils/generateId';
import  addToLocalStorage  from "../../../utils/localStorage.utils"


export const useTask = () => {

    let [ id , setId ] = useState( generateId() )
 

    let [ title , setTitle ] = useState("")  

    let [ params , setParams ] = useState( { title: title , id_all: id } ); 


    
    // console.log( id )
    let [ taskText , setTaskText ] = useState([])

    let [ task , setTask ]  = useState([]);
    // console.log( "El task" , task )

    let [ allTask , setAllTask ] = useState([ params ])

    let [ taskConteiner , setTaskConteiner ] = useState( [] )
   
    useEffect(()=>{
        //todo: viene a solucionar q cuando agregaba items a allTask los id no cambiaban
        setId( generateId() )
    },[allTask])

    /*----------------------------------------------------------------------------------- */
    
    function changeTitle( arg ){
        // console.log( "Desde el techo de la func " , arg )
        
        setTitle( arg )
    }
    useEffect( () => {

        let _newAllTask =  [...allTask];
            console.log("Desde la escucha 1", _newAllTask, params ,"id: ", id );

        _newAllTask[0].title =  title;
            console.log("Desde la escucha 2", _newAllTask, params , "id: ", id );

        setAllTask(_newAllTask);

            console.log("Desde la escucha 3", allTask , params , "id: ", id );
    },[ title ])


    function addTask(e){
        e.preventDefault();
            console.log("Func addTask techo 1 : ", allTask , task ) ;

        let newArray;
        // 1 - Cargo el task a allTask
        if( task.length > 2 ) {
            newArray = [...allTask , {"task": task , "id": id , "filled": false } ]
            setAllTask( newArray );
                console.log("Func add element 2: newArray " , newArray)
            
        } 
            console.log("Func addTask 3: allTask ", allTask );
        // 2 - Vacio el component el task
        setTask([])

        // 3 - Emparejo los states con el allTask
        loadTaskText( newArray )
        
        console.log(" ")
    }

    async function deleteTask( id ){
        // 1 - Actualizo el compononte para el momento del delete
        let emparejamiento = await cargarTaskTextAAllTask();
        let emparejamiento_taskText_1 =  loadTaskText( allTask )
            console.log("Func delete techo 1: " , id  , allTask , taskText) 
        
        // 2 - Elimino el el elemnto y cargo el newArray a la vista
        let _newTask = allTask.filter((element)=>{ return element.id != id   }) 
        setAllTask([..._newTask])
        // console.log( e.target.parentElement.getAttribute )

        // 3 - Actualizo los states para la vista
        let emparejamiento_taskText_2 = loadTaskText( _newTask )
        console.log(" ");
    };


    let cargarTaskTextAAllTask = async () =>{
    //? taskText --> allTask
        let newTaskText = [...taskText] 
        // let newTaskText = taskText.length > 0 ? newTaskText = [...taskText] :  newTaskText = [] ;
            // console.info("fUNC cargarTaskTextAAllTask TECHO 1 : TaskText" , newTaskText)

        let newAllTask = [...allTask] 
        // let newAllTask =  allTask.length > 0 ? newAllTask = [...allTask] : newAllTask = [] ;
            // console.info("fUNC 2 : AllTask " , newAllTask)
        
        newAllTask.map( async ( element , i ) =>{
            if(i > 0 ) {
                element.task = newTaskText[ i -1 ];
                
            }
            // console.info("fUNC 3 newAllTask: "  , newAllTask)
            
            
        })
            // console.info("fUNC 4 newAllTask: " , newAllTask)

        let res =  setAllTask( newAllTask ) ;
            // console.info("fUNC Piso 5 res: " , allTask)    
            // console.log(" ")
        
    }

    function modificarTask( id ){

            let newArray = structuredClone( allTask ) 

            let item = newArray.find( ( y ) => {
                // console.log("entro 1", y.id , y.task)
                return y.id === id 
            })

                // console.log("entro 2 A", item.filled , item)

            item.filled == true ? item.filled = false : item.filled = true ;

                // console.log("entro 2 B", item.filled , item)
            
                // console.log( newArray , "Modificado " , item )
            
            setAllTask( newArray )
        
    };


    function loadTaskText( arg ){  
        // ? allTask --> taskText
    
            console.log("func loadTaskText techo 1: arg", arg)

        let array = []
        arg.length != undefined && arg.length != 0 
        ? arg.map(( element , i)=>{ //console.info( "func carga taskTexT iteracion: " , element.task )
            i > 0 && array.push(element.task)
            
            }) 
        : console.log("Func carga. No es un array")
        
        array.length > 0 ? setTaskText( [...array] ) : setTaskText( [] )
        // console.log("Func carga taskTexT piso " , array); console.log(" ")
    }

    async function modificarTaskText( e , id , item , num ){
        //? Event --> taskText 
        //! No puedo cargarlo a taskText --> allTask en este componente x q se me muere el evento change xq se renderiza la vista
        //! Lo voy a cargar en otros componentes otros eventos 
        
        let b = e.target.value 
        console.log("Techo de la func " , b , item)
        
        let newTaskText = [...taskText] ;
        newTaskText.map(( element , i )=>{  
            i == num - 1 && newTaskText.splice( i , 1 , b )
        })
        //e.target.childNodes[0].data;          //El contenido en el nodo
        
        setTaskText( newTaskText )

        // setAllTask( newAllTask )

        //e.target.setAttribute( "contentEditable", true)    //La edicion

        // let newArray = structuredClone( allTask ) 
            
        // let modificado =  newArray.find( ( y ) => {
        //     console.log("entro 1" )
        //     return y.id === id && y ;

        // })
        // modificado.task = b ;
        // console.log("Intermedio de la func ", b , newArray , modificado)

        // setAllTask( newArray )
        console.log("Piso de la func ", b , allTask   )
        console.log(" " )
        
        // setTaskText( modificado )

    }
    // useEffect(()=>{

    //     allTask.map((item )=>{
    //         console.info("DESDE LA CARGA DEL COMPONENTE" , item?.task )
    //         item.task && setTaskText([...taskText , item.task ])
    //     })
        
    // },[taskText])
    // console.log("AVER ",taskText)

    async function resetTaskText(){
    //? taskText --> []

        setTaskText([])
    }

    /*------------------------------------------------------ */ //console.info("func saveAll TECHO : allTask" , allTask , "taskConteiner " , taskConteiner);

    

    async function resetView(){
    //? allTask --> [{params}]
        console.log("Func resetView TECHO" , allTask , params , title )
       
        // let params = { title: title , id_all: id } 
        
        setAllTask([ params ])
            console.log("Func resetView PISO" , allTask , params , title )
    }
    
    
    async function saveAll(){
        //? Pasar el allTask -- > taskConteiner
        //* Si ya estaba guardado lo tiene que remplazar y si no solo agregar
        //? Vaciar el allTask , title , taskTexk y generar un nuevo params


        // 0 - Cargo los estados de taskText --> allTask
        let a = await cargarTaskTextAAllTask();
            console.info("func saveAll TECHO : allTask" , allTask , "taskConteiner " , taskConteiner);
        
        // 1 - Verifico si ya esta guardado , remplaso en tal caso  

        let newTaskConteiner = structuredClone( taskConteiner );

        let add = true;
        if( allTask.length > 1) {

            newTaskConteiner.map((item , i)=>{
                let a = allTask[0].id_all
                let b = item[0].id_all
                let iqual = item[0].id_all == allTask[0].id_all ;
                
                console.log( iqual , a ,b , i , " ")

                if( iqual ){ 
                    add = false; 
                   
                    newTaskConteiner.splice( i , 1 , allTask ); 
                   alert(" ") 
                } 

            })

            // 2 - Cargo el allTask --> taskContenedor
       
            let _a = setTaskConteiner( [...newTaskConteiner ] )
            // console.log( taskConteiner , allTask )
            // console.log("")

           // 3 - Lo cargo taskConteiner --> DB LocalStorage
               let _b = addToLocalStorage("task", [...newTaskConteiner ] )
            

      
          
        } else { return  alert("No ingresaste ninguna tarea!!" ) }
        if( add && allTask.length > 0){
             // 2 - Cargo el allTask --> taskContenedor
       
                let _a = setTaskConteiner( [...newTaskConteiner, allTask ] )
             // console.log( taskConteiner , allTask )
             // console.log("")

            // 3 - Lo cargo taskConteiner --> DB LocalStorage
                let _b = addToLocalStorage("task", [...newTaskConteiner, allTask ] )
        }
        
     
        // 4 - Vacio los componentes

            setId( generateId() )
            setTitle("")
            setParams( { title: title , id_all: id } )
            setAllTask([params])
            setTaskText([])

            console.log("Func saveALL Piso : VASIO de allTask: " , allTask , "params:" , params, "id: ", id , "newTaskConteiner: ", newTaskConteiner )
            console.log("")
    } 

    
    console.info("Flotante hook -->", "allTask: ", allTask ,"params: ", params ,"taskText: ", taskText , "title: ", title )
/*-------------------------------------------------------------------------------------- */

    function loadTask( num ){
        setTitle( taskConteiner[ num ][0].title )
        setAllTask( taskConteiner[ num ] )
        
        loadTaskText( taskConteiner[ num ] )
        // console.log( taskConteiner , allTask )
        // console.log("")
    }

    async function deleteAllTask( arg ){
        let newConteiner = taskConteiner.filter((item) => { return item[0].id_all != arg; })
        let a = setTaskConteiner(newConteiner)
        let b = addToLocalStorage("task", [...newConteiner])
        // console.log( newConteiner )
    }
    /*--------------------------------------------------------------------------------- */
    
    //?Event from title

        function handleChangeTitle ( arg ){
            // console.log( "Desde el techo del evento " , arg )
            changeTitle( arg )
        }
    
    //?Events... de la lista

        function onChange(e){
            e.preventDefault();
            // console.log("change", e.target.value );
            setTask( e.target.value ); 
            
        }

        function handleAddTask(e){
        // 0 - Actualizo los cambios de los states --> allTask para que no se me pierdan al momento del renderizado
            cargarTaskTextAAllTask();
        // 1 - Cargo al componente task --> allTask
            addTask(e)
        }

        async function handleResetView(e){
            e.preventDefault();
            //Reseteo el Titulo
                changeTitle("");
            //reseteo el obj allTask  //! no se borra el titulo
                resetView();
            //Reseteo los states taskText
                resetTaskText();

        }

    //?Event del contenedor
    
        function handleSaveAll(e){
            e.preventDefault();
            saveAll()
        }
        function handleLoadTask( e , num ){
            e.preventDefault();
            loadTask( num )
        }
        function handleDeleteAllTask( e , arg ){
            e.preventDefault();
            deleteAllTask( arg )
        }

    useEffect(()=>{
        let dbTask = addToLocalStorage().getFromLocalStorage("task")
        dbTask != undefined && setTaskConteiner( dbTask )
        
        // console.log("EN LA CARGA DEL COMPONENTE", dbTask )
        
        // console.log("id: ", id )   
    },[ ])


    console.log("Hook piso: ", allTask  , taskText)
    console.log(" ")

  return {
    title ,
    handleChangeTitle,
    taskText ,
    setTaskText ,
    task,
    allTask,
    handleAddTask,
    handleResetView ,
    deleteTask,
    onChange,
    modificarTask,
    modificarTaskText,
    handleSaveAll,
    taskConteiner,
    handleLoadTask,
    handleDeleteAllTask
  }
}
