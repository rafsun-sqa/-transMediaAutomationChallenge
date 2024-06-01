pm.test("Login successful", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.environment.set("authToken", jsonData.token);
});
pm.test("Item added to basket", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("item_id", "item123");
    pm.expect(jsonData).to.have.property("quantity", 1);
});
pm.test("Basket contains 1 item", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.expect(jsonData.items).to.be.an('array').that.is.not.empty;
    pm.expect(jsonData.items.length).to.eql(1);
    pm.expect(jsonData.items[0]).to.have.property("item_id", "item123");
    pm.expect(jsonData.items[0]).to.have.property("quantity", 1);
});


