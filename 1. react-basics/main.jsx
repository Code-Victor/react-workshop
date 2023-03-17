import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Tweet} from "./app"
import data from "./data.json"



const message =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magni laboriosam fuga velit suscipit. Optio incidunt voluptates cumque officiis iste.";
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {
      data.map((item,index)=>{
        return (
          <Tweet
            key={item.id}
            header={`${item.first_name} ${item.last_name}`}
            message={message}
            image_url={item.image_url}
          />
        );
      })
    }


    <img src="" />
  </React.StrictMode>
);
