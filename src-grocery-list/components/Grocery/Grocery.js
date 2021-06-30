import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import GroceryList from "./GroceryList";
import Button from "../Common/Button";

import "./grocery/css";
// console.log(process.env.NODE_ENV);

const URL = "http://localhost:3001";


export class Grocery extends Component {
  state = {
    groceryList: [],
    groceryInput: "",
    error: null,
    errorMessage: "",
  };
  
  async componentDidMount() {
    try {
      let allGroceries = await axios.get(`${URL}/api/grocery/get-all-groceries`); //axios will always come back as .data || objects will always come back as .payload
      console.log(allGroceries);
      console.log(allGroceries.data);
      console.log(allGroceries.data.payload);
      
      this.setState({
        groceryList: allGroceries.data.payload,
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  handleGroceryOnChange = (event) => {
    this.setState({
      groceryInput: event.target.value,
      error: null,
      errorMessage: "",
    });
  }; 
  
  handleOnSubmit = async (event) => {
    event.preventDefault(); //handle on submit always contains the event.preventDefault
    if (this.state.groceryInput.length === 0) {
      this.setState({
        error: true,
        errorMessage: "Must add a grocery item",
      });
    } else {
      
      let (checkIfGroceryItemAlreadyExists > -1) {
        this.setState({
          error: true, 
          errorMessage: "Grocery item already exists; input another item",
        });
      }  else {
        
        try {
          let createdGroceryItem = await axios.post(
            "`${URL}/api/grocery/create-grocery`",
            {
              grocery: this.state.groceryInput,
            }
            );
            console.log(createdGroceryItem);
            let newArray = [...this.state.groceryList, createdGroceryItem.data.payload];
            this.setState({
              groceryList: newArray,
              groceryInput: "",
            });
          } catch (e){
            console.log(e);
          }
        }
      }
    };
    
    handleEditById = async (_id, editInput) => {
      try {
        let editedGrocery = await axios.put(
          "`${URL}/api/grocery/update-grocery-by-id/${id}`",
          {
            grocery: editInput,
          }
          );
          console.log(editedGrocery);
          let updatedGroceryArray = this.state.groceryList.map((item) => {
            if (item._id === id) {
              item.grocery = editedGrocery.data.payload.grocery;
            }
            return item;
          });
          this.setState({
            groceryList: updatedGroceryArray,
          });
        } catch (e) {
          console.log(e);
        }
      };
      
      handleDeleteById = async (_id) => {
        try {
          deletedGroceryItem = await axios.delete(
            `${URL}/api/grocery/delete-grocery/${_id}`
            );
            let filteredArray = this.state.groceryList.filter(
              (item) => item._id !== deletedGroceryItem.data.payload._id
              );
              this.setState({
                groceryList: filteredArray,
              });
            } catch (e) {
              console.log(e);
            }
          };
          
          
          sortByDate = async (sortGrocery) => {
            try {
              let sortedGrocery = await axios.get(`${URL}/api/grocery/get-grocery-by-sorted?sort=${sortGrocery}`);
              this.setState({
                groceryList: sortedGrocery.data.payload,
              });
            } catch (e) {
              console.log(e);
            }
          };
          
          sortByPurchased = async (purchased) => {
            try {
              let purchasedGroceries = await axios.get(`${URL}/api/grocery/get-grocery-by-purchased?purchased=${purchased}`);
              this.setState({
                groceryList: purchasedGroceries.data.payload,
              });
            } catch (e) {
              console.log(e);
            }
          };
          
          
          render() {
            return <div>
            
            <div className="form-div">
            <form onSubmit={this.onHandleEditSubmit}>
            <input
            name="input"
            type="text"
            onChange={this.onHandleEditClick}
            value={this.state.groceryInput}
            autoFocus
            id="inputGrocery"
            />
            <button type="submit"></button>
            <div style={{ color: "purple"}}>
            {this.state.error && this.state.errorMessage}
            </div>
            </form>
            </div>
            
            <div className="sortBy">
            <ul>
            <li>
            <Button
            buttonName="sortByDate - oldestToNewest"
            clickFunc={() => this.sortByDate("asc")}
            />
            
            <Button
            buttonName="sortByDate - newestToOldest"
            clickFunc={() => this.sortByDate("desc")}
            />
            
            <Button
            buttonName="SortByPurchased"
            click={() => this.sortByDone("true")}
            />
            
            <Button 
            buttonName="SortByNotPurchased"
            clickFunc={() => this.sortByDone("false")}  
            />
            </li>
            </ul>
            </div>
            
            
            <div className="list-div">
            <ul>
            {this.state.groceryList.map((item, index) => {
              return (
                <Groceries
                key={item._id}
                item={item}
                handleEditById={this.handleEditById}
                onHandleEditSubmit={this.onHandleEditSubmit}
                handleDeleteById={this.handleDeleteById}
                />
                );
              })}
              </ul>
              </div>
              </div>
            }
          }
          export default Grocery;
          