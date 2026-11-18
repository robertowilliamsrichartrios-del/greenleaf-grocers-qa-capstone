# Postman API Test Summary – GreenLeaf Grocers

## Endpoint Tested: `POST /api/promo/validate`
* **Objective:** Verify discount calculation and error handling for promotional codes during checkout.
* **Test Case 1 (Valid Promo Code):** Sent `{"code": "FRESH10", "cartTotal": 50.00}` -> Expected `200 OK` with updated discount.
* **Test Case 2 (Invalid/Expired Code - Defect Found):** Sent `{"code": "EXPIRED99", "cartTotal": 50.00}` -> Expected `400 Bad Request` with validation message.
* **Actual Result:** Server returned **`500 Internal Server Error`** (Unhandled exception in backend promo parser).
