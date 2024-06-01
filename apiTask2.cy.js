pm.test("Login successful", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.environment.set("authToken", jsonData.token);
});
pm.test("Items added to basket", function () {
    pm.response.to.have.status(200); // Adjust as needed based on your API's response status
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('array').that.has.lengthOf(2);
    pm.expect(jsonData[0]).to.have.property("item_id", "item123");
    pm.expect(jsonData[0]).to.have.property("quantity", 1);
    pm.expect(jsonData[1]).to.have.property("item_id", "item456");
    pm.expect(jsonData[1]).to.have.property("quantity", 1);
});

pm.test("Item deleted from basket", function () {
    pm.response.to.have.status(204);
});
