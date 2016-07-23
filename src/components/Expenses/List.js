import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './expensesActions';
import { View, Text, ListView } from 'react-native';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import ListLoading from "./ListLoading";

class List extends React.Component {
    static propTypes = {
        login: React.PropTypes.object.isRequired,
        state: React.PropTypes.object.isRequired,

        onDataLoad: React.PropTypes.func.isRequired,
        onToggleServer: React.PropTypes.func.isRequired
    }

    componentDidMount() {
        if (this.props.login.loggedIn) {
            this.props.onDataLoad(this.props.login.loggedIn);
            // this.timer = setInterval(this.props.onTick, 1000);
        }
    }

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows([])
        };
    }

    // componentWillReceiveProps(nextProps) {
        // if (nextProps.feed !== this.props.feed) {
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows(nextProps.feed)
        //     });
        // }
    // }

    render() {
        if (this.props.state.loading) {
            return (
                <ListLoading />
            )
        }
        // return (
        //     <View>
        //         <ListView
        //             dataSource={this.state.dataSource}
        //             renderHeader={::this.renderHeader}
        //             renderRow={::this.renderRow}
        //             enableEmptySections={true}
        //         >
        //         </ListView>
        //     </View>
        // );
    }

    renderHeader() {
        return (
            <ListHeader
                loading={this.props.state.loading}
                countdown={this.props.state.countdown}
            />
        );
    }

    renderRow(instance) {
        return (
            <ListRow
                instance={instance}
                onToggleServer={this.props.onToggleServer}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        login: state.login,
        state: state.expenses
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

