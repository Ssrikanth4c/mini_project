
import React from 'react';

import {Bar} from 'react-chartjs-2';



const restaurantsFoodDeliveryData = {

  labels: ['Restaurant_1', 'Restaurant_2', 'Restaurant_3',

           'Restaurant_4', 'Restaurant_5'],

  datasets: [

    {

      label: 'Food Delivery',

      backgroundColor: 'rgba(75,192,192,1)',

      borderColor: 'rgba(0,0,0,1)',

      borderWidth: 2,

      data: [65, 59, 80, 81, 56]

    }

  ]

}



export default class Reports extends React.Component {

  render() {

    return (

      <div className="container">

        <Bar

          data={restaurantsFoodDeliveryData}

          options={{

            title:{

              display:true,

              text:'Sales of each Restaurant',

              fontSize:20

            },

            legend:{

              display:true,

              position:'right'

            }

          }}

        />

      </div>

    );

  }

}
