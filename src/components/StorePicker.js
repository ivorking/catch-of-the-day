import React, { Fragment } from 'react';

class StorePicker extends React.Component {

   render() {
      return (
         <Fragment>
            <form className="store-selector">
               { /* comment */ }
               <h2>Please enter a store</h2>
               <input type="text" required placeholde="Store Name" />
               <button type="submit">visit store</button>
            </form>
         </Fragment>
      )
   }

}

export default StorePicker;