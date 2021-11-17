import React from 'react';


const Layout = (props) => {
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, { index });
    });
    return (
        <>

    
                        <div className="card-body" >

                    
                                {children}
                        </div>


        </>
    );
};

export default Layout;