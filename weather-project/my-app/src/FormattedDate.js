
export default function FormattedDate(props){

let days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


    let day=days[props.current.getDay()]
    let minutes=props.current.getMinutes();
    let hours=props.current.getHours();

    if (minutes<10){
         minutes=`0${minutes}`
    }
    else{
         minutes=`${minutes}`
    }

    if (hours<10){
        hours=`0${hours}`
   }
   else{
        hours=`${hours}`
   }


    return `${day} ${hours}:${minutes}`
}


