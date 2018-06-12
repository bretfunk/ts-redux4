import * as React from "react";
import { connect } from "react-redux";
import { addTodo, updateItem } from "../ducks/todo";
import { InputProps } from "../types";

const mapStateToProps = (state: any) => {
  return {
    item: state.item
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: () => dispatch(addTodo()),
    updateItem: (e: any) => dispatch(updateItem(e))
  };
};
class ConnectedInput extends React.Component<InputProps> {
  public render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.item}
          placeholder="thing"
          onChange={this.props.updateItem}
        />
        <input type="submit" name="Submit" onClick={this.props.addTodo} />
      </div>
    );
  }
}

const Input = connect(mapStateToProps, mapDispatchToProps)(ConnectedInput);

export default Input;
