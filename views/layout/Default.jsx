const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout
