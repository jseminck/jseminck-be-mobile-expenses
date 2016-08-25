import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './expensesActions';
import { ScrollView, ListView } from 'react-native';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import ListLoading from './ListLoading';

class List extends React.Component {
    static propTypes = {
        login: React.PropTypes.object.isRequired,
        state: React.PropTypes.object.isRequired,

        onLoad: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.state)
        };
    }

    componentDidMount() {
        if (this.props.login.loggedIn) {
            this.props.onLoad(this.props.login.token);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state.expenses !== this.props.state.expenses) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.state.expenses)
            });
        }
    }

    render() {
        if (this.props.state.loading) {
            return (
                <ListLoading />
            );
        }

        return (
            <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={::this.renderHeader}
                    renderRow={::this.renderRow}
                    enableEmptySections={true}
                />
            </ScrollView>
        );
    }

    renderHeader() {
        return (
            <ListHeader
                loading={this.props.state.loading}
            />
        );
    }

    renderRow(item, x, index) {
        return (
            <ListRow
                index={index}
                item={item}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        state: state.expenses
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

