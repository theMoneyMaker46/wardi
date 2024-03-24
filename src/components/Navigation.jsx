import '../styles/navigation.css'

function Navigation() {
    return (
        <div aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/Shop">Shop</a></li>
                <li class="breadcrumb-item active" aria-current="page">Product Name</li>
            </ol>
        </div>
    );
}
      
export default Navigation;