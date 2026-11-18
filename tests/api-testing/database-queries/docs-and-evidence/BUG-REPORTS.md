markdown
# Defect Log – GreenLeaf Grocers Capstone

## BUG-01: Checkout CTA Button Overlap on Mobile Viewport (390x844)
* **Severity:** High | **Priority:** High
* **Environment:** Chrome DevTools Mobile Emulation (iPhone 12/13/14 – `390x844`)
* **Steps to Reproduce:**
  1. Add any grocery item to the cart.
  2. Proceed to Guest Checkout on a `390x844` viewport.
  3. Scroll to the payment summary footer.
* **Expected Result:** "Place Order" button is clearly visible and clickable without overlapping other UI elements.
* **Actual Result:** The "Place Order" button overlaps with the promo code input container, blocking mobile users from completing purchases.

---

## BUG-02: HTTP 500 Internal Server Error on `POST /api/promo/validate`
* **Severity:** Critical | **Priority:** High
* **Environment:** Postman API Client / Staging Backend
* **Steps to Reproduce:**
  1. Send a `POST` request to `/api/promo/validate`.
  2. Pass an invalid or expired promo code string in the JSON payload.
* **Expected Result:** API returns `400 Bad Request` with a user-friendly error message.
* **Actual Result:** API crashes and returns `500 Internal Server Error`.
