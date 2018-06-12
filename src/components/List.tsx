import * as React from "react";
import { connect } from "react-redux";
import { IListProps } from "../types";

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

class ConnectedList extends React.Component<IListProps> {
  public render() {
    const list = this.props.items.map((item, i) => <li key={i}>{item}</li>);
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
