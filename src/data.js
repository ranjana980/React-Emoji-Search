import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];
const items = .filter((data) => {
          if (this.items.age<60)
            return data
    //       else if (data.title.toLowerCase().includes(this.state.search.toLowerCase()) || data.symbol.toLowerCase().includes(this.state.search.toLowerCase())) {
    //         return data
    //       }
        }).map(data => {
          return (
    //           <div class="main_div">
    //             <ul>
    //               <div>
                    <span >{data.age}{data.name}</span>
    //               </div>
    //             </ul>
    //           </div>
    //       )
          )});
      
    

export default App;