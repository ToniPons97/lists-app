import React from "react";

export class Colors extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => <li key={item+index}>{item}</li>)}
            </ul>
        );
    }
}