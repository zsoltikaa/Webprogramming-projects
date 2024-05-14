<div class="filterMenu">
    <form>
        <div class="row">
            <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <div class="mb-3">
                    <label for="carBrand">Brands</label>
                    <select class="form-select" aria-label="Brand" id="carBrand">
                        <option selected>Any</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="carModel" class="form-label">Model</label>
                    <input type="text" class="form-control" id="carModel" placeholder="E.g. Golf">
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <div class="mb-3">
                    <label for="kmFrom">Mileage from</label>
                    <label for="kmTo" style="float: right;">Mileage to</label>
                    <div class="inputs">
                        <input type="text" class="form-control" id="kmFrom" placeholder="E.g. 200km">
                        <input type="text" class="form-control" id="kmTo" placeholder="E.g. 155 000km">
                    </div>
                </div>
                <div class="mb-3 ">
                    <label for="priceFrom">Price from</label>
                    <label for="priceTo" style="float: right;">Price to</label>
                    <div class="inputs">
                        <input type="text" class="form-control" id="priceFrom" placeholder="E.g. 450.000">
                        <input type="text" class="form-control" id="priceTo" placeholder="E.g. 9.500.000">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <div class="mb-3">
                    <label for="carTransmission">Transmission</label>
                    <select class="form-select" aria-label="Transmission" id="carTransmission">
                        <option selected>Any</option>
                        <option value="manuális">Manual</option>
                        <option value="automata">Automatic</option>
                    </select>                           
                </div>
                <div class="mb-3">
                    <label for="carFuel">Fuel type</label>
                    <select class="form-select" aria-label="Fuel type" id="carFuel">
                        <option selected>Any</option>
                        <option value="benzin">Petrol</option>
                        <option value="dízel">Diesel</option>
                        <option value="elektromos">Electric</option>
                    </select>
                </div>
            </div>
        </div>
    </form>
</div>