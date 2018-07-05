import React from "react";

class EditFishForm extends React.Component {

   handleChange = event => {
      // update that fish
      // take a copy of the current fish
      console.log(event.currentTarget.name);
      const updatedFish = {
         ...this.props.fish,
         [event.currentTarget.name]: event.currentTarget.value
      };
      console.log(updatedFish);
   };

   render() {
      return (
         <div className="fish-edit">
            <input
               type="text"
               name="name"
               onChange={this.handleChange}
               value={this.props.fish.name}
            />
            <input
               type="text"
               name="price"
               onChange={this.handleChange}
               value={this.props.fish.price}
            />
            <select
               type="text"
               name="status"
               onChange={this.handleChange}
               value={this.props.fish.status}
            >
               <option onChange={this.handleChange} value="available">Fresh</option>
               <option onChange={this.handleChange} value="unavailable">sold out</option>
            </select>
            <textarea
               name="desc"
               onChange={this.handleChange}
               value={this.props.fish.desc}
            ></textarea>
            <input
               type="text"
               name="image"
               onChange={this.handleChange}
               value={this.props.fish.image}
            />
         </div>
      );
   }
}

export default EditFishForm;