
const categoryCard = {
    "width": "15rem",
    "height": "18rem"
    // "background-color" : "#30221c",
}
const categoryImg = {
    "padding":"8px 8px 0px 8px",
    "border-radius": "15px 15px 0 0",
    "height": "16rem"
}

function Category() {
    return (
        <div class="category-container">
            <div class="grid container">
                <div class="row">
                <div class="col-sm">
                    <div class="card" style={categoryCard}>
                        <img src="./images/khaki.jpg" style={categoryImg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text" style={{"text-align":"center"}}>Cloth</p>
                        </div>
                    </div>
                </div>
                    <div class="col-sm">
                        <div class="card" style={categoryCard}>
                            <img src="./images/landing_page/stitching.jpg" style={categoryImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" style={{"text-align":"center"}}>Stitched</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={categoryCard}>
                            <img src="./images/landing_page/flap.png" style={categoryImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" style={{"text-align":"center"}}>Accessories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;