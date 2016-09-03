import React from 'react';
import { ScrollView, ListView } from 'react-native';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import ListLoading from './ListLoading';

export default class FeedPage extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.state.expenses)
        };
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
        if (!item) return null;

        return (
            <ListRow
                index={index}
                item={item}
            />
        );
    }
}

