/**
 * Created by Administrator on 2017/8/10 0010.
 */

import React from 'react';
import {render} from 'react-dom';
import './index.less';

import CreateBar from '../CreateBar/index.jsx';

import ItemEditor from '../ItemEditor/index.jsx';
import ItemShowLayer from '../ItemShowLayer/index.jsx';
import List from '../List/index.jsx';


class Deskmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedId: null,
            editing: false
        }
    }

    selectItem(id) {
        if (id === this.state.selectedId) {
            return;
        }
        this.setState({
            selectedId: id,
            editing: false
        })
    }

    createItem() {
        // alert(123);
        this.setState({
            selectedId: null,
            editing: true
        });
        console.log(this.state);
    }

    render() {
        return (
            <section className="deskmark-component">
                <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                    <a className="navbar-brand" href="#">Deskmark App</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem.bind(this)}/>
                            <List item={this.state.items} onSelect={this.selectItem.bind(this)}/>
                        </div>
                        <ItemEditor />
                    </div>
                </div>
            </section>
        )
    }
}

export default Deskmark;
