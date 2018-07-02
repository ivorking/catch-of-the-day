import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
   handleClick() {
      alert("hey");
   }
   render() {
      console.log(this);
      return (
         <form className="store-selector">
            <h2>Please enter a store</h2>
            <button onClick = {this.handleClick()}>Click me!</button>
            <input
               type="text"
               required
               placeholder="Store Name"
               defaultValue={getFunName()}
            />
            <button type="submit">Visit store -> </button>
         </form>
      );
   }
}

export default StorePicker;
