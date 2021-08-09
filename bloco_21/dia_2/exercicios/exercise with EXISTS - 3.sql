SELECT customers.name
FROM hotel.Customers AS customers
WHERE NOT EXISTS (
	SELECT *
    FROM hotel.CarSales AS sales
    WHERE sales.CustomerID = customers.CustomerID
);
