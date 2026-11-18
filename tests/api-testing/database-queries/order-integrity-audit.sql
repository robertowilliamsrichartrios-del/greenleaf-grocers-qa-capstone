sql
-- Audit recent guest and registered orders in SQLite
SELECT 
    o.order_id,
    u.email,
    o.total_amount,
    o.payment_status,
    o.created_at
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE o.payment_status = 'COMPLETED'
ORDER BY o.created_at DESC
LIMIT 10;

-- Verify account balance consistency after promo code transaction
SELECT user_id, account_balance, updated_at
FROM user_accounts
WHERE account_balance < 0;
