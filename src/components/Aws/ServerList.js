import React from 'react';
import { View, ListView } from 'react-native';
import ServerListRow from './ServerListRow';
import ServerListHeader from './ServerListHeader';

export default class ServerList extends React.Component {
    static propTypes = {
        navigator: React.PropTypes.object.isRequired,
        feed: React.PropTypes.array.isRequired,
        countdown: React.PropTypes.number.isRequired,
        loading: React.PropTypes.bool.isRequired,

        onToggleServer: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.feed)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.feed !== this.props.feed) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.feed)
            });
        }
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={::this.renderHeader}
                    renderRow={::this.renderRow}
                    enableEmptySections={true}
                >
                </ListView>
            </View>
        );
    }

    renderHeader() {
        return (
            <ServerListHeader
                loading={this.props.loading}
                countdown={this.props.countdown}
            />
        );
    }

    renderRow(instance) {
        return (
            <ServerListRow
                instance={instance}
                onToggleServer={this.props.onToggleServer}
            />
        );
    }
}
