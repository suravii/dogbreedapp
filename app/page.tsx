"use client"; //yo component aba client component 

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {
  //getter ra setter to change api data
  const [dogData, setDogData]= useState({});

  const APIURL="https://dog.ceo/api/breeds/list/all";  //api 

  useEffect(()=>{ //actual api call garxam
    //api le username password rakhera access matra dida condition chahinxa natra chaidaina insdie get
    axios.get(APIURL).then(response=>{  //then le promis cha bhanxa
     const breeds= response.data.message;//console bhitra ko messege render garna
     setDogData(breeds);
    })  
  },[])  //arrow function from ES6
 


  return (
    <main>
      <h2>DOG BREED</h2>
      <div>
        {Object.keys(dogData).map((breed,index)=>{
        //  const image= await getDogImage(breed);
        return(
          <div key={index}>
            <DogImage breed={breed} />
            <h2> {breed}</h2>
            </div>
        )       
        })}
      </div>
    </main>
  );
}

//photo ko lagi component
const DogImage = ({breed}:any)=>{

  const [pic, setPic] = useState("");
  function getDogImage(breedName:any,subBread=null){
     axios.get(`https://dog.ceo/api/breed/${breedName.toLowerCase()}/images/random`).then(response=>setPic(response.data.message));
   
  }

  useEffect(()=>{
    getDogImage(breed);
  },[breed]);


  return <img src={pic} />
}

//Array.map((item,index)=>{})  this is the format