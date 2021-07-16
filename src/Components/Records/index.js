import React, { Component } from "react";
import Card from "../Card";
import Spinner from "../Spinner";
import Info from "../Info";
import Pagination from "../Pagination";

import styles from "./style.module.scss";

class Index extends Component {
    constructor(props) {
        super(props);

        // Sets up our initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            records: [],
            totalRecords: [],
            lap: 0,
            filter: "",
            info: {},
            active: false,
            male: 'data:image/png;base64,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',
            female: 'data:image/png;base64,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'
        };
    }

    componentDidMount() {
        fetch('https://homeofscholars-2c419-default-rtdb.firebaseio.com/testimony.json')
            .then((res) => res.json())
            .then((result) => {
                const testimony = Object.keys(result).map((testKeys) => {
                    return result[testKeys];
                });
                // console.log(testimony)
                this.setState({
                    totalRecords: testimony,
                    records: testimony,
                });
            });
    }

    handleClick = (info) => {
        this.setState({ info });
        this.setState({ active: true });
    };

    setPage = (lap) => {
        this.setState({ lap });
    };

    close = () => this.setState({ active: false });

    render() {
        return (
            <>
                <div
                    className={[
                        styles.container,
                        this.props.darkMode
                            ? styles.darkMode
                            : styles.lightMode,
                    ].join(" ")}
                >
                    {this.state.records.length ? (
                        this.state.records
                            .slice(
                                this.state.lap * 20,
                                this.state.lap * 20 + 20
                            )
                            .map((profile, index) => (
                                <div
                                    className={styles.info}
                                    key={index}
                                >
                                    <Card
                                        name={profile.fullName}
                                        photo={profile.passport ? profile.passport: this.state[profile.sex.toLowerCase()]}
                                        set={profile.hosSet}
                                        sex={profile.sex}
                                        username={profile.courseOfStudy}
                                        phoneNumber={profile.schoolOfChoice}
                                        paymentMethod={profile.wordAboutHos}
                                    />
                                </div>
                            ))
                    ) : (
                        <Spinner />
                    )}
                </div>
                <Info
                    info={this.state.info}
                    open={this.state.active}
                    close={this.close}
                />
                <Pagination
                    unit={this.state.records.length}
                    setPage={this.setPage}
                />
            </>
        );
    }
}

export default Index;
