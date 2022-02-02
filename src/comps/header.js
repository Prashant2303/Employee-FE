import React from 'react';

function Header({ name })
{
    return (
        <div className="text-center" style={ {backgroundColor: "skyblue", padding: 20, marginTop: 10, marginBottom:10} }> 
            <h1>Welcome to MyApp</h1>
            <h2>{ name }</h2>
        </div>
    )
}

export default Header;