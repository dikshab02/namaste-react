{/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement(
    'div',
    {id: "parent"},
    React.createElement(
        'div',
        {id: 'child'},
        [
            React.createElement('h1',{},'I am a h1 tag'),
            React.createElement('h2',{},'I am a h2 tag')
        ]
    )
)

const heading = React.createElement('h1', {id: 'heading'}, 'Hello React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);