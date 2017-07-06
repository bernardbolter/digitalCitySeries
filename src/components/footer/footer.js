import React, { Component } from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p>&copy; 2007 - {(new Date().getFullYear())} | Bernard John Bolter IV</p>
            </footer>
        );
    }
}
