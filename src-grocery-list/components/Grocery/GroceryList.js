import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Common/Button";

import "./groceryList.css";

export class groceryList extends Component {
    state = {
        canEdit: false,
        editInput: this.props.item.grocery,
    };
    
    onHandleEditClick = () => {
        this.setState((prevState) => {
            return {
                canEdit: !prevState.canEdit,
            };
        });
    };
    
    componentDidUpdate() {
        let input = document.getElementById(this.props.inputID);
    }
    onHandleEditSubmit = (id) => {
        this.onHandleEditClick();
        this.props.handleEditByID(id, this.state.editInput);
    };
    
    render() {
        const { grocery, _id, addedItem } = this.props.item;
        const { onHandleEditClick, componentDidUpdate, onHandleEditSubmit, inputID } = this.props;
        const { canEdit, editInput } = this.state;
        
        return (
            <div className="grocery-main-div">
            <div className="groceryList-div">
            
            {canEdit ? (
                <input type="text"
                value={editInput}
                onChange={this.componentDidUpdate}
                name="editInput"
                id={inputID}/>
                
                ) : (
                    <li className={`li-style ${addedItem ? "li-style-addedItem" : ""}`}>{grocery}</li>
                    )}
                    
                    {canEdit ? (
                        <Button 
                        buttonName="Submit" 
                        cssid="edit-button"
                        clickFunc={() => this.onHandleEditSubmit(_id)}/>
                        ) : (
                            
                            <Button 
                            buttonName="Edit"
                            cssid="edit-button"
                            clickFunc={() => this.onHandleEditClick(_id)}/>
                            ) : (   
                                
                                <Button
                                buttonName="addItem"
                                cssid="added-button"
                                clickFunc={() => this.componentDidUpdate(_id, addedItem)}
                                />    
                                
                                <Button 
                                buttonName="Delete"
                                cssid="delete-button"
                                clickFunc={() => handleDeleteByID(_id)}/>
                                )
                                </div>;
                            };
                            
                            </div>
                            </div>
                            
                            GroceryList.PropTypes = {
                                item: PropTypes.object.isRequired,
                                handleEditByID: PropTypes.func.isRequired,
                                componentDidUpdate: PropTypes.func.isRequired,
                                handleDeleteByID: PropTypes.func.isRequired
                            };
                            
                            export default GroceryList; 