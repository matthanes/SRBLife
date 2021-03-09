import Nav from './Nav'
import Nav2 from './Nav2'

const Layout = ( {children} ) => {
    return (
        <>
        <Nav2 />
        <div className="container mx-auto">
            <main>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
