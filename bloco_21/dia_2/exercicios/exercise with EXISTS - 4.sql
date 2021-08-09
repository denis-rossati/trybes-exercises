SELECT cars.Name, customers.Name
FROM hotel.Customers AS customers
INNER JOIN hotel.Cars AS cars
WHERE EXISTS (
	SELECT * 
    FROM hotel.CarSales AS sales
    WHERE cars.Id = sales.carId
    AND customers.CustomerId = sales.CustomerID
);
