import DateTime from "@/templates/0.atoms/17.DateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteActivity, getActivities } from "@/utils/apiUtils/apiActivitiesUtils";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { SessionData, useSessionActivitiesStore } from "@/utils/ContextProviders/SessionActivitiesStore";

interface ActivityHeaderProps {
  activityId:number;
  tags: string[];
  givenDate?: string;
  rol: string;
  activityType: string;
}

export default function ActivityHeader({
  activityId,
  tags,
  givenDate,
  rol,
  activityType,
}: ActivityHeaderProps) {

  const { setActivities, activities, sessionId } = useSessionActivitiesStore();

  const { getCookie } = useAuthContext();
  async function handleActivityDeletion(){
    try{
      // Actualiza el estado global eliminando la actividad seleccionada
      setActivities(activities.filter(activity => activity.id !== activityId));

      // Envía la petición para eliminar la actividad
      await deleteActivity(getCookie(),activityId, activityType);  

      // Vuelve a obtener las actividades desde el servidor para asegurarse de que el estado esté sincronizado
      const response = await getActivities(getCookie(), sessionId);           

      if(response.status == 200){
        const sessionData = response.data as SessionData;        
        setActivities(sessionData.activities); // Guardar actividades
      }  
    }catch(error){
      console.error("Error in deleteActivity:", error);
    }    
  }
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex w-full items-center justify-between">
        {/* Fecha publicación actividad*/}
        <DateTime className="text-sm" date={givenDate} />
        {/* Boton de borrar publicación */}
        {rol === "DUEÑO" ? (
          <div className="flex items-center gap-x-2">
            <button onClick = {handleActivityDeletion}className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-2 hover:bg-PrimBlue">
              <FontAwesomeIcon className="size-6 text-white" icon={faTrash} />
            </button>            
          </div>
        ) :<></>}
      </div>
      {/* Tags de la actividad */}
      <div className="flex w-full justify-between">
        <div className="flex gap-x-1 overflow-x-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex h-auto flex-none items-center justify-center gap-1 break-words rounded-md bg-PrimBlue px-2 py-1 text-sm font-semibold italic text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
